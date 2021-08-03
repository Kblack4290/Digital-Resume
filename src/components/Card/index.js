import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Holiday from '../../Assets/img/HolidayParty.jpg'
import Logo from '../../Assets/Logo/logo_size_invert.jpg'
import PikesPeak from '../../Assets/img/Pikes-Peak-300x400.jpg'
import Modal from '../Modal';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" >
                    {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>

                <Modal />

            </CardActions>
        </Card>
    );
}