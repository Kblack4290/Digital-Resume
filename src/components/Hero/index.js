import "./style.css"
import React from 'react'
import { Box, Paper, Typography } from "@material-ui/core"




const Hero = () => {
    return (
        <Paper component="div" id="hero" xs={12} >
            <Box
                display="flex"
                alignContent="center"
                p={1}
                m={1}
                sx={{ height: 100 }}>
                <Typography variant="h1" id="about-header" >ABOUT ME </Typography>
            </Box>
        </Paper>
    )
}

export default Hero
