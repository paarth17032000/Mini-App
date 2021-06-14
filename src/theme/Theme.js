import { createMuiTheme } from "@material-ui/core"

export const newTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2A78FF'
        },
        secondary: {
            main: '#2E3647'
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