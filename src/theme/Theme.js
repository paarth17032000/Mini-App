import { createMuiTheme } from "@material-ui/core"

export const newTheme = createMuiTheme({
    palette: {
        primary: {
            // main: '#2A78FF'
            main: '#6D214F'
        },
        secondary: {
            // main: '#2E3647'
            main: '#2C3A47'
        },
        warning: {
            main: '#F8FAFB'
        }
    },
    typography: {
        fontFamily: 'Avenir Regular',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700
    }
})