// import React from 'react'
// import Header from './Header'
// import { Box, Typography } from '@mui/material'
// import car from '../Images/topabout.png'
// import Righticon from '@mui/icons-material/ChevronRight';
// import { Link } from 'react-router-dom';
// import abimg from '../Images/about-1_.png'
// import bcimg from '../Images/about-2.png'
// import a1 from '../Images/about_icon2.svg'
// import a2 from '../Images/about_icon2-2.png'
// import count4 from '../Images/about_icon-1.svg'
// import count5 from '../Images/about_icon-2.svg'
// import count6 from '../Images/icon_8.svg'

// function About() {
//   const Washings = [
//     {
//       title: "Elite Automotive Service",
//       text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed",
//       iconClass: count4,
//     },
//     {
//       title: "Pro Drive Garage",
//       text: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed",
//       iconClass: count5,
//     },
//     {
//       title: "Best Price",
//       text: "A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.",
//       iconClass: count6,
//     }
//   ];
//   return (
//     <>
//       <Box
//         data-aos="zoom-in-up"
//         sx={{
//           width: '100%',

//           backgroundColor: '#171717',

//           gap: '20px',
//         }}>

//         <Header />
//         <Box
//           sx={{
//             paddingTop: '80px',
//             width: '85%',
//             margin: 'auto',
//             justifyContent: 'right',
//             display: 'flex',
//           }}>
//           <Box sx={
//             {
//               width: '50%',
//               color: 'white',

//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }
//           }>
//             <Box >

//               <Typography
//                 sx={{
//                   fontSize: '36px',
//                   fontWeight: 'bold',
//                   color: 'white',
//                   fontFamily: 'math',
//                 }}>
//                 About Us
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: '20px',
//                   color: 'white',
//                   fontFamily: 'math',
//                   margin: '10px 0',
//                 }}>
//                 <Link
//                   to="/"
//                   style={{
//                     textDecoration: 'none',
//                     color: 'white',
//                     fontSize: '20px',

//                   }}>
//                   Home  &nbsp;
//                 </Link>
//                 <Righticon sx={{ fontSize: '24px', verticalAlign: 'middle' }} />
//                 &nbsp; About Us
//               </Typography>
//             </Box>
//           </Box>
//           <Box sx={{
//             width: '50%',
//           }}>
//             <img src={car} alt="" width={'100%'} />
//           </Box>
//         </Box>
//       </Box>


//       <Box

//         sx={{
//           width: '100%',
//           padding: '50px 0 100px 0',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           background: '#e1e1e1',
//         }}>
//         <Box
//         data-aos="zoom-in-up"

//           sx={{
//             width: '85%',
//             margin: 'auto',
//             display: 'flex',
//             flexWrap: 'wrap',
//           }}>
//           <Box
//             sx={{
//               width: { xs: '100%', sm: '80%', md: '50%' },
//             }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'end',
//                 position: 'relative',
//               }}>
//               <img src={abimg} alt="" style={{
//                 width: '60%',
//                 height: 'auto',
//                 borderRadius: '10px',
//               }} className='responsive-img' />
//               <Box sx={{
//                 padding: { xs: '10px', sm: '20px', md: '30px' },
//                 backgroundColor: 'red',
//                 width: 'max-content',
//                 borderRadius: '10px',
//                 top: {sm: '10px', md: '20px' },
//                 left: {sm: '20px', md: '30px' },
//                 right: { xs: '0px' },
//                 bottom: { xs: '0px' },
//                 position: 'absolute',
//                 animationName: 'updown',
//                 animationDuration: '2s',
//                 animationIterationCount: 'infinite',
//               }}>
//                 <img src={a1} alt="" />
//                 <Typography
//                   sx={{
//                     fontSize: { xs: '20px', sm: '30px', md: '36px' },
//                     fontWeight: 'bold',
//                     color: 'white',
//                   }}>
//                   5k+
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: '14px', sm: '18px', md: '18px' },
//                     color: 'white',
//                   }}>
//                   Trusted Customer
//                 </Typography>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'start',
//                 position: 'relative',
//                 marginTop: '20px',
//               }}>
//               <img src={bcimg} alt="" style={{
//                 width: '90%',
//                 height: 'auto',
//                 borderRadius: '10px',
//               }} />
//               <Box sx={{
//                 padding: '20px',
//                 backgroundColor: '#e1e1e1',
//                 width: 'max-content',
//                 borderRadius: '10px',
//                 top: '25%',
//                 right: '10%',
//                 position: 'absolute',
//                 animationName: 'leftRight',
//                 animationDuration: '3s',
//                 animationIterationCount: 'infinite',
//               }}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                   }}>

//                   <img src={a2} alt="" style={{
//                     padding: '10px',
//                     backgroundColor: 'red',
//                     borderRadius: '50%',
//                   }} />
//                   <Typography
//                     sx={{
//                       fontSize: '40px',
//                       fontWeight: 'bold',
//                       color: 'black',
//                     }}>
//                     5k+
//                   </Typography>
//                 </Box>
//                 <Typography
//                   sx={{
//                     fontSize: '20px',
//                     color: 'black',

//                   }}>
//                   Years Of Experiences
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//           <Box sx={{
//             width: { xs: '100%', sm: '80%', md: '50%' },
//             padding: { xs: '0', sm: '20px' },
//             boxSizing: 'border-box'
//           }}>
//             <Typography
//               sx={{
//                 fontSize: { xs: '28px', sm: '36px', md: '40px' },
//                 fontWeight: '900',
//                 lineHeight: '1.2',
//                 fontFamily: 'math',
//                 '&:hover': {
//                   color: 'red',
//                   transition: '0.5s',
//                 }
//               }}>
//               Non Leo Libero Amet The Maecenas Gravida
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: '16px', sm: '18px', md: '20px' },
//                 margin: '5px 0',
//                 lineHeight: '1.2',
//                 fontFamily: 'math',
//                 textAlign: 'justify'
//               }}>
//               A car repair is a service provided to fix any issues or damages with a your vehicle. It involves diagnosing the problem, repairing or replacing the necessary parts, and ensuring that the car
//             </Typography>
//             <Box sx={{
//               display: 'flex',
//               justifyContent: 'space-around',
//               alignItems: 'center',
//               cursor: 'pointer',
//               flexWrap: 'wrap',
//               margin: '20px 0',
//             }}>
//               {
//                 Washings.map((item, index) => (
//                   <>
                  
//                       <Box
//                         sx={{
//                           width: '20%',
//                           margin: '10px 0',
//                           img: {
//                             padding: '10px',
//                             borderRadius: '0',
//                             cursor: 'pointer',
//                             width: '50%',
//                             transition: 'transform 0.3s ease-in-out',
//                             '&:hover': {
//                               transform: 'scaleX(-1)',
//                             },
//                           },
//                         }}
//                       >
//                         <img src={item.iconClass} alt="" />
//                       </Box>

//                     {/* </Box> */}
//                     <Box sx={{
//                       width: '80%',
//                       margin: '10px 0'
//                     }}>
//                       <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>
//                         <Typography
//                           sx={{
//                             fontSize: { xs: '18px', sm: '18px', md: '26px' },
//                             lineHeight: '1.2',
//                             fontFamily: 'math',
//                             fontWeight: 'bold',
//                             color: 'black',

//                             '&:hover': {
//                               color: 'red',
//                               transition: '0.5s',
//                             },
//                           }}>

//                           {item.title}
//                         </Typography>
//                       </Link>
//                       <Typography
//                         sx={{
//                           fontSize: { xs: '16px', sm: '16px', md: '18px' },
//                           lineHeight: '1.2',
//                           fontFamily: 'emoji',
//                         }}>
//                         {item.text}
//                       </Typography>
//                     </Box>
//                   </>
//                 ))
//               }
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   )
// }


// export default About








import React from 'react'
import Header from './Header'
import { Box, Typography } from '@mui/material'
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
  return (
    <>
      <Box
        data-aos="zoom-in-up"
        sx={{
          width: '100%',

          backgroundColor: '#171717',

          gap: '20px',
        }}>

        <Header />
        <Box
          sx={{
            paddingTop: '80px',
            width: '85%',
            margin: 'auto',
            justifyContent: 'right',
            display: 'flex',
          }}>
          <Box sx={
            {
              width: '50%',
              color: 'white',

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }
          }>
            <Box >

              <Typography
                sx={{
                  fontSize: '36px',
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
            width: '50%',
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
              margin:'auto',
            }}> 
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                position: 'relative',
              }}>
              <img src={abimg} alt="" style={{
                width: '60%',
                height: 'auto',
                borderRadius: '10px',
              }} className='responsive-img' />
              <Box sx={{
                padding: { xs: '10px', sm: '20px', md: '20px' },
                backgroundColor: 'red',
                width: 'max-content',
                height: 'max-content',
                borderRadius: '10px',
                top: {sm: '10px', md: '20px' },
                left: {sm: '0px', md: '00px' },
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
                    fontSize: { xs: '20px', sm: '30px', md: '36px' },
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
                right: {xs:'0', sm: '20px', md: '10%' },
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
    </>
  )
}


export default About


