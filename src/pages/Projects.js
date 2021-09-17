import React from 'react'
import {
    Container,
    Grid,
    Box,
    Typography
} from "@material-ui/core"
import ProjTabs from '../components/ProjTabs'



const Projects = () => {
    return (
        <Container
            component="div"
            style={{ marginTop: "100px" }} >
            <Grid 
            item 
            xs={12}
            style={{ background: "#fff" }} >
                <Box 
                bgcolor="#eee">
                    <Typography 
                    variant="h2" 
                    style={{ textAlign: "center", padding:"20px" }}>MY PROJECTS</Typography>
                    <ProjTabs />
                </Box>
            </Grid>
        </Container>
    )
}

export default Projects
