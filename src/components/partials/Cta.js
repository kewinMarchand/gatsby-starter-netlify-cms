import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {withStyles, Button, Grid} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
    anchor: {
        textDecoration: 'none',
    },
});

class Cta extends React.Component {
    
    render() {
        const { classes, width, color, text, anchor, xs, md, align } = this.props;

        return (
            <Grid item xs={xs} md={md} align={align}>
                <AnchorLink className={classes.anchor}
                    href={'#' + anchor} 
                    offset={isWidthUp('md', width) ? 170 : 100}
                >
                    <Button 
                        className={classes.cta}
                        variant="contained" 
                        color={color}
                        aria-label={text}
                    >
                        {text}
                    </Button>
                </AnchorLink>
            </Grid>
        );
    }
}

Cta.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    anchor: PropTypes.string,
    xs: PropTypes.number.isRequired,
    md: PropTypes.number,
    align: PropTypes.string.isRequired,
};

export default compose(
    withWidth(),
    withStyles(styles)
  )(Cta);
