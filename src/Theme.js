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
        gradient: 'linear-gradient(to bottom, #EDEDED, #CDCDCD)',
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
    '0px 1px 2px -1px   rgba(0,84,164,0.10)',
    '0px 1px 2px 0px    rgba(0,84,164,0.10)',
    '0px 2px 4px -1px   rgba(0,84,164,0.12)',
    '0px 2px 4px 0px    rgba(0,84,164,0.12)',
    '0px 3px 6px -1px   rgba(0,84,164,0.14)',
    '0px 3px 6px 0px    rgba(0,84,164,0.14)',
    '0px 4px 8px -1px   rgba(0,84,164,0.16)',
    '0px 4px 8px 0px    rgba(0,84,164,0.16)',
    '0px 5px 10px -1px  rgba(0,84,164,0.18)',
    '0px 5px 10px 0px   rgba(0,0,0,0.18)',
    '0px 6px 12px -1px  rgba(0,84,164,0.20)',
    '0px 6px 12px 0px   rgba(0,84,164,0.20)',
    '0px 7px 14px -1px  rgba(0,84,164,0.22)',
    '0px 7px 14px 0px   rgba(0,84,164,0.22)',
    '0px 8px 16px -1px  rgba(0,84,164,0.24)',
    '0px 8px 16px 0px   rgba(0,84,164,0.24)',
    '0px 9px 18px -1px  rgba(0,84,164,0.26)',
    '0px 9px 18px 0px   rgba(0,84,164,0.26)',
    '0px 10px 20px -1px rgba(0,84,164,0.28)',
    '0px 10px 20px 0px  rgba(0,84,164,0.28)',
    '0px 11px 22px -1px rgba(0,84,164,0.30)',
    '0px 11px 22px 0px  rgba(0,84,164,0.30)',
    '0px 12px 24px -1px rgba(0,84,164,0.32)',
    '0px 12px 24px 0px  rgba(0,84,164,0.32)',
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
        htmlFontSize: 10,
        useNextVariants: true,
        body1: {
            fontSize: '1.4rem',
        },
        body2: {
            fontSize: '1.6rem',
            fontWeight: 700,
        },
      },
    overrides: {
        MuiAppBar: {
            colorPrimary: {

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
        MuiToolbar: {
            root: {
                marginBottom: spacing.unit,
                marginTop: spacing.unit,
            }
        },
        MuiTooltip: {
            popper: {
                left: 100
            }
        },
    },

})
