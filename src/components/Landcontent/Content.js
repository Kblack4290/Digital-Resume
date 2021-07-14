import React from 'react'
import './styles.css'
import Particles from 'react-particles-js';

const Content = () => {
    return (
        <div id="particles-js" >
            <Particles
                params={{
                    particles: {
                        enable: true,
                        number: {
                            value: 100,
                        },
                        color: {
                            value: "#fff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#fff"
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
                            speed: 5,
                            random: true,
                            bounce: true,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            }
                        },
                    
                        interactivity: {
                            detectOn: "canvas window parent",
                            events : {
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                }
                            },
                            modes:{
                                repulse:{
                                    distance: 50,
                                    duration:0.4,
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
