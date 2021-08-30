import React from 'react'
import { Link } from "react-router-dom"
import Content from '../components/Landcontent/Content'
import { Container, Grid, Typography, Box, Button } from '@material-ui/core'


const Landing = () => {
    return (
        <Grid container >
            <div >
                <Content />
            </div>




            <Grid id="landContainer"

                xs={12} md={12}>

                <Typography
                    variant="h1" component="h1">
                    <Box
                        letterSpacing={20}
                        color="#fff"
                        justifyContent="flex-start"
                        fontWeight="fontWeightBold"
                        display="flex"
                        fontStyle="italic"
                        className="name">
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
                        className="name"

                    >
                        Black
                    </Box>

                </Typography>

                <Typography variant="h5" id="subtitle">
                    <Box
                        mt={5}
                        letterSpacing={5}
                        color="#fff"
                        justifyContent="flex-start"
                        fontWeight="fontWeightBold"
                        fontStyle="italic"
                        display="flex"
                    >
                        A Software Developer!
                        <Box
                            ml={5}
                        > <Link to="/About" className={window.location.pathname === "/About"}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="./About">
                                    Learn More
                                </Button>
                            </Link>
                        </Box>
                    </Box>


                </Typography>

            </Grid>


        </Grid>

    )
}

export default Landing
