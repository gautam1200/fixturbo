// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Slider from "react-slick";
// import { Box, Typography } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CustomNextArrow = ({ onClick }) => (
//     <Box
//         onClick={onClick}
//         sx={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 3, cursor: 'pointer', color: 'white' }}
//     >
//         <ArrowForwardIosIcon />
//     </Box>
// );

// const CustomPrevArrow = ({ onClick }) => (
//     <Box
//         onClick={onClick}
//         sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 3, cursor: 'pointer', color: 'white' }}
//     >
//         <ArrowBackIosNewIcon />
//     </Box>
// );

// const key = 'INTRfBpATLpTNI5s';
// const Sliderss = () => {
//     const [slides, setSlides] = useState([]);

//     useEffect(() => {
//         const fetchSlides = async () => {
//             try {
//                 const res = await axios.get('https://generateapi.onrender.com/api/member', {
//                     headers: { Authorization: key }
//                 });
//                 setSlides(res.data.Data);
//             } catch (err) {
//                 console.error('Error fetching slides:', err);
//             }
//         };
//         fetchSlides();
//     }, []);

//     const settings = {
//         arrows: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 3000,
//         cssEase: "ease-in-out",
//         nextArrow: <CustomNextArrow />,
//         prevArrow: <CustomPrevArrow />,
//     };

//     return (
//         <Box className="slider-container">
//             <Slider {...settings}>
//                 {slides.map((item) => (
//                     <Box
//                         key={item.id}
//                         sx={{
//                             position: 'relative',
//                             width: '100%',
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                             color: 'white',
//                             overflow: 'hidden',
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 width: '100%',
//                                 boxSizing: 'border-box',
//                                 padding: '15px',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 justifyContent: 'space-between',
//                                 backgroundColor: 'white',
//                                 borderRadius: '15px',
//                                 borderBlockEnd: '4px solid black',
//                                 transition: '0.5s',
//                                 '&:hover': {
//                                     borderBlockEnd: '4px solid red',
//                                 }
//                             }}>
//                             <Box
//                                 sx={{
//                                     width: '100%',
//                                     boxSizing: 'border-box',
//                                     padding: '5px',
//                                     transition: '0.5s',
//                                     overflow: 'hidden',
//                                     display: 'flex',
//                                     '&:hover': {
//                                         transform: 'scale(1.03)',
//                                     }
//                                 }}>

//                                 <img src={item.images} width={'100%'} style={{
//                                     borderRadius: '10px',
//                                 }} />
//                             </Box>
//                             <Box
//                                 sx={{

//                                     padding: '10px 0',
//                                     alignItems: 'center',
//                                     display: 'flex',
//                                     flexDirection: 'column',

//                                 }}>

//                                 <Typography sx={{
//                                     fontSize: '24px',
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     transition: '0.5s',
//                                     fontFamily: 'Roboto Slab',
//                                     '&:hover': {
//                                         color: 'red',
//                                     }
//                                 }}>{item.name}</Typography>
//                                 <Typography variant="h6">{item.manager}</Typography>
//                             </Box>
//                         </Box>

//                         {/* Optional: Add content like title or button here */}
//                     </Box>
//                 ))}
//             </Slider>
//         </Box>
//     );
// };

// export default Sliderss;



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Box, Typography } from "@mui/material";

function Resizable() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",

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
                    
                    
                }}
            >
                <Slider {...settings}>
                    {
                        slides.map((item) => (
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
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    );
}

export default Resizable;

