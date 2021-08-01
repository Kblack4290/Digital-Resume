import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Paper, Typography, Avatar } from "@material-ui/core"
import Holiday from '../Assets/img/HolidayParty.jpg'
import Hero from '../components/Hero'
import LogoBl from '../Assets/Logo/logo_size_invert.jpg'
import JsLogo from '../Assets/Logo/Js-logo.png'
import CssLogo from '../Assets/Logo/css-logo.png'
import GithubLogo from '../Assets/Logo/Github-logo.png'
import Html from '../Assets/Logo/html-logo.png'
import MongoDb from '../Assets/Logo/mongodb-logo.png'
import MySql from '../Assets/Logo/mysql-logo.png'

import BootstrapLogo from '../Assets/Logo/bootstrap-logo.png'
import ExpressLogo from '../Assets/Logo/Express-logo.png'
import FoundationLogo from '../Assets/Logo/Foundation-logo.png'
import GitLogo from '../Assets/Logo/Git-logo.png'
import GitlabLogo from '../Assets/Logo/Gitlab-logo.png'
import JQueryLogo from '../Assets/Logo/Jquery-logo.png'
import MaterialLogo from '../Assets/Logo/Material-logo.png'
import Node from '../Assets/Logo/node-logo.png'
import NpmLogo from '../Assets/Logo/NPM-logo.png'
import ReactLogo from '../Assets/Logo/React-logo.png'


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
    medium: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        "&:hover" : {
            width: theme.spacing(12),
        height: theme.spacing(12),
        }
    }
}));

const About = () => {

    const classes = useStyles();
    const logos = [JsLogo, Html, CssLogo, MongoDb, ExpressLogo, ReactLogo, Node, JQueryLogo, NpmLogo, MySql, GithubLogo, GitlabLogo, GitLogo, BootstrapLogo, MaterialLogo, FoundationLogo]

    return (

        <div>

            <Container component="div" className={classes.root} style={{ background: "#eee" }}>

                <Hero />
                <Grid xs={12}>

                    <Grid xs={6} style={{ float: "left" }}>
                        <Box display="flex"
                            p={1}
                            mr={1}>
                            <Paper
                                elevation={3}
                                style={{ background: "white" }}>



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
                        </Box>
                    </Grid>


                    <Grid xs={6} style={{ float: "right" }}>

                        <Box
                            p={1}
                            ml={1}>
                            <Paper
                                elevation={3}>

                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    pt={5}
                                >
                                    <Avatar

                                        alt="Holiday Party"
                                        src={LogoBl}
                                        className={classes.large} >

                                    </Avatar>
                                </Box>
                                <Box
                                    fontSize="fontSize"
                                    textAlign="center"
                                    px={1}
                                    mx={10}
                                    my={1}>
                                    <Typography >


                                        <p> Javascripts,  CSS3, HTML5, MySql, MongoDB, GitHub, GitLab, Git, Bootstrap, Material UI, Foundation, React, NPM, JQuery,Node, Express, MERN </p>

                                    </Typography>
                                    <Grid xs={12}>
                                        <Box
                                            display="flex"
                                            flexWrap="wrap">
                                            {logos.map((Logo, index) => {
                                                return (

                                                    <Grid xs={3}>
                                                        <Box 
                                                        p={1}
                                                        m={1}>
                                                            <Avatar
                                                                variant="rounded"
                                                                src={logos[index]}
                                                                className={classes.medium} />
                                                        </Box>
                                                    </Grid>
                                                )
                                            })}
                                        </Box>
                                    </Grid>
                                </Box>

                            </Paper>
                        </Box>
                    </Grid>


                </Grid>







            </Container>
        </div >
    )
}

export default About
