import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Paper, Typography, TextField, Divider, Button } from "@material-ui/core"
import Hello from "../Assets/img/Hello.jpg"

const styles = {
    bgImg: {
        backgroundImage: `url(${Hello})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "25% 75%",
    },

};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const Contact = () => {

    const classes = useStyles();

    return (
        <div style={{ marginTop: "50px" }}>
            <Container style={styles.bgImg} className={classes.root} >

                <Box p={5}  >




                    <Grid xs={12} >
                        <Box p={10} >
                            <Paper style={{ width: "100%", padding: "20px" }} >
                                <Typography variant="h2" component="h4" >Contact</Typography>
                                <Divider style={{ marginBottom: "5px" }} />
                                <form noValidate autoComplete="off" >
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" style={{ margin: "5px" }} />
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ margin: "5px" }} />
                                    <Grid xs={12}>
                                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" style={{ margin: "5px" }} />
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Lets Connect!"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            fullWidth
                                            style={{ margin: "5px" }}
                                        />
                                    </Grid>
                                    <Button variant="contained" color="primary" style={{ margin: "5px" }}>
                                        Submit
                                    </Button>
                                </form>
                            </Paper>
                        </Box>
                    </Grid>


                </Box>
            </Container>
        </div>
    )
}

export default Contact
