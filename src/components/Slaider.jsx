



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Box, Typography } from "@mui/material";

function Sliders() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }

        ]
    };
    const key = 'INTRfBpATLpTNI5s';
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const res = await axios.get('https://generateapi.onrender.com/api/member', {
                    headers: { Authorization: key }
                });
                setSlides(res.data.Data);
            } catch (err) {
                console.error('Error fetching slides:', err);
            }
        };
        fetchSlides();
    }, []);
    return (
        <Box className="slider-container">
            
            <Box
                sx={{
                    width: '85%',
                    display: display ? "block" : "none",
                    margin: 'auto',
                    overflow: 'hidden',
                }}
            >
                <Slider {...settings}>
                    {
                        slides.map((item) => (
                            <Box
                                sx={{
                                    padding: '0 10px',
                                    boxSizing: 'border-box',
                                }}>

                                <Box
                                    sx={{
                                        padding: '20px',
                                        boxSizing: 'border-box',
                                        backgroundColor: 'white',
                                        borderRadius: '15px',
                                        borderBlockEnd: '4px solid black',
                                        transition: '0.5s',
                                        '&:hover': {
                                            borderBlockEnd: '4px solid red',
                                        }
                                    }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            boxSizing: 'border-box',
                                            padding: '5px',
                                            transition: '0.5s',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            '&:hover': {
                                                transform: 'scale(1.03)',
                                            }
                                        }}>
                                        <img src={item.images} width={'100%'} style={{
                                            borderRadius: '10px',
                                        }} />
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: '10px 0',
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                        <Typography sx={{
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: 'black',
                                            transition: '0.5s',
                                            fontFamily: 'Roboto Slab',
                                            '&:hover': {
                                                color: 'red',
                                            }
                                        }}>{item.name}</Typography>
                                        <Typography variant="h6">{item.manager}</Typography>
                                    </Box>
                                </Box>
                            </Box>

                        ))
                    }
                </Slider>
            </Box>
        </Box>
    );
}

export default Sliders;

