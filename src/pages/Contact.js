import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Paper, Typography, TextField, Divider, Button } from "@material-ui/core"
import emailjs from 'emailjs-com';
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
        width: '100%',
    },
}));

const Contact = () => {
    const classes = useStyles();
    const form = document.forms['myForm'];
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ecdl81r', 'template_nwu6j7r', e.target, 'user_jVGBrT34O3VrSEmUMmNmB')
            .then((result) => {
                document.forms['myForm'].reset();
                alert('Thank you for your message!');

                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <  Grid
            container
            item
            xs={12}
            id="contact-container"
            className={classes.root}
            style={styles.bgImg}  >
            <Grid
                item
                xs={12}
                lg={6} >
                <Box
                    p={10}
                    id="form-box" >
                    <Paper
                        style={{ padding: "20px" }} >
                        <Typography
                            variant="h2"
                            component="h4" >
                            Contact
                        </Typography>
                        <Divider
                            style={{ marginBottom: "5px" }} />
                        <form
                            noValidate
                            autoComplete="off"
                            onSubmit={sendEmail}
                            id="myForm" >
                            <TextField
                                id="outlined-basic"
                                label="First Name"
                                name="first_name"
                                variant="outlined"
                                style={{ margin: "5px" }} />
                            <TextField
                                id="outlined-basic"
                                label="Last Name"
                                name="last_name"
                                variant="outlined"
                                style={{ margin: "5px" }} />
                            <Grid xs={12}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    style={{ margin: "5px" }} />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Lets Connect!"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                    style={{ margin: "5px" }}
                                    name="message"
                                />
                            </Grid>
                            <Button
                                type="submit"
                                value="Submit"
                                variant="contained"
                                color="primary"
                                style={{ margin: "5px" }}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Contact
