import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 10, 3),
    },
    repoLink: {
        float: 'left'
    },
    deployedLink: {
        float: 'right'
    },
    [theme.breakpoints.down('550px')]: {
        repoLink: {
            float: 'none',
            alignItems: 'center'
            
        },
        deployedLink: {
            float: 'none',
            alignItems: 'center'
        }
    }
}));