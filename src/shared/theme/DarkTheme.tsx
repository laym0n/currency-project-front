import {createTheme} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import {alpha} from "@mui/system";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            contrastText: '#000',
        },
        secondary: grey,
        background: {
            default: "#1e1e1e",
            paper: "#151515"
        },
        divider: "#6F7F95",
        text: {
            primary: "#a2a2a2",
            secondary: "#a2a2a2",
        },
        action: {
            disabled: grey[500],
            disabledBackground: alpha("#fff", 0.1)
        }
    }
})
