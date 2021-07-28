import "./style.css"
import React from 'react'
import { Grid, Box, Paper, Typography } from "@material-ui/core"




const Hero = () => {
    return (
        <Paper  id="hero" xs={12} >
            <Box component="div"
                display="flex"
                

                sx={{ height: 100 }}>
                <Grid xs={12} >
                    <Grid xs={6} style={{ float: "left" }}>
                        <Box
                            pt={22}
                            ml={5}
                            alignItems="flex-end"
                            justifyContent="center"
                        >
                            <Typography variant="h1" id="about-header" >ABOUT ME </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} style={{ float: "right" }}>
                        <Box
                        justifyContent="center"
                            alignItems="flex-end"
                            pt={22}
                            mr={5}

                        >
                            <Typography variant="h1" id="about-header" >SKILLS</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default Hero
