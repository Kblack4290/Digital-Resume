import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
particleJs: {
    backgroundColor: 'rgb(58, 59, 62)',
},

    [theme.breakpoints.down('xs')]: {
        particleJs: {
            display:'none',
            height: '100vh'
        }
    }

}))