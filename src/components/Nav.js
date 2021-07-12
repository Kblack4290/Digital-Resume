import React, { useState, setState } from 'react'
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Divider, IconButton, AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles'
import { GetAppRounded, InfoRounded, AccountTreeRounded, EmailRounded } from '@material-ui/icons/';
import { withRouter } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles((theme)=>({
    drawer: {
        width: '200px'
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
}));


const Nav = (props) => {

    const [open, setOpen] = useState(false);



    const { history } = props;
    const classes = useStyles();
    const itemList = [
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
            <AppBar position="static">
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
                <h1>Photo and Email goes here</h1>
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