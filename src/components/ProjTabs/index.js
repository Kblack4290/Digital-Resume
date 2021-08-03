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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

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
                        content="HAGGLE HAGGLE HAGGLE" />
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
                                                    content={Project.content} />

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
                        content="Taking Mad Notes for REalzzz" />
                </TabPanel>


            </SwipeableViews>



        </div >
    );
}


