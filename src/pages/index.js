import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionHeader from '../components/partials/SectionHeader';
import Container from '../components/partials/Container';
import {Button, Card, CardMedia, CardContent, CardActions, Grid, Typography} from '@material-ui/core';
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Banner from '../components/Banner'
import Benefit from '../components/Benefit'
import Training from '../components/Training'
import Contact from '../components/Contact'
import logotype from '../img/logotype_524x200-1.png'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Jumbotron />
        <About />
        <Banner />
        <Benefit />
        <Banner />
        <Training />
        <Banner />
        <Container container stickyNav>
            <SectionHeader 
              title="L’actualité Social RH" 
              subtitle="Le droit social est une matière vivante, en perpétuelle adaptation aux évolutions sociales et économiques. Etre agile sur la gestion sociale et RH, c’est aussi être en veille permanente sur la législation pour répondre aux besoin des entreprises."
            />
            <Grid container spacing={24} alignItems="flex-start">
              {posts
                .map(({ node: post }) => (
                  <Grid item md={12} lg={6} key={post.id}>
                    <Card elevation={10} style={{margin: '20px 0'}}>
                        <Link to={post.fields.slug}>
                            <CardMedia style={{backgroundSize: post.frontmatter.image ? 'cover' : 'contain', height: 480}}
                              image={null !== post.frontmatter.image ? post.frontmatter.image : logotype} 
                              alt={post.frontmatter.title}
                              title={post.frontmatter.title}
                            />
                        </Link>
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
                            <CardActions disableActionSpacing style={{padding: '10px 0'}}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="body1" gutterBottom>
                                            Partagez sur Linkedin
                                        </Typography> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        <i className={` fa fa-3x fa-linkedin-square `} aria-hidden="true"/> 
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
                        </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
          </Container>
          <Banner />
          <Contact />
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
            image  
          
          }
        }
      }
    }
  }
`
