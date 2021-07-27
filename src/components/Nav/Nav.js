import React, { useState, setState } from 'react'
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    List, Divider,
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles'
import {
    GetAppRounded,
    InfoRounded,
    AccountTreeRounded,
    EmailRounded,
    HomeRounded
} from '@material-ui/icons/';
import { withRouter } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import PikesPeak from "../../Assets/img/Pikes-Peak-300x400.jpg"
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

}));


const Nav = (props) => {

    const [open, setOpen] = useState(false);



    const { history } = props;
    const classes = useStyles();
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
        {
            text: 'Resume',
            icon: <GetAppRounded />
        }
    ]

    return (
        <div className={classes.root}>
            <AppBar id="bar" position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton} color="inherit"
                        aria-label="menu"
                        onClick={() => { setOpen(true) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { }}
                className={classes.drawer}>
                <Avatar
                    alt="Image of Pikes Peak CO"
                    src={PikesPeak}
                    className={classes.large}
                    id="avatar"/>
                    

                {/* #################### NEED PADDING ################ */}
                <List  > <a
                    href="mailto:keithblack4290@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="email"
                    
                >Keithblack4290@gmail.com </a></List>

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
                </List>
            </Drawer>
        </div>
    )
}

export default withRouter(Nav);