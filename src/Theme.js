import {createMuiTheme} from '@material-ui/core/styles'

const palette = {
    primary: {
        light: '#CF8D8D',
        main: '#841818',
        dark: '	#A94949',
        contrastText: '#FFFFFF',
    },
    secondary: {
        light: '#B9B6B6',
        main: '#3a3737',
        dark: '#797575',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#FFFFFF',
        primary: '#841818',
        secondary: '#3a3737',
        grey: '#EDEDED',
        darkgrey: '#CDCDCD',
        dark: '#3D3D3D',
        gradient: 'linear-gradient(to bottom, #FFFFFF, #EDEDED)',
        overlay: 'rgba(0, 0, 0, 0.3)',
    },
}

const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    }
}

const spacing = {
    unit: 8
}

const shadows = [
    'none',
    '0px 1px 2px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 3px 6px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 4px 8px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 3px 6px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 4px 8px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 6px 12px 0px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 3px 6px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 4px 8px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 9px 18px 0px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 3px 6px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 4px 8px -1px   rgba(0,0,0,0.18)',
    '0px 2px 4px 0px    rgba(0,0,0,0.18)',
    '0px 12px 24px 0px  rgba(0,0,0,0.18)',
]

export {palette}

export default createMuiTheme({
    shadows: shadows,
    palette: palette,
    breakpoints: breakpoints,
    spacing: spacing,
    status: {
        danger: 'orange',
    },
    typography: {
        useNextVariants: true,
        fontFamily: '"Roboto", sans-serif',
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '1.6rem',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Roboto", "Arial", serif',
        }
      },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'transparent',
                transition: 'all .5s',
            },
            colorDefault: {
                transition: 'all .5s',
            },
        },
        MuiButton: {
            root: {
                fontSize: '1.2rem',
                whiteSpace: 'nowrap',
            },
            text: {
                padding: 0,
                textTransform: 'none',
            }
        },
        MuiDivider: {
            light: {
                backgroundColor: palette.secondary.contrastText,
                marginBottom: spacing.unit,
                marginTop: spacing.unit,
            }
        },
        MuiPaper: {
            root: {
                transition: 'all .5s',
            },
        },
        MuiToolbar: {
            root: {
                marginBottom: spacing.unit,
                marginTop: spacing.unit,
            },
            regular: {
                transition: 'all .8s',
            }
        },
        MuiTooltip: {
            popper: {
                left: 100
            }
        },
    },

})
