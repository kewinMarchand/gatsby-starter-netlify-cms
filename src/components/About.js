import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography  } from '@material-ui/core';
import Container from './partials/Container';
import SectionHeader from './partials/SectionHeader';
import Cta from './partials/Cta';

const styles = theme => ({
    card: {
        margin: '50px auto',
        maxWidth: 480,
    },
    media: {
        borderRadius: '50%',
        margin: 'auto',
        height: 176,
        width: 176,
    },
    icon: {
        color: theme.palette.secondary.light,
    },
    actions: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    ctaContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0', 
    }
});

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container id="about" bgColor="gradient">
            <SectionHeader 
                title="L’expertise Social RH Compétences" 
            />
            <Grid item xs={12} md={6}>
                <Typography variant="body1" align="center">
                    Social RH Compétences est née du souhait de Delphine WITKOWSKI de proposer aux entreprises une expertise en droit social associée à une expérience de 15 ans dans la gestion des ressources humaines, afin de résoudre leurs problématiques concrètes. L’objectif est de proposer par le conseil et la formation, des solutions agiles et adaptées.
                    Parce que le droit du travail est un formidable outil d’adaptation de l’entreprise à ses besoins de développement ainsi qu’une matière exigeante et en constante évolution, Social RH Compétences se veut être pour ses clients tout à la fois force de proposition et accompagnatrice de changement.
                    Les prestations de conseil et de formation de Social RH Compétences s’adressent à toutes les tailles d’entreprise et de tous secteurs d’activité. Leur point commun : le besoin d’adopter une organisation des ressources humaines agile pour développer l’activité de l’entreprise.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card} elevation={10}>
                    <CardContent>
                        <Typography variant="h6" component="p" align="center" color="inherit">
                            Delphine Witkowski
                        </Typography>
                        <CardMedia 
                        className={classes.media}
                            image="./assets/delphinewitkowski.jpg"
                            title="Delphine Witkowski - SRH Compétences"
                        />
                    </CardContent>

                    <CardActions className={classes.actions} disableActionSpacing>
                        <a href="https://www.linkedin.com/in/delphine-witkowski-57bb8988">
                            <IconButton aria-label="linkedin">
                                <i className={` ${classes.icon} fa fa-linkedin-square `} aria-hidden="true"/>
                            </IconButton>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
            <Cta color="primary" text="Découvrez nos formations" anchor={this.props.anchor} xs={12} align="center"/>
        </Container>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  anchor: PropTypes.string,
};

export default withStyles(styles)(About);
