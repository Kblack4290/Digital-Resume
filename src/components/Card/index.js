import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Holiday from '../../Assets/img/HolidayParty.jpg'
import Logo from '../../Assets/Logo/logo_size_invert.jpg'
import PikesPeak from '../../Assets/img/Pikes-Peak-300x400.jpg'
import { Modal, Backdrop, Fade, Button, Box, Typography, Grid } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { GitHub } from '@material-ui/icons/'



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 10, 3),
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}

                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2" >
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {props.content}
                        <Typography variant="h6" color="textPrimary" component="h6">
                            Technology:
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.tech}
                        </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Button size="small" color="primary" onClick={handleOpen}>
                    Learn More
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <Box  >
                                <Grid xs={12}>
                                    <Grid xs={5} style={{ float: "left" }} >
                                        <Box p={7}>
                                            <Typography
                                                variant="h5" >Repository:</Typography>
                                            <Box
                                                mt={2}
                                                display="flex"
                                                justifyContent="center">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    href={props.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <GitHub />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid xs={7} style={{ float: "right" }}>
                                        <Box p={7}
                                        >
                                            <Typography variant="h5">Deployed Link:</Typography>
                                            <Box
                                                mt={2}
                                                display="flex"
                                                justifyContent="center"
                                            >
                                                <Button variant="contained" color="primary" href={props.projectUrl} target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Link
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </Fade>
                </Modal>

            </CardActions>
        </Card>
    );
}