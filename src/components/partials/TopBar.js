import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Grid, 
    IconButton, 
    Typography
} from '@material-ui/core';

const styles = theme => ({
    topbar: {
        ...theme.mixins.gutters(),
        background: theme.palette.background.dark,
        color: theme.palette.primary.contrastText,
    },
    iconTopbar: {
        marginRight: theme.spacing.unit,
    },
    iconLinks: {
        color: theme.palette.primary.contrastText,
    },
    grow: {
        flexGrow: 1,
    },
});

class TopBar extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.topbar} >
                <Grid container spacing={24} alignItems="center" >
                    <Grid item >
                        <Typography variant="caption" color="inherit">
                            <i className={` ${classes.iconTopbar} fa fa-map-marker `} aria-hidden="true"/>
                            13650 Meyrargues, PACA, France
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="caption" color="inherit">
                            <i className={` ${classes.iconTopbar} fa fa-phone `} aria-hidden="true"/>
                            +33 673502087
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="caption" color="inherit">
                            <i className={` ${classes.iconTopbar} fa fa-envelope `} aria-hidden="true"/>
                            contact@srhcompetences.com
                        </Typography>
                    </Grid>
                    <Grid item align="right" className={classes.grow}>
                        <a href="https://www.linkedin.com/in/delphine-witkowski-57bb8988">
                            <IconButton aria-label="datadock">
                                <i className={` ${classes.iconLinks} fa fa-linkedin-square `} aria-hidden="true"/>
                            </IconButton>   
                        </a>
                        <IconButton aria-label="linkedin">
                            <img src="./assets/icone_datadocke_NB.jpg" height="30" alt="icon-datadock" aria-hidden="true"/>
                        </IconButton>    
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
