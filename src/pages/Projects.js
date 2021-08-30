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
            <Grid style={{ background: "#fff" }} >
                <Box bgcolor="#eee">
                    <Typography variant="h2" style={{ textAlign: "center" }}>MY PROJECTS</Typography>
                    <ProjTabs />
                </Box>
            </Grid>
        </Container>
    )
}

export default Projects
