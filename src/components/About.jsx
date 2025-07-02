import React from 'react'
import Header from './Header'
import { Box, Button, Typography } from '@mui/material'
import car from '../Images/topabout.png'
import Righticon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import abimg from '../Images/about-1_.png'
import bcimg from '../Images/about-2.png'
import a1 from '../Images/about_icon2.svg'
import a2 from '../Images/about_icon2-2.png'
import count4 from '../Images/about_icon-1.svg'
import count5 from '../Images/about_icon-2.svg'
import count6 from '../Images/icon_8.svg'
import Solutions1 from '../Images/Screenshot_1.png'
import Solutions2 from '../Images/Screenshot_2.png'
import Solutions3 from '../Images/Screenshot_3.png'
import Solutions4 from '../Images/cta-bg1-1.png'
import Sliders from './Slaider';
import Footers from './Footer';
import ScrollToTop from './Scrollbuteon';

function About() {
  const Washings = [
    {
      title: "Elite Automotive Service",
      text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed",
      iconClass: count4,
    },
    {
      title: "Pro Drive Garage",
      text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed",
      iconClass: count5,
    },
    {
      title: "Best Price",
      text: "A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.",
      iconClass: count6,
    }
  ];
  const Solutions = [
    {
      title: "Mobile Car Repair",
      text: " By reducing customer trips to garages, mobile mechanics help lower fuel use and carbon emissions.",
      iconClass: Solutions1,
    },
    {
      title: "Pro Drive Garage",
      text: "Modern diagnostic equipment ensures accurate issue identification and efficient repairs",
      iconClass: Solutions2,
    },
    {
      title: "Precision Auto Works",
      text: "Restores dents without damaging the original paint, preserving the vehicle's appearance.",
      iconClass: Solutions3,
    }
  ];
  return (
    <>
        <Header />
        <ScrollToTop />
      <Box
        data-aos="zoom-in-up"
        sx={{
          width: '100%',
          backgroundColor: '#171717',
          gap: '20px',
        }}>

        <Box
          sx={{
            paddingTop: '80px',
            width: '85%',
            margin: 'auto',
            justifyContent: 'right',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          <Box sx={
            {
              width: { xs: '100%', sm: '100%', md: '50%' },
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }
          }>
            <Box >

              <Typography
                sx={{
                  fontSize: { xs: '26px', sm: '32px', md: '36px' },
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'math',
                }}>
                About Us
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: 'white',
                  fontFamily: 'math',
                  margin: '10px 0',
                }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '20px',

                  }}>
                  Home  &nbsp;
                </Link>
                <Righticon sx={{ fontSize: '24px', verticalAlign: 'middle' }} />
                &nbsp; About Us
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            width: { xs: '100%', sm: '100%', md: '50%'},
          }}>
            <img src={car} alt="" width={'100%'} />
          </Box>
        </Box>
      </Box>

      <Box

        sx={{
          width: '100%',
          padding: '50px 0 100px 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          background: '#e1e1e1',
        }}>
        <Box
          data-aos="zoom-in-up"

          sx={{
            width: '85%',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '50%' },
              margin: 'auto',
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                position: 'relative',
              }}>
              <img src={abimg} alt=""
                style={{
                  width: '60%',
                  height: 'auto',
                  borderRadius: '10px',
                }}
                className='responsive-img' />
              <Box
                sx={{
                  padding: { xs: '10px', sm: '10px', md: '10px' },
                  backgroundColor: 'red',
                  width: 'max-content',
                  height: 'max-content',
                  borderRadius: '10px',
                  top: { sm: '10px', md: '20px' },
                  left: { sm: '0px', md: '00px' },
                  right: { xs: '0px' },
                  bottom: { xs: '0px' },
                  position: 'absolute',
                  animationName: 'updown',
                  animationDuration: '2s',
                  animationIterationCount: 'infinite',
                }}>
                <img src={a1} alt="" />
                <Typography
                  sx={{
                    fontSize: { xs: '20px', sm: '24px', md: '30px' },
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  5k+
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '14px', sm: '18px', md: '18px' },
                    color: 'white',
                  }}>
                  Trusted Customer
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                position: 'relative',
                marginTop: '20px',
              }}>
              <img src={bcimg} alt="" style={{
                width: '90%',
                height: 'auto',
                borderRadius: '10px',
              }} />
              <Box sx={{
                padding: '20px',
                backgroundColor: '#e1e1e1',
                width: 'max-content',
                borderRadius: '10px',
                top: { sm: '20px', md: '25%' },
                right: { xs: '0', sm: '20px', md: '10%' },
                position: 'absolute',
                animationName: 'leftRight',
                animationDuration: '3s',
                animationIterationCount: 'infinite',
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>

                  <img src={a2} alt="" style={{
                    padding: '10px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                  }} />
                  <Typography
                    sx={{
                      fontSize: '40px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    5k+
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: 'black',

                  }}>
                  Years Of Experiences
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            width: { xs: '100%', sm: '80%', md: '50%' },
            padding: { xs: '0', sm: '20px' },
            boxSizing: 'border-box'
          }}>
            <Typography
              sx={{
                fontSize: { xs: '28px', sm: '36px', md: '40px' },
                fontWeight: '900',
                lineHeight: '1.2',
                fontFamily: 'math',
                '&:hover': {
                  color: 'red',
                  transition: '0.5s',
                }
              }}>
              Non Leo Libero Amet The Maecenas Gravida
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                margin: '5px 0',
                lineHeight: '1.2',
                fontFamily: 'math',
                textAlign: 'justify'
              }}>
              A car repair is a service provided to fix any issues or damages with a your vehicle. It involves diagnosing the problem, repairing or replacing the necessary parts, and ensuring that the car
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              cursor: 'pointer',
              flexWrap: 'wrap',
              margin: '20px 0',
            }}>
              {
                Washings.map((item, index) => (
                  <>

                    <Box
                      sx={{
                        width: '20%',
                        margin: '10px 0',
                        img: {
                          padding: '10px',
                          borderRadius: '0',
                          cursor: 'pointer',
                          width: '50%',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scaleX(-1)',
                          },
                        },
                      }}
                    >
                      <img src={item.iconClass} alt="" />
                    </Box>

                    {/* </Box> */}
                    <Box sx={{
                      width: '80%',
                      margin: '10px 0'
                    }}>
                      <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>
                        <Typography
                          sx={{
                            fontSize: { xs: '18px', sm: '18px', md: '26px' },
                            lineHeight: '1.2',
                            fontFamily: 'math',
                            fontWeight: 'bold',
                            color: 'black',

                            '&:hover': {
                              color: 'red',
                              transition: '0.5s',
                            },
                          }}>

                          {item.title}
                        </Typography>
                      </Link>
                      <Typography
                        sx={{
                          fontSize: { xs: '16px', sm: '16px', md: '18px' },
                          lineHeight: '1.2',
                          fontFamily: 'emoji',
                        }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </>
                ))
              }
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Box
          data-aos="zoom-in-up"
          sx={{
            width: { xs: '80%', sm: '80%', md: '60%', lg: '60%' },
            margin: 'auto',
            textAlign: 'center',
          }}>
          <span className='line'
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: '18px'
            }}>  WORK PROCESS  </span>
          <Typography sx={
            {
              fontSize: { xs: '31px', sm: '46px', md: '56px' },
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '1.2',
              fontFamily: 'math',
              '&:hover': {
                color: 'red',
                transition: '0.5s',
              }
            }
          }>It Dependable Car Repair Best Solutions</Typography>
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
          {
            Solutions.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', sm: '100%', md: '30%' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '10px',
                  }}>

                  <Box>
                    <img src={item.iconClass} alt="" style={{
                      borderRadius: '50%',
                      width: '80px',
                    }} />
                    <Typography
                      sx={{
                        fontSize: { xs: '20px', sm: '24px', md: '30px' },
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '16px', sm: '18px', md: '18px' },
                        color: 'black',
                      }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))
          }
          {/* <Box sx={{
            width: { xs: '100%', sm: '100%', md: '30%' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            display: 'flex',
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '10px',
              }}>

              <Box>
              <img src={Solutions1} alt="" style={{
                borderRadius: '50%',
                width: '80px',
              }} />
                <Typography
                  sx={{
                    fontSize: { xs: '20px', sm: '24px', md: '30px' },
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                 Mobile Car Repair
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '16px', sm: '18px', md: '18px' },
                    color: 'black',
                  }}>
                 By reducing customer trips to garages, mobile mechanics help lower fuel use and carbon emissions.
                </Typography>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Box>

      <Box
        data-aos="zoom-in-up"
        sx={{
          position: 'relative',
          width: '100%',
          padding: '50px 0',
          backgroundImage: `url(${Solutions4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: -1,
          }}
        />

        <Box
          data-aos="zoom-in-up"
          sx={{
            width: '85%',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
          }}>

          <Box
            sx={{ width: { xs: '100%', sm: '80%', md: '50%' } }}>
            <span className='line'
              style={{
                color: 'red',
                fontSize: '18px'

              }}>
              Contact us</span>
            <Typography sx={{
              fontSize: { xs: '30px', sm: '34px', md: '38px', lg: '46px' },
              fontWeight: '900',
              lineHeight: '1.2',
              fontFamily: 'math',
              padding: '10px 0',
              '&:hover': {
                color: 'red',
                transition: '0.5s',
              }
            }}>
              Where Engines Roar and Problems Soar
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '80%', md: '50%' },
              margin: '20px 0',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}>
            <Button
              sx={{
                color: 'white',
                backgroundColor: 'red',
                padding: { xs: '10px 15px', sm: '10px 15px', lg: '15px 25px' },
                fontSize: '16px',
                border: '2px solid transparent',
                marginRight: '15px',
                fontSize: { xs: '14px', sm: '16px' },
                "&:hover": {
                  backgroundColor: "white",
                  color: 'black',
                  border: '2px solid black',
                }
              }}>VIEW MORE</Button>
          </Box>


        </Box>
      </Box >
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


      <Box
        data-aos="zoom-in-up">
        <Footers />
      </Box>

    </>
  )
}


export default About


