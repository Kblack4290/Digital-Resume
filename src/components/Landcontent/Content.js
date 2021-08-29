import React from 'react'
import './styles.css'
import Particles from 'react-particles-js';


const Content = () => {
    return (
        <div  >
            <Particles
                id="particles-js"
                params={{
                    particles: {
                        enable: true,
                        number: {
                            value: 150,
                        },
                        color: {
                            value: "#a2b9bc"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#a2b9bc"
                            }
                        },
                        size: {
                            value: 10,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                            }
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            random: true,
                            bounce: true,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            }
                        },

                        interactivity: {
                            detectOn: "canvas",
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true,
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                }
                            },
                            modes: {
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                push:{
                                    quantity: 4,
                                }
                            }
                        },





                    }
                }}

            />







        </div>


    )
}

export default Content
