import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, styled, TextField, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React, { useState } from 'react'
import footer from '../Images/footer-bg2-1.png'
import logo from '../Images/logo-white.svg'
import ll1 from '../Images/Ll1.svg'
import CloseIcon from '@mui/icons-material/Close';
import Sliders from './Slaider';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function Footers() {
    const [hover, setHover] = useState(false);
    const [hovers, setHovers] = useState(false);
    const iconStyle = {
        cursor: 'pointer',
        color: '#ffffffba',
        fontSize: '32px',
        transition: 'all 0.6s',
        '&:hover': {
            color: 'red',
            transition: 'all 0.6s'
        },
        mx: 1,
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };




    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    padding: '50px 0 100px 0',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    background: '#e1e1e1',

                }}
            >
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: { xs: '80%', sm: '80%', md: '60%', lg: '50%' },
                        margin: 'auto',
                        textAlign: 'center',
                    }}>
                    <span className='line'
                        style={{
                            color: 'red',
                            textAlign: 'center',
                            fontSize: '18px'
                        }}> Team Member </span>
                    <Typography sx={
                        {
                            fontSize: { xs: '31px', sm: '46px', md: '56px' },
                            fontWeight: 'bold',
                            textAlign: 'center',
                            lineHeight: '1.1',
                            fontFamily: 'math',
                            '&:hover': {
                                color: 'red',
                                transition: '0.5s',
                            }
                        }
                    }>Car Repair <br /> The Best Services</Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '14px', sm: '16px', md: '18px' }
                        }}>A car repair is a service provided to fix any issues or a damages with your vehicle. It a involves diagnosing the problem, repairing or replacing</Typography>
                </Box>
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: '85%',
                        display: 'flex',
                        margin: 'auto',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        padding: '30px 0',
                        rowGap: '15px',
                    }}>

                </Box>
                <Sliders />
            </Box>
            {/* ===============**************==================== */}
            <Box
                className="w-100"
                marginBottom={'0'}
                sx={{
                    background: `url(${footer})`,
                    padding: '50px 0',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#000000eb',
                }}
            >
                <Box
                    sx={{
                        width: '85%',
                        margin: 'auto',
                    }}>


                    <Box className="main" display={'flex'}>
                        <Box className="logo" width={'50%'}>
                            <img src={logo} alt="Cafeu Logo" />
                        </Box>
                        <Box
                            width="50%"
                            display="flex"
                            justifyContent="end"
                            alignItems="center"
                            color="red"


                        >
                            <InstagramIcon sx={iconStyle} />
                            <FacebookIcon sx={iconStyle} />
                            <XIcon sx={iconStyle} />
                            <PinterestIcon sx={iconStyle} />
                        </Box>
                    </Box>
                    <Box className="main" padding={'10px 0'}>
                        <hr />
                    </Box>
                    <Box className="main" display={'flex'} flexWrap={'wrap'} color='#ffffffb3' justifyContent={'center'} >
                        <Box width={{ xs: '80%', sm: '60%', md: '30%' }}>
                            <Typography
                                fontSize={'24px'}
                                padding={'10px 0'}
                                fontWeight={'600'}
                                fontFamily={'math'}
                                color='white'
                                width={'max-content'}
                                sx={{
                                    transition: 'all 0.6s',
                                    '&:hover': {
                                        color: 'red',
                                        transition: 'all 0.6s'
                                    },
                                }}>
                                Contact US
                            </Typography>
                            <Typography fontSize={'20px'} fontFamily={'monospace'} fontWeight={'600'} color='#ffffffb3'>
                                (+888) 123 456 765
                            </Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'10px 0'}>
                                Old city Street,USA  <br /> 1212 New york-3500
                            </Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'10px 0'}>
                                fixturbo@mail.com
                            </Typography>
                        </Box>
                        <Box width={{ xs: '80%', sm: '30%', md: '20%' }}>
                            <Typography
                                fontSize={'24px'}
                                color='white'
                                padding={'10px 0'}
                                fontWeight={'600'}
                                fontFamily={'math'}
                                width={'max-content'}
                                sx={{
                                    transition: 'all 0.6s',
                                    '&:hover': {
                                        color: 'red',
                                        transition: 'all 0.6s'
                                    },
                                }}>Company</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>About </Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Team</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Faq</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Privacy Policy</Typography>
                        </Box>
                        <Box width={{ xs: '80%', sm: '30%', md: '20%' }} >
                            <Typography
                                fontSize={'24px'}
                                color='white'
                                padding={'10px 0'}
                                fontWeight={'600'}
                                fontFamily={'math'}
                                width={'max-content'}
                                sx={{
                                    transition: 'all 0.6s',
                                    '&:hover': {
                                        color: 'red',
                                        transition: 'all 0.6s'
                                    },
                                }}>Service</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Mechanic Masters</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Speedy Auto Repair</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Mobile Car Repair</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Pro Auto Fix</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Precision Auto Works</Typography>
                        </Box>
                        <Box width={{ xs: '80%', sm: '60%', md: '30%' }} >
                            <Typography
                                fontSize={'24px'}
                                color='white'
                                padding={'10px 0'}
                                fontWeight={'600'}
                                fontFamily={'math'}
                                width={'max-content'}
                                sx={{
                                    transition: 'all 0.6s',
                                    '&:hover': {
                                        color: 'red',
                                        transition: 'all 0.6s'
                                    },
                                }}>Newsletter</Typography>
                            <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'10px 0'}>It is a long established fact that a reader will be distracted</Typography>

                            <Box
                                component="form"
                                sx={{ display: 'flex', mb: 3, width: '100%' }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    type="email"
                                    placeholder="Enter Email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        border: '2px solid white',
                                        borderRadius: '10px',
                                        input: {
                                            color: 'white',
                                            '&::placeholder': { color: '#ffffffb3', opacity: 1 }
                                        },
                                    }}
                                />
                            </Box>

                            <Box>
                                <Button
                                    sx={{
                                        width: '80%',
                                        borderRadius: '30px',
                                        border: 'none',
                                        padding: '10px',
                                        fontSize: '20px',
                                        backgroundColor: hover ? 'red' : 'white',
                                        color: hover ? 'white' : 'black',
                                        fontFamily: 'monospace',
                                        transition: 'background-color 0.4s',
                                    }}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    Subscribe Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="main" padding={'10px 0'}>
                        <hr />
                    </Box>
                    <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                        <Typography color='white' padding={'10px 0'}>
                            © All Copyright 2025 by Solar
                        </Typography>
                        <img src={ll1} alt="" />
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default Footers
