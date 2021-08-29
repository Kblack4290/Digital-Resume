import React from 'react'
import Content from '../components/Landcontent/Content'
import {  Grid, Typography, Box, Button } from '@material-ui/core'


const Landing = () => {
    return (
        <Grid>
            <div >
                <Content />
            </div>




            <Grid
                id="landContainer"
                xs={12}>

                <Typography
                    variant="h1">
                    <Box
                        letterSpacing={20}
                        color="#fff"
                        justifyContent="flex-start"
                        fontWeight="fontWeightBold"
                        display="flex"
                        fontStyle="italic">
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

                    >
                        Black
                    </Box>

                </Typography>

                <Typography variant="h5">
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
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                href="./About">
                                Learn More
                            </Button>
                        </Box>
                    </Box>


                </Typography>

            </Grid>


        </Grid>

    )
}

export default Landing
