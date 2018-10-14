import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Grid, Typography} from '@material-ui/core';

const styles = theme => ({
    titleContainer: {
        marginBottom: 50,
    },
});

class SectionHeader extends React.Component {
    
    render() {
        const {classes, title, subtitle, color} = this.props;

        return (
            <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="h4" align="center" color={color} gutterBottom>
                    {title}
                </Typography>
                {
                    subtitle &&
                    <Typography variant="body1" align="center" color={color}>
                        {subtitle}
                    </Typography>
                }
            </Grid>           
        );
    }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

export default withStyles(styles)(SectionHeader);
