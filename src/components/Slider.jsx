import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import baseUrl from "../Images/work5.png";
import { Box, Typography } from "@mui/material";
import axios from "axios";

function SlickGo() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);
    const visibleCount = Math.min(team.length, 3);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // lazyLoad: true,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };
    
    
    const key = 'INTRfBpATLpTNI5s';

    const [team, setteam] = useState([])
    

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/member', {
            headers: {
                Authorization: key,
            }
        })
            .then((res) => {
                console.log("hyy");
                console.log(res.data.Data);

                setteam(res.data.Data)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        Products()
    }, [])

    return (
        <>
            <Box className="slider-container"
                sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    display: 'flex',
                }}>


                <Slider
                    key={team.length}
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {
                        team.map((i, index) => (
                            <Box
                                sx={{
                                    // width:'0%',
                                    boxSizing: 'border-box',
                                    padding: '15px',
                                    display: 'flex',

                                    justifyContent: 'space-between',
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

                                    <img src={i.images} width={'100%'} style={{
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
                                    }}>{i.name}</Typography>
                                    <Typography variant="h6">{i.manager}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Slider>

            </Box>
        </>
    );
}

export default SlickGo;
