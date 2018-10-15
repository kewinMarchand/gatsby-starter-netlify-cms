import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {withStyles, Grid} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {palette} from '../../Theme';

const styles = theme => ({
    container: {
        width: '100%',
    },
    wrapper: {
        ...theme.mixins.gutters(),
        color: theme.palette.primary.contrastText,
        margin: 'auto',
        padding: '40px 0',
        maxWidth: 1450,
    },
});

class Container extends React.Component {

  render() {
    const {classes, id, children, bgImage, bgColor, overlay, stickyNav, alignItems} = this.props;

    return (
        <Grid id={id} container 
            className={classes.container} 
            style={{
                background:  bgImage ? 'url(' + bgImage + ') 50% 50% / cover ' : null,
                backgroundColor: bgColor ? palette.background[bgColor] : palette.background.default,
                marginTop: stickyNav ? (isWidthUp('md') ? 170 : 115) : 0,
            }}
         >
            <Grid container 
                className={classes.overlay} 
                style={{
                    background: overlay ? palette.background.overlay : null,
                }}
            >
                <Grid container 
                    className={classes.wrapper} 
                    spacing={24} 
                    alignItems={alignItems ? alignItems : "flex-start"}
                >
                    {children}
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    bgImage: PropTypes.string,
    bgColor: PropTypes.string,
    overlay: PropTypes.bool,
    id: PropTypes.string,
    stickyNav: PropTypes.bool,
    alignItems: PropTypes.string,
};

export default compose(
    withWidth(),
    withStyles(styles)
  )(Container);
