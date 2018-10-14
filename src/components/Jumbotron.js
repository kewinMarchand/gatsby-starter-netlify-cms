import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {withStyles, Card, CardActions, CardContent, Grid, Typography  } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Container from './partials/Container';
import Cta from './partials/Cta';
import headerImage from '../img/header-image.jpg'

const styles = theme => ({
    card: {
        alignItems: 'center',
        background: 'transparent',
        color: theme.palette.primary.contrastText,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '4rem',
        }
    }
});

class Jumbotron extends React.Component {

  render() {
    const { classes, width } = this.props;

    return (
        <Container bgImage={headerImage} overlay>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h2" component="p" align="center" color="inherit" gutterBottom className={classes.title}>
                            Social RH Compétences
                        </Typography>
                        <Typography variant="subtitle1" component="p" align="center" color="inherit">
                            Conseil et formation pour l'agilité en droit social et en gestion RH
                        </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                        <Grid container spacing={24}>
                            <Cta color="primary" text="Qui sommes-nous ?" 
                                anchor="about" 
                                xs={12} md={6} 
                                align={isWidthUp('md', width) ? "right" : "center"}
                            />
                            <Cta color="secondary" text="Contactez-nous" 
                                anchor="contact" 
                                xs={12} md={6} 
                                align={isWidthUp('md', width) ? "left" : "center"}
                            />
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
    withWidth(),
    withStyles(styles)
  )(Jumbotron);