import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {withStyles, Button, Card, CardActions, CardContent, Collapse, Grid, Paper, Typography} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
    card: {
        margin: '32px 0',
    },
    paper: {
        alignItems: 'center',
        border: '2px solid ' + theme.palette.background.primary,
        borderRadius: '50%',
        display: 'flex',
        height: 96,
        justifyContent: 'center',
        width: 96,
    },
    icon: {
        color: theme.palette.primary.main,
    },
    actionContainer: {
        ...theme.mixins.gutters(),
    },
    cta: {
        marginBottom: theme.spacing.unit,
    }
});

class CollapseCard extends React.Component {
    state = {
        checked: false,
      };
    
      handleChange = () => {
        this.setState(state => ({ checked: !state.checked }));
      };
    
    render() {
        const {classes, width, icon, title, excerpt, content} = this.props;
        const {checked } = this.state;

        return (
            <Card elevation={10} className={classes.card}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={2} align="center">
                            <Paper className={classes.paper}>
                                <i className={` ${classes.icon} fa fa-4x fa-${icon} `} aria-hidden="true"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Typography variant="body2" align="left" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="body1" align="left" gutterBottom>
                                {excerpt}
                            </Typography>
                            <Collapse in={checked}>
                                <Typography variant="body1" align="left">
                                    {content}
                                </Typography>
                            </Collapse>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.actionContainer}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={2}/>
                        <Grid item xs={12} md={10} align={isWidthUp('md', width) ? "left" : "center"}>
                            <Button variant="contained" color="primary" 
                                className={classes.cta} 
                                aria-label={!checked ? 'En savoir plus' : 'Réduire' } 
                                onClick={this.handleChange}
                            >
                                {!checked ? 'En savoir plus' : 'Réduire' }
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

CollapseCard.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default compose(
    withWidth(),
    withStyles(styles)
  )(CollapseCard);
