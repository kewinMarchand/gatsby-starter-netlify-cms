import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography  } from '@material-ui/core';
import Container from './partials/Container';
import Cta from './partials/Cta';

class Banner extends React.Component {

  render() {

    return (
        <Container bgColor="primary">
            <Grid item xs={8}>
                <Typography variant="h5" align="left" color="inherit">
                    Nous contacter pour connaître nos programmes et tarifs
                </Typography>
            </Grid>
            <Cta color="secondary" text="Contactez-nous" anchor={this.props.anchor} xs={4} align="right"/>
        </Container>
    );
  }
}

Banner.propTypes = {
    anchor: PropTypes.string,
};

export default Banner;
