import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {
  withStyles,
  AppBar, 
  Grid, 
  Hidden,
  Toolbar, 
  Typography
} from '@material-ui/core';
import TopBar from './TopBar';
import logo from '../img/logo_srh_512x512.png'
const styles = theme => ({
  nav: {
    width: '100%',
  },
  title: {
    marginLeft: theme.spacing.unit * 2,
  },
});

class NavBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <React.Fragment >
            <AppBar component="nav" elevation={10} color="default">
              <Hidden smDown >
                  <TopBar />
              </Hidden>
                <Toolbar>
                  <Grid item >
                    <Link to="/" >
                      <img src={logo} alt="logo srh compétences" style={{maxHeight: 96}} />  
                    </Link>
                  </Grid>
                  <Typography 
                      className={classes.title} 
                      variant="h6" 
                      color="inherit" 
                  >
                      SRH Compétences
                  </Typography>
                  <Grid item className={classes.grow}></Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

