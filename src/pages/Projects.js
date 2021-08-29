import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Paper, Typography, Avatar } from "@material-ui/core"
import Holiday from '../Assets/img/HolidayParty.jpg'
import AboutCard from '../components/Card'
import ProjTabs from '../components/ProjTabs'
import Card from '../components/Card'



const Projects = () => {
    return (
        <Container 
        component="div"
        style={{ marginTop:"100px"}} >
            <Grid style={{background:"#fff"}} >
                <Box bgcolor="#eee">
                    <Typography variant="h2" style={{ textAlign: "center" }}>MY PROJECTS</Typography>
                    <ProjTabs />
                </Box>
            </Grid>
        </Container>
    )
}

export default Projects
