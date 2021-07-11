import React from 'react'
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Icons } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles'
import { GetAppRounded, InfoRounded, AccountTreeRounded, EmailRounded } from '@material-ui/icons/';
import { withRouter } from "react-router-dom"

const useStyles = makeStyles({
    drawer: {
        width: '200px'
    }
})

const Nav = (props) => {
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
        <div>
            <Drawer variant="permanent" anchor="left" className={classes.drawer}>

                <List>
                    {itemList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick= {onClick}>
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

export default withRouter (Nav);