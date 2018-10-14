import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionHeader from '../components/partials/SectionHeader';
import Container from '../components/partials/Container';
import {Button, Card, CardMedia, CardContent, CardActions, Grid, Typography} from '@material-ui/core';
import Jumbotron from '../components/Jumbotron'


class IndexPage extends React.Component {
  render() {
    const { classes, data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Jumbotron />
        <Container container stickyNav>
            <SectionHeader 
              title="L’actualité Social RH" 
              subtitle="Le droit social est une matière vivante, en perpétuelle adaptation aux évolutions sociales et économiques. Etre agile sur la gestion sociale et RH, c’est aussi être en veille permanente sur la législation pour répondre aux besoin des entreprises."
            />
            {posts
              .map(({ node: post }) => (
                <Grid item xs={6}>
                  <Card elevation={10} key={post.id} style={{margin: '20px 0'}}>
                      <CardMedia style={{height: 140}}
                        image={post.image} 
                        alt={post.frontmatter.title}
                        title={post.frontmatter.title}
                      />
                      <CardContent>
                          <Link to={post.fields.slug}>
                              <Typography variant="h6" gutterBottom>
                                  {post.frontmatter.title}
                                  <span> &bull; </span>
                                  <small>{post.frontmatter.date}</small>
                              </Typography> 
                          </Link>
                          <Typography variant="body1" gutterBottom>
                              {post.excerpt}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Grid container>
                              <Grid item xs={12}>
                                  <Typography variant="body1" gutterBottom>
                                      Partagez sur Linkedin
                                  </Typography> 
                              </Grid>
                              <Grid item xs={12}>
                                  <i className={` fa fa-3x  fa-linkedin-square `} aria-hidden="true"/> 
                              </Grid>
                              <Grid item xs={12}> 
                                <Button variant="text" color="secondary">
                                  <Link to={post.fields.slug}>
                                    Lire l'article >>
                                  </Link>
                                </Button>   
                              </Grid>
                          </Grid>
                      </CardActions>
                  </Card>
                </Grid>
              ))}
          </Container>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
