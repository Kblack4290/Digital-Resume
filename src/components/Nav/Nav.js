import React, { useState } from 'react'
import {
    SwipeableDrawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    List, Divider,
    IconButton,
    AppBar,
    Toolbar,
    Avatar,
    Box
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles'
import {
    GetAppRounded,
    InfoRounded,
    AccountTreeRounded,
    EmailRounded,
    HomeRounded,
    GitHub,
    LinkedIn,
    Phone
} from '@material-ui/icons/';
import { withRouter} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import InvertLogo from "../../Assets/Logo/logo_size.jpg"
import PikesPeak from "../../Assets/img/Pikes-Peak-300x400.jpg"
import Resume from "../../Assets/img/KBlack_DEV_Resume.pdf"
import "./style.css"


const useStyles = makeStyles((theme) => ({
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
    },

    navIcons: {
        color: "#ffff",
        marginRight: "20px",
        "&:hover": {
            fontSize: "2.5rem",

        }
    }

}));


const Nav = (props) => {

    const [open, setOpen] = useState(false);



    const { history } = props;
    const classes = useStyles();

    const contactList = [

        {
            text: 'Keithblack4290@gmail.com',
            icon: <EmailRounded />,
            link: "mailto:keithblack4290@gmail.com",


        },

        {
            text: 'GitHub',
            icon: <GitHub />,
            link: "https://github.com/Kblack4290",
        },

        {
            text: 'LinkedIn',
            icon: <LinkedIn />,
            link: "https://www.linkedin.com/in/kblack4290/",
        },

    ]
    const itemList = [
        {
            text: 'Home',
            icon: <HomeRounded />,
            onClick: () => history.push('/')
        },
        {
            text: 'About',
            icon: <InfoRounded />,
            onClick: () => history.push('/About')
        },
        {
            text: 'Projects',
            icon: <AccountTreeRounded />,
            onClick: () => history.push('/Projects')
        },
        {
            text: 'Contact',
            icon: <EmailRounded />,
            onClick: () => history.push('/Contact')
        },
    ]

    return (
        <div className={classes.root}>
            <AppBar 
            id="bar" 
            position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton} color="inherit"
                        aria-label="menu"
                        onClick={() => { setOpen(true) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box className={classes.title} >
                        <Avatar src={InvertLogo} />
                    </Box>

                    {contactList.map((item,) => {
                        const { icon, onClick, link } = item;
                        return (
                            <a className="navIcon"
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClick}  >
                                <Box className={classes.navIcons}>
                                    {icon}
                                </Box>
                            </a>

                        )
                    })}

                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { }}
                className={classes.drawer}>
                <Avatar
                    alt="Image of Pikes Peak CO"
                    src={PikesPeak}
                    className={classes.large}
                    id="avatar" />



                <List>
                    {contactList.map((item, index) => {
                        const { text, icon, onClick, link } = item;
                        return (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                primary={text}
                                style={{ color: "#000000DE", textDecoration: "none" }} >
                                <ListItem button key={text} onClick={onClick}>

                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                    <ListItemText primary={text} />

                                </ListItem>
                            </a>

                        )
                    })}
                    <ListItem>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                        <ListItemText primary="(845)625-9783" />
                    </ListItem>
                </List>


                <Divider />

                <List>
                    {itemList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                    <a
                        href={Resume}
                        rel="noreferrer"
                        style={{ color: "#000000DE", textDecoration: "none" }} >
                        <ListItem>
                            <ListItemIcon>
                                <GetAppRounded />
                            </ListItemIcon>
                            <ListItemText primary="Resume" />
                        </ListItem>
                    </a>
                </List>
            </SwipeableDrawer >
        </div >
    )
}

export default withRouter(Nav);