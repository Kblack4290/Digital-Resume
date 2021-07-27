import "./style.css"
import React from 'react'
import { Grid, Box, Paper, CardMedia, Typography} from "@material-ui/core"




const Hero = () => {
    return (
        <Paper id="hero" xs={12} >
            <CardMedia className="hero-img">
            
            <Typography variant="h1" id="about-header" >ABOUT ME</Typography>
            </CardMedia>
        </Paper>
    )
}

export default Hero
