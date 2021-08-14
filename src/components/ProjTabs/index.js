import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '../../components/Card';
import Projects from '../../Utils/API.json';
import MERN from '../../Assets/img/MERN-HAGGLE.png'
import Nerd from '../../Assets/img/Blog-MVC.png'
import Budget from '../../Assets/img/FULLSTACK-BUDGET.png'
import WorkOut from '../../Assets/img/FULLSTACK-WORKOUT.png'
import HaggleMVC from '../../Assets/img/HAGGLE-MVC.png'
import NoteTaker from '../../Assets/img/Frontend-NoteTaker.png'
import { Grid } from '@material-ui/core';
import GroupedAv from '../GroupedAv'
import JsLogo from '../../Assets/Logo/Js-logo.png'
import CssLogo from '../../Assets/Logo/css-logo.png'
import GithubLogo from '../../Assets/Logo/Github-logo.png'
import Html from '../../Assets/Logo/html-logo.png'
import MongoDb from '../../Assets/Logo/mongodb-logo.png'
import MySql from '../../Assets/Logo/mysql-logo.png'

import BootstrapLogo from '../../Assets/Logo/bootstrap-logo.png'
import ExpressLogo from '../../Assets/Logo/Express-logo.png'
import FoundationLogo from '../../Assets/Logo/Foundation-logo.png'
import GitLogo from '../../Assets/Logo/Git-logo.png'
import GitlabLogo from '../../Assets/Logo/Gitlab-logo.png'
import JQueryLogo from '../../Assets/Logo/Jquery-logo.png'
import MaterialLogo from '../../Assets/Logo/Material-logo.png'
import Node from '../../Assets/Logo/node-logo.png'
import NpmLogo from '../../Assets/Logo/NPM-logo.png'
import ReactLogo from '../../Assets/Logo/React-logo.png'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,

    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const fullstack = [Nerd, Budget, WorkOut, HaggleMVC]


    // ***** Need to set varia'bles for each card that have their specific tools. For fontend and MERN I need sperate arrays that will gointo the AvatarGroup ***********************************

    const nerdOut = [JsLogo, CssLogo, Node, BootstrapLogo, NpmLogo, ExpressLogo, MySql]
    const budgetTacker = [JsLogo, CssLogo, Html, NpmLogo, ExpressLogo, MongoDb]
    const workoutTracker = [JsLogo, CssLogo, Html, NpmLogo, ExpressLogo, MongoDb]
    const haggleMVC = [JsLogo, CssLogo, BootstrapLogo, NpmLogo, ExpressLogo, MongoDb]

    const numbers = ["1", "2", "3"]
    const otherNum = ["4", "5", "6"]

    const fullStackLogos = [
        {
            logos: JsLogo,
        }

    ]



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    console.log(fullStackLogos);
    console.log(Projects);

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="MERN" {...a11yProps(0)} />
                    <Tab label="FULL STACK" {...a11yProps(1)} />
                    <Tab label="FRONTEND" {...a11yProps(2)} />
                </Tabs>
            </AppBar>



            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Card
                        image={MERN}
                        title="Haggle"
                        content="Haggle is an application that allows users to trade goods and services for other goods and services on a cashless/currency-less platform. Within the application, a user can toggle through listings and communicate with other users within the app to haggle for items/services they are interested in."
                        tech="Javascript, CSS, Mongodb, Express, React, Node, Bootstrap, S3, NPM"

                    />

                </TabPanel>


                <TabPanel xs={12} value={value} index={1} dir={theme.direction}>

                    <Grid xs={12}>
                        <Box

                            display="flex"
                            flexWrap="wrap">
                            {Projects.map((Project, index) => {

                                return (
                                    <Grid xs={6} >
                                        <Box

                                            p={1}
                                            m={1}>
                                            <div >

                                                <Card

                                                    image={fullstack[index]}
                                                    title={Project.title}
                                                    content={Project.content}
                                                    tech={Project.tech}
                                                    key={index} />


                                            </div>

                                        </Box>
                                    </Grid>

                                )
                            })}
                        </Box>
                    </Grid>
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Card
                        image={NoteTaker}
                        title="Taker of Notes"
                        content="Taker of Notes is an application that serves as an easy to use note taker. The user is able to create, save, and delete their notes. "
                        tech="Javascript, HTML, CSS, Express, Node, Fs, Path " />
                </TabPanel>


            </SwipeableViews>



        </div >

    );

}


