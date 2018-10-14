import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Container from './partials/Container';

class Footer extends React.Component {

  render() {

    return (
        <Container bgColor="gradient">
            <Grid item xs={12}>
                <Typography variant="body1" align="center" color="secondary">
                    ©  2018 SOCIAL RH COMPETENCES. Mentions légales
                </Typography>
            </Grid>
        </Container>
    );
  }
}


export default Footer;
