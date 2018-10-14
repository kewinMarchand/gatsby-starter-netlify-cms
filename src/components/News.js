import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby'
import Container from './partials/Container';
import SectionHeader from './partials/SectionHeader';
import {withStyles, Button, Card, CardContent, CardActions, Grid, Typography} from '@material-ui/core';



class News extends React.Component {
    
    render() {
        const {classes, data} = this.props;
        const { edges: posts } = data.allMarkdownRemark

        return (
            <Container id="news" bgColor="gradient">
                <SectionHeader 
                    title="L’actualité Social RH" 
                    subtitle="Le droit social est une matière vivante, en perpétuelle adaptation aux évolutions sociales et économiques. Etre agile sur la gestion sociale et RH, c’est aussi être en veille permanente sur la législation pour répondre aux besoin des entreprises."
                />
                {posts.map(({ node: post }) => (
                    
                    <Grid item xs={12}>
                        <Card elevation={10} key={post.id}>
                            <CardContent>
                                <Link className="has-text-primary" to={post.fields.slug}>
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
                                        <i className={` ${classes.icon} fa fa-3x  fa-linkedin-square `} aria-hidden="true"/> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Link className="button is-small" to={post.fields.slug}>
                                            <Button variant="text" color="secondary">
                                                Lire l'article >>
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
               
                ))}
                <Grid item xs={12} align="center">
                <Link to="/blog"  style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained" 
                        color="primary"
                        aria-label="Tous les articles"
                    >
                        Tous les articles
                    </Button>
                </Link>
                </Grid>
            </Container>
        );
    }
}

News.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
          edges: PropTypes.array,
        }),
      }),
};

export default News;
