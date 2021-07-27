import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Paper, Typography, Avatar } from "@material-ui/core"
import Holiday from '../Assets/img/HolidayParty.jpg'
import AboutCard from '../components/AboutCard'
import Hero from '../components/Hero'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {

        width: theme.spacing(28),
        height: theme.spacing(28),
    },
    content: {

    }
}));

const About = () => {

    const classes = useStyles();

    return (

        <div>

            <Container component="div" className={classes.root} style={{ background: "#eee" }}>

                <Hero />
                <Grid xs={12}>
                    <Grid xs={6} style={{float:"left"}}>
                        <Paper style={{ background: "white" }}>



                            <Grid item >
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    pt={5}
                                >
                                    <Avatar

                                        alt="Holiday Party"
                                        src={Holiday}
                                        className={classes.large} >

                                    </Avatar>
                                </Box>
                            </Grid>

                            <Grid  >
                                <Typography component="div">
                                    <Box
                                        fontSize="fontSize"
                                        textAlign="center"
                                        px={1}
                                        mx={10}
                                        my={1}>

                                        <p>Hello, I am Keith, I am a Software Developer with a background in management and business development.
                                            The quality of skills that I have learned in my past professions are proving to be a great benefit to my growth as a Developer.
                                            I am always searching for new ways to improve my programming skills by keeping up to date with new tools and continuing to practice my craft. </p>



                                        <p>I find knowledge to be exciting which is my favorite aspect of programming.
                                            I always look forward to learning new techniques,  languages, tools, or technologies that I can use for a project.
                                            The challenges that come with continuous learning can be frustrating at first but I get a huge sense of fulfillment once I finally find a solution.
                                            Another aspect of programming that I really enjoy that stands out from other professions is the community. There is always someone who is willing to help and grow with you whether that is at a place of business or on a community forum like StackOverflow or Reddit.
                                        </p>



                                        <p>Outside of programming, I like to explore the City of Denver’s restaurants, go to sporting events, and play video games with friends.
                                            I also have a fond love for Comedy, especially stand-up comedy.
                                            I really enjoy catching some of my favorite acts who come through Denver and look forward to new specials.
                                            Feel free to reach out and learn more about me!</p>
                                    </Box>

                                </Typography>


                            </Grid>



                        </Paper>
                    </Grid>

                    <Grid xs={6} style={{float:"right"}}>
                        <Paper>
                            <Box>
                                <Typography
                                    variant="h2">
                                    Skills
                                </Typography>
                                <Typography >
                                    <Box>
                                        <ul>
                                            <li>Javascripts</li>
                                            <li>CSS3</li>
                                            <li>HTML5</li>
                                            <li>MySql</li>
                                            <li>MongoDB</li>
                                            <li>GitHub</li>
                                            <li>GitLab</li>
                                            <li>Git</li>
                                            <li>Bootstrap</li>
                                            <li>Material UI</li>
                                            <li>Foundation</li>
                                            <li>React</li>
                                            <li>NPM</li>
                                            <li>JQuery</li>
                                            <li>Node</li>
                                            <li>Express</li>
                                            <li>MERN</li>
                                        </ul>
                                    </Box>

                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>


                </Grid>







            </Container>
        </div >
    )
}

export default About
