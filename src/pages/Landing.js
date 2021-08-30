import React from 'react'
import { Link } from "react-router-dom"
import Content from '../components/Landcontent/Content'
import { Container, Grid, Typography, Box, Button } from '@material-ui/core'


const Landing = () => {
    return (

        <div>
            <Content />





            <Grid  id="landContainer"  >
                <Grid xs={12}>
                    <Typography
                        variant="h1" component="h1">
                        <Box
                            letterSpacing={20}
                            color="#fff"
                            justifyContent="flex-start"
                            fontWeight="fontWeightBold"
                            display="flex"
                            fontStyle="italic"
                            className="first name">
                            Keith
                        </Box>
                    </Typography>

                    <Typography
                        variant="h1">
                        <Box
                            letterSpacing={20}
                            color="#fff"
                            display="flex"
                            justifyContent="center"
                            fontWeight="fontWeightBold"
                            fontStyle="italic"
                            className="last name"

                        >
                            Black
                        </Box>

                    </Typography>
                </Grid>

                <Grid row xs={12} >
                    <Grid xs={12} md={8} id="subtitle">
                        <Typography variant="h5">
                            <Box
                                mt={5}
                                letterSpacing={3}
                                color="#fff"
                                justifyContent="flex-start"
                                fontWeight="fontWeightBold"
                                fontStyle="italic"
                                display="flex"
                                className="subtitle"
                            >
                                A Software Developer!
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid xs={12} md={4} id="button" >
                        <Box
                            mt={5}>
                            <Link to="/About" className={window.location.pathname === "/About"}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="./About"
                                    className="button">
                                    Learn More
                                </Button>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>


        </div>

    )
}

export default Landing
