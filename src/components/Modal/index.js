import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button, Box, Typography, Grid } from '@material-ui/core';
import { GitHub } from '@material-ui/icons/'


const useStyles = makeStyles((theme) => ({
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

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
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
                                            <Button variant="contained" color="primary" href={props.githubUrl}>
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
                                            <Button variant="contained" color="primary" href={props.projectUrl}
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
        </div>
    );
}