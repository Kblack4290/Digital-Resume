import { makeStyles } from '@material-ui/core/styles'
import Union from './Unioncrop.jpg'

export default makeStyles((theme) => ({
    hero: {
        marginBottom: '20px',
        height: '50vh',
        backgroundImage: `url(${Union})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },

    aboutHeader: {
        color:'#fff'
    },

    [theme.breakpoints.down('sm')]: {
        hero: {
            display:'none'
        }
    }

}))