import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

    drawer: {
        width: '200px',

    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginTop: '20px',
        alignSelf: 'center',
    },

    navIcons: {
        color: "#ffff",
        marginRight: "20px",
        "&:hover": {
            fontSize: "2.5rem",

        }
    },
    bar: {
        backgroundColor: 'rgb(44, 44, 53) !important',
    },

    email: {
        color: 'inherit',
        padding: '20px',
        alignSelf: 'center'
    },
    '&:hover': {
        color: ' #0000ee'
    }

}));
