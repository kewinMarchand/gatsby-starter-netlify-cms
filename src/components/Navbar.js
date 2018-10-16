import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
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
  state = {
    scrolled: false,
  }

  updateScroll() {
      let windowHeight = window.innerHeight

      if (windowHeight < window.scrollY) {
        this.setState({
          scrolled: true,
        })
      } else {
        this.setState({
          scrolled: false,
        })
      }  
  }

  componentDidMount() {
    this.updateScroll()
    window.addEventListener('scroll', this.updateScroll.bind(this))
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScroll.bind(this))
  }

  render() {
    const { classes } = this.props;
    const { scrolled } = this.state;

    return (
        <React.Fragment >
            <AppBar component="nav" elevation={10} color={scrolled ? "default" : "primary"} >
              {
                !scrolled &&
                <Hidden smDown >
                  <TopBar />
                </Hidden>
              }
                <Toolbar>
                  <Grid item >
                    <Link to="/" >
                      <img src={logo} alt="logo srh compétences" style={{height: scrolled ? 56 : 96, transition: 'all .8s'}} />  
                    </Link>
                  </Grid>
                  <Typography 
                      className={classes.title} 
                      variant="h6" 
                      color="inherit" 
                  >
                      SRH Compétences
                  </Typography>
                  <Grid item className={classes.grow}>
  
                  </Grid>
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
