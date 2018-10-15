import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Button, Card, CardContent, CardActions, Grid, Typography} from '@material-ui/core';
import LinkedinLink from './utils/LinkedinLink'

const styles = theme => ({
    media: {
        height: 480,
    },
    icon: {
        color: 'rgb(0, 123, 181)',
    }
});

class NewsCard extends React.Component {
    
    render() {
        const {classes, data} = this.props;
        const { edges: posts } = data.allMarkdownRemark

        return (

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
                                <LinkedinLink />
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


        );
    }
}

NewsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
