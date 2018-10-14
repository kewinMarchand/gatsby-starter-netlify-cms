import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {withStyles, Button, Grid, OutlinedInput, InputLabel, NativeSelect, Paper, TextField} from '@material-ui/core';
import Container from './partials/Container';
import SectionHeader from './partials/SectionHeader';

const styles = theme => ({
    formContainer: {
        ...theme.mixins.gutters(),
        background: theme.palette.background.default,
        margin: 'auto',
        marginTop: 32,
        maxWidth: 560,
    },
    form: {
        ...theme.mixins.gutters(),
        marginTop: 16,
    },
    select: {
        marginBottom: 8,
        marginTop: 16,
    },
    cta: {
        marginBottom: 16,
        marginTop: 32,
    }
});

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        job: '',
        phone: '',
        request: '',
        message: '',
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Container id="contact" bgImage="./assets/canstockphoto8777851-valid.jpg" overlay>
                <SectionHeader 
                    title="Contactez-nous" 
                    subtitle="pour connaître nos programmes et tarifs"
                    color="inherit"
                />
                <Grid item className={classes.formContainer}>
                    <Paper elevation={0}>
                        <Grid container component="form"  className={classes.form} noValidate autoComplete="off">
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-name"
                                    label="Votre nom"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoComplete=""
                                    type="text"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-email"
                                    label="Votre email"
                                    className={classes.textField}
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoComplete=""
                                    type="email"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-job"
                                    label="Votre fonction"
                                    className={classes.textField}
                                    value={this.state.job}
                                    onChange={this.handleChange('job')}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoComplete=""
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-phone"
                                    label="Votre téléphone"
                                    className={classes.textField}
                                    value={this.state.phone}
                                    onChange={this.handleChange('phone')}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoComplete=""
                                    type="tel"
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.select}>
                                <InputLabel 
                                    ref={ref => {
                                        this.labelRef = ReactDOM.findDOMNode(ref);
                                    }}
                                    htmlFor="request-helper"
                                >
                                    Votre demande
                                </InputLabel>
                                <NativeSelect
                                    value={this.state.age}
                                    onChange={this.handleChange('request')}
                                    input={
                                        <OutlinedInput 
                                            name="request" 
                                            id="request-helper" 
                                            variant="outlined"
                                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}     
                                            fullWidth
                                        />
                                    }
                                >
                                    <option value={10}>Formation &amp; Conseil</option>
                                    <option value={20}>Formation</option>
                                    <option value={30}>Conseil</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-message"
                                    label="Votre message"
                                    className={classes.textField}
                                    value={this.state.message}
                                    onChange={this.handleChange('message')}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoComplete=""
                                    type="text"
                                    multiline
                                    rows={6}
                                    rowsMax={12}
                                />
                            </Grid>
                            <Grid item xs={12} align="right">
                                <Button 
                                    variant="contained" 
                                    color="primary"  
                                    className={classes.cta} 
                                >
                                    Envoyer
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        );
    }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
