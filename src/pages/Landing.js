import React from 'react'
import Content from '../components/Landcontent/Content'
import { Container, Grid, Paper, Typography, Box } from '@material-ui/core'


const Landing = () => {
    return (
        <div>
            <Content />
            <div>
                <Container id="landContainer">

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">

                        <Paper
                            elevation={0}
                            style={{ width: "75%", background: "transparent" }}>
                            <Typography component="div" >
                                <Box
                                    letterSpacing={6}
                                    color="#fff"
                                    textAlign="left" m={-1}
                                    fontWeight="fontWeightBold"
                                    fontSize={200}
                                    fontStyle="italic">Keith</Box>
                                <Box
                                    letterSpacing={6}
                                    color="#fff"
                                    textAlign="right" m={-10}
                                    fontWeight="fontWeightBold"
                                    fontSize={200}
                                    fontStyle="italic"
                                >Black</Box>


                            </Typography>
                        </Paper>

                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Landing
