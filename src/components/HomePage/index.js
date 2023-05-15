// Write your code here
import {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import PinterestIcon from '@mui/icons-material/Pinterest'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import Drawer from '@mui/material/Drawer'
import CancelIcon from '@mui/icons-material/Cancel'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const HomePage = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: '#ffffff',
          height: {
            lg: '119px',
            md: '116px',
            sm: '108px',
          },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space - between',
          alignItems: 'center',
          padding: {
            lg: '48px',
            md: '40px',
            sm: '38px',
          },
          gap: '4px',
        }}
        position="absolutes"
      >
        <Box
          sx={{
            height: '44px',
            width: '44px',
            backgroundColor: '#301E4E',
            borderRadius: '17px',
            flex: 'none',
            order: '0',
            flexGrow: '0',
            marginRight: {
              lg: '905px',
              md: '392px',
              sm: '262px',
            },
          }}
        />{' '}
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            sx={{
              height: {
                lg: '47px',
                md: '33px',
              },
              width: {
                lg: '124px',
                md: '89px',
              },
              color: '#1F1235',
              fontFamily: 'Playfair Display',
              fontStyle: {
                lg: 'normal',
              },
              fontWeight: {
                lg: 400,
              },
              fontSize: {
                lg: '35px',
                md: '25px',
              },
              lineHeight: {
                lg: '47px',
                md: '33px',
              },
              flex: {
                lg: 'none',
              },
              order: {
                lg: 0,
              },
              flexGrow: {
                lg: 0,
              },
              marginRight: {
                lg: '48px',
              },
            }}
            component="div"
          >
            Contact{' '}
          </Typography>{' '}
          <Typography
            variant="h4"
            sx={{
              height: {
                lg: '47px',
                md: '33px',
              },
              width: {
                lg: '83px',
                md: '59px',
              },
              color: '#1F1235',
              fontFamily: 'Playfair Display',
              fontStyle: {
                lg: 'normal',
              },
              fontWeight: {
                lg: 400,
              },
              fontSize: {
                lg: '35px',
                md: '25px',
              },
              lineHeight: {
                lg: '47px',
                md: '33px',
              },
              flex: {
                lg: 'none',
              },
              order: {
                lg: 1,
              },
              flexGrow: {
                lg: 0,
              },
              marginRight: {
                lg: '48px',
              },
            }}
            component="div"
          >
            Work{' '}
          </Typography>{' '}
        </Toolbar>{' '}
        <IconButton
          edge="start"
          color="inherit"
          ariaLabel="menu"
          sx={{
            mr: 2,
            backgroundColor: {lg: '#E7D7F6'},
            md: '#E7D7F6',
            sm: 'none',
            width: {
              lg: '44px',
              md: '44px',
            },
            height: {
              lg: '44px',
              md: '44px',
            },
            marginRight: {
              lg: '27px',
              md: '20px',
            },
          }}
          position="absolutes"
        >
          <MenuIcon
            onClick={() => {
              setOpen(true)
            }}
          />
          <Drawer
            open={open}
            onClose={() => {
              setOpen(false)
            }}
            anchor="right"
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: {lg: '10px'},
                width: {lg: '528px', md: '480px', sm: '390px'},
                height: {lg: '1024px', md: '1194px', sm: '844px'},
                right: '0px',
                top: '0px',
                background: '#301E4E',
                margin: '0px',
              }}
            >
              <CancelIcon
                sx={{
                  width: {lg: '44px'},
                  height: {lg: '44px'},
                  color: '#E7D7F6',
                  paddingTop: {lg: '48px'},
                  paddingLeft: {lg: '412px'},
                  paddingBottom: {lg: '50px'},
                }}
                onClick={() => {
                  setOpen(false)
                }}
              />
              <ListItem
                sx={{
                  width: {lg: '480px', md: '480px', sm: '342px'},
                  height: {lg: '125px', md: '100px', sm: '53px'},
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {lg: '400', md: '400', sm: '700'},
                  fontSize: {lg: '62px', md: '49px', sm: '40px'},
                  lineHeight: {lg: '83px', md: '65px', sm: '53px'},
                  letterSpacing: {lg: '-0.005em', md: 'none', sm: 'none'},
                  color: '#FFFFFF',
                  flex: 'none',
                  order: '0',
                  alignSelf: 'stretch',
                  flexGrow: '0',
                  paddingLeft: {lg: '48px', md: '40px', sm: '35px'},
                }}
              >
                Services{' '}
              </ListItem>
              <ListItem
                sx={{
                  width: {lg: '480px', md: '480px', sm: '342px'},
                  height: {lg: '125px', md: '100px', sm: '53px'},
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {lg: '400', md: '400', sm: '700'},
                  fontSize: {lg: '62px', md: '49px', sm: '40px'},
                  lineHeight: {lg: '83px', md: '65px', sm: '53px'},
                  letterSpacing: {lg: '-0.005em', md: 'none', sm: 'none'},
                  color: '#FFFFFF',
                  flex: 'none',
                  order: '0',
                  alignSelf: 'stretch',
                  flexGrow: '0',
                  paddingLeft: {lg: '48px', md: '40px', sm: '35px'},
                }}
              >
                About us
              </ListItem>
              <ListItem
                sx={{
                  width: {lg: '480px', md: '480px', sm: '342px'},
                  height: {lg: '125px', md: '100px', sm: '53px'},
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {lg: '400', md: '400', sm: '700'},
                  fontSize: {lg: '62px', md: '49px', sm: '40px'},
                  lineHeight: {lg: '83px', md: '65px', sm: '53px'},
                  letterSpacing: {lg: '-0.005em', md: 'none', sm: 'none'},
                  color: '#FFFFFF',
                  flex: 'none',
                  order: '0',
                  alignSelf: 'stretch',
                  flexGrow: '0',
                  paddingLeft: {lg: '48px', md: '40px', sm: '35px'},
                }}
              >
                Blogs
              </ListItem>
              <ListItem
                sx={{
                  width: {lg: '480px', md: '480px', sm: '342px'},
                  height: {lg: '125px', md: '100px', sm: '53px'},
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {lg: '400', md: '400', sm: '700'},
                  fontSize: {lg: '62px', md: '49px', sm: '40px'},
                  lineHeight: {lg: '83px', md: '65px', sm: '53px'},
                  letterSpacing: {lg: '-0.005em', md: 'none', sm: 'none'},
                  color: '#FFFFFF',
                  flex: 'none',
                  order: '0',
                  alignSelf: 'stretch',
                  flexGrow: '0',
                  paddingLeft: {lg: '48px', md: '40px', sm: '35px'},
                }}
              >
                Contact us{' '}
              </ListItem>
              <Button
                sx={{
                  marginLeft: {lg: '48px', md: '40px', sm: '20px'},
                  paddingTop: {lg: '15px', md: '15px', sm: '10px'},
                  fontFamily: 'Source Sans Pro',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: {lg: '15px', md: '15px', sm: '12px'},
                  textAlign: 'center',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: {lg: '10px', md: '10px', sm: 'none'},
                  width: {lg: '370px', md: '362px', sm: '227px'},
                  height: {lg: '65px', md: '57px', sm: '41px'},
                  background: '#FF6E6C',
                  borderRadius: {lg: '12px', md: '12px', sm: '8px'},
                  flex: 'none',
                  order: '4',
                  flexGrow: '0',
                }}
              >
                Book an free marketing aduit{' '}
              </Button>
            </List>
          </Drawer>
        </IconButton>{' '}
      </AppBar>
      <Box
        sx={{
          backgroundImage: `url('https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684049329/Frame_63_dwlpeg.png')`,
          height: {
            lg: '800px',
            md: '500px',
            sm: '474px',
          },
          left: {
            lg: '0px',
            md: 'none',
            sm: '0px',
          },
          top: {
            lg: '119px',
            md: 'none',
            sm: '0px',
          },
          paddingTop: {
            lg: '211px',
            md: '109px',
            sm: '22px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: {
              lg: '32px',
              md: '24px',
              sm: '0px',
            },
            gap: {
              lg: '10px',
              md: '10px',
              sm: '4px',
            },
            width: {
              lg: '732px',
              md: '476px',
              sm: '390px',
            },
            height: {
              lg: '494px',
              md: '340px',
              sm: '100px',
            },
            left: '0px',
            top: {
              lg: '330px',
              md: '109px',
              sm: '22px',
            },

            backgroundColor: '#FFFFFF70',
          }}
        >
          <Box
            sx={{
              width: {
                lg: '634px',
                md: '287px',
                sm: '342px',
              },
              height: {
                lg: '268px',
                md: '166px',
                sm: '53px',
              },
              display: {
                sm: 'flex',
              },
            }}
          >
            <Typography
              sx={{
                flex: 'none',
                order: '0',
                flexGrow: '0',
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '689px',
                  md: '700',
                  sm: '700',
                },
                fontSize: {
                  lg: '99px',
                  md: '62px',
                  sm: '40px',
                },
                lineHeight: {
                  lg: '132px',
                  md: '83px',
                  sm: '53px',
                },
                letterSpacing: {
                  lg: '-0.015em',
                  md: '-0.005em',
                  sm: 'none',
                },
                color: '#301E4E',
              }}
            >
              We are{' '}
            </Typography>
            <Typography
              sx={{
                flex: 'none',
                order: '0',
                flexGrow: '0',
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '689px',
                  md: '700',
                  sm: '700',
                },
                fontSize: {
                  lg: '99px',
                  md: '62px',
                  sm: '40px',
                },
                lineHeight: {
                  lg: '132px',
                  md: '83px',
                  sm: '53px',
                },
                letterSpacing: {
                  lg: '-0.015em',
                  md: '-0.005em',
                  sm: 'none',
                },
                color: '#B7364A',
              }}
            >
              Extensive
            </Typography>
          </Box>

          <Typography
            sx={{
              width: {
                lg: '614px',
                md: '420px',
                sm: '342px',
              },
              height: {
                lg: '130px',
                md: '94px',
                sm: '19px',
              },

              fontFamily: 'Playfair Display',
              fontStyle: 'normal',
              fontWeight: {
                lg: '400px',
                md: '400',
                sm: '400',
              },
              fontSize: {
                lg: '49px',
                md: '35px',
                sm: '14px',
              },
              lineHeight: {
                lg: '65px',
                md: '47px',
                sm: '19px',
              },

              color: '#301E4E',

              flex: 'none',
              order: '1',
              flexGrow: '0',
            }}
          >
            Helping you stand out in a crowded market{' '}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: {
            lg: '491px',
          },
          left: {
            lg: '100px',
          },
          top: {
            lg: '100px',
          },
          background: '#FFFFFF',
          paddingTop: {
            lg: '298px',
          },
        }}
      >
        <Typography
          sx={{
            width: {
              lg: '195px',
            },
            height: {
              lg: '37px',
            },
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: {
              lg: '400px',
            },
            fontSize: {
              lg: '25px',
            },
            lineHeight: {
              lg: '33px',
            },
            color: '#463366',
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
            marginLeft: {
              lg: '72px',
            },
          }}
        >
          WHO WE ARE{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: {
              lg: '0px',
            },
            gap: {
              lg: '24px',
            },
            width: {
              lg: '1295px',
            },
            height: {
              lg: '315px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '1',
            },
            alignSelf: {
              lg: 'stretch',
            },
            flexGrow: {
              lg: '1',
            },
            marinTop: '32px',
            marginLeft: '72px',
          }}
        >
          <Typography
            sx={{
              width: {
                lg: '782px',
              },
              height: {
                lg: '139px',
              },

              fontFamily: 'Playfair Display',
              fontStyle: 'normal',
              fontWeight: {
                lg: '900px',
              },
              fontSize: {
                lg: '99px',
              },
              lineHeight: {
                lg: '132px',
              },
              letterSpacing: {
                lg: '-0.015em',
              },
              color: '#463366',
              flex: {
                lg: 'none',
              },
              order: {
                lg: '0',
              },
              flexGrow: {
                lg: '0',
              },
            }}
          >
            We are Extensive.{' '}
          </Typography>
          <Typography
            sx={{
              width: {
                lg: '1295px',
              },
              height: {
                lg: '111px',
              },
              fontFamily: 'Source Sans Pro',
              fontStyle: 'normal',
              fontWeight: {
                lg: '400px',
              },
              fontSize: {
                lg: '35px',
              },
              lineHeight: {
                lg: '44px',
              },
              letterSpacing: {
                lg: '0.0025em',
              },

              color: '#494949',
              flex: {
                lg: 'none',
              },
              order: {
                lg: '1',
              },
              flexGrow: {
                lg: '0',
              },
            }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.{' '}
          </Typography>
        </Box>
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: {
              lg: '20px',
            },
            width: {
              lg: '357px',
            },
            height: {
              lg: '65px',
            },
            background: '#301E4E',
            borderRadius: {
              lg: '12px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
            marginLeft: {
              lg: '72px',
            },
            marginTop: {
              lg: '52.5px',
            },
            fontFamily: 'Source Sans Pro',
            fontStyle: 'normal',
            fontWeight: {
              lg: '600px',
            },
            fontSize: {
              lg: '15px',
            },
            lineHeight: {
              lg: '25px',
            },
            color: '#FFFFFF',
          }}
        >
          BOOK A FREE MARKETING AUDIT{' '}
        </Button>{' '}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: {
                lg: '635px',
              },
              height: {
                lg: '675.94px',
              },
              left: {
                lg: '-126.91px',
              },
              top: {
                lg: '1943px',
              },
              paddingTop: {
                lg: '265px',
              },
            }}
          >
            <Box
              sx={{
                width: {
                  lg: '635px',
                },
                height: {
                  lg: '675.94px',
                },
                backgroundImage: {
                  lg: `url('https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684060528/Ellipse_24_xtirj6.png')`,
                },
                paddingTop: {
                  lg: '70px',
                },
                paddingLeft: {
                  lg: '110px',
                },
              }}
            >
              <Typography
                sx={{
                  width: {
                    lg: '400px',
                  },
                  height: {
                    lg: '273px',
                  },

                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '700px',
                  },
                  fontSize: {
                    lg: '99px',
                  },
                  lineHeight: {
                    lg: '132px',
                  },
                  letterSpacing: {
                    lg: '-0.015em',
                  },

                  /* Primary/Main */

                  color: '#301E4E',

                  /* Inside auto layout */

                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                WHAT WE DO.{' '}
              </Typography>{' '}
              <Box
                sx={{
                  width: {
                    lg: '520px',
                  },
                  height: {
                    lg: '82px',
                  },
                  fontFamily: 'Source Sans Pro',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '400',
                  },
                  fontSize: {
                    lg: '35px',
                  },
                  lineHeight: {
                    lg: '44px',
                  },
                  letterSpacing: {
                    lg: '0.0025em',
                  },
                  color: '#0C0525',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '1',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                We do lots of stuffs, basically adding value to your product .{' '}
              </Box>{' '}
            </Box>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: {
                lg: '0px',
              },
              gap: {
                lg: '16px',
              },
              width: {
                lg: '600px',
              },
              height: {
                lg: '677px',
              },
              left: {
                lg: '800px',
              },
              top: {
                lg: '1942px',
              },
              paddingTop: {
                lg: '265px',
              },
            }}
          >
            <Typography
              sx={{
                width: {
                  lg: '556px',
                },
                height: {
                  lg: '73px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '62px',
                },
                lineHeight: {
                  lg: '83px',
                },
                letterSpacing: {
                  lg: '-0.005em',
                },
                color: '#301E4E',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
                marginBottom: {
                  lg: '80px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '556px',
                },
                height: {
                  lg: '73px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '62px',
                },
                lineHeight: {
                  lg: '83px',
                },
                letterSpacing: {
                  lg: '-0.005em',
                },
                color: '#301E4E',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
                marginBottom: {
                  lg: '80px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '556px',
                },
                height: {
                  lg: '73px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '62px',
                },
                lineHeight: {
                  lg: '83px',
                },
                letterSpacing: {
                  lg: '-0.005em',
                },
                color: '#301E4E',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
                marginBottom: {
                  lg: '80px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '556px',
                },
                height: {
                  lg: '73px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '62px',
                },
                lineHeight: {
                  lg: '83px',
                },
                letterSpacing: {
                  lg: '-0.005em',
                },
                color: '#301E4E',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
                marginBottom: {
                  lg: '48px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Button
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: {
                  lg: '20px',
                },

                width: {
                  lg: '153px',
                },
                height: {
                  lg: '64px',
                },
                background: '#301E4E',
                borderRadius: {
                  lg: '12px',
                },

                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                flexGrow: {
                  lg: '0',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '600',
                },
                fontSize: {
                  lg: '20px',
                },
                color: '#FFFFFF',
              }}
            >
              View all{' '}
            </Button>{' '}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: {
            lg: '24px',
          },
          height: {
            lg: '2363px',
          },
          gap: {
            lg: '40px',
          },
          left: {
            lg: '0',
          },
          top: {
            lg: '2745px',
          },
          background: '#301E4E',
        }}
      >
        <Typography
          sx={{
            width: {
              lg: '333px',
            },
            height: {
              lg: '200px',
            },
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: {
              lg: '689',
            },
            fontSize: {
              lg: '99px',
            },
            lineHeight: {
              lg: '132px',
            },
            letterSpacing: {
              lg: '-0.015em',
            },
            color: '#E2DAEB',
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '1',
            },
            marginLeft: {
              lg: '72px',
            },
            marginBottom: {
              lg: '12px',
            },
          }}
        >
          OUR WORK.{' '}
        </Typography>{' '}
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: {
              lg: '20px',
            },
            gap: {
              lg: '10px',
            },
            width: {
              lg: '153px',
            },
            height: {
              lg: '65px',
            },
            background: '#FF6E6C',
            borderRadius: {
              lg: '12px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
            marginLeft: {
              lg: '72px',
            },
          }}
        >
          VIEW ALL{' '}
        </Button>{' '}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: {
              lg: '24px',
            },
            width: {
              lg: '1440px',
            },
            height: {
              lg: '933px',
            },
            flex: 'none',
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <Box
            sx={{
              marginLeft: {
                lg: '72px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684064931/Rectangle_55_pfuam3.png"
              alt="My"
              style={{
                width: '636px',
                height: '704px',
              }}
            />{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '27px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  l: 400,
                },
                fontSize: {
                  lg: '17px',
                },
                lineHeight: {
                  lg: '21px',
                },
                letterSpacing: '0.005em',
                color: '#FF6E6C',
                marginTop: {
                  lg: '11px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '75px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '49px',
                },
                lineHeight: {
                  lg: '65px',
                },
                color: '#E7D7F6',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              STARBUCKS{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '88px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '44px',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#FFFFFF',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '2',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              Our ad campaign brought 80 % footfall to the company{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              marginLeft: '24px',
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684065267/Rectangle_55_hqyxb5.png"
              alt="MyOne"
              style={{
                width: '636px',
                height: '478px',
              }}
            />{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '27px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  l: 400,
                },
                fontSize: {
                  lg: '17px',
                },
                lineHeight: {
                  lg: '21px',
                },
                letterSpacing: '0.005em',
                color: '#FF6E6C',
                marginTop: {
                  lg: '11px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '75px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '49px',
                },
                lineHeight: {
                  lg: '65px',
                },
                color: '#E7D7F6',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              NIKE{' '}
            </Typography>
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '88px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '44px',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#FFFFFF',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '2',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              Our ad campaign brought 80 % footfall to the company{' '}
            </Typography>{' '}
          </Box>{' '}
        </Box>{' '}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: {
              lg: '24px',
            },
            width: {
              lg: '1440px',
            },
            height: {
              lg: '933px',
            },
            flex: 'none',
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <Box
            sx={{
              marginLeft: {
                lg: '72px',
              },
              order: {
                lg: '1',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684064931/Rectangle_55_pfuam3.png"
              alt="My"
              style={{
                width: '636px',
                height: '704px',
              }}
            />{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '27px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  l: 400,
                },
                fontSize: {
                  lg: '17px',
                },
                lineHeight: {
                  lg: '21px',
                },
                letterSpacing: '0.005em',
                color: '#FF6E6C',
                marginTop: {
                  lg: '11px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '75px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '49px',
                },
                lineHeight: {
                  lg: '65px',
                },
                color: '#E7D7F6',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              STARBUCKS{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '88px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '44px',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#FFFFFF',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '2',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              Our ad campaign brought 80 % footfall to the company{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              marginLeft: '24px',
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684065267/Rectangle_55_hqyxb5.png"
              alt="MyOne"
              style={{
                width: '636px',
                height: '478px',
              }}
            />{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '27px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  l: 400,
                },
                fontSize: {
                  lg: '17px',
                },
                lineHeight: {
                  lg: '21px',
                },
                letterSpacing: '0.005em',
                color: '#FF6E6C',
                marginTop: {
                  lg: '11px',
                },
              }}
            >
              Digital Marketing{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '75px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '49px',
                },
                lineHeight: {
                  lg: '65px',
                },
                color: '#E7D7F6',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              NIKE{' '}
            </Typography>{' '}
            <Typography
              sx={{
                width: {
                  lg: '636px',
                },
                height: {
                  lg: '88px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '44px',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#FFFFFF',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              Our ad campaign brought 80 % footfall to the company{' '}
            </Typography>{' '}
          </Box>{' '}
        </Box>{' '}
      </Box>{' '}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: {
            lg: '0px',
          },
          gap: {
            lg: '64px',
          },
          height: {
            lg: '905px',
          },
          left: {
            lg: '0px',
          },
          top: {
            lg: '5188px',
          },
          marginBottom: {
            lg: '247px',
          },
        }}
      >
        <Typography
          sx={{
            width: {
              lg: '500px',
            },
            height: {
              lg: '279px',
            },
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: {
              lg: '689',
            },
            fontSize: {
              lg: '99px',
            },
            lineHeight: {
              lg: '132px',
            },
            letterSpacing: {
              lg: '-0.015em',
            },
            color: '#301E4E',
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
            paddingLeft: {
              lg: '72px',
            },
          }}
        >
          Our Partners.{' '}
        </Typography>{' '}
        <Typography
          sx={{
            width: {
              lg: '1022px',
            },
            height: {
              lg: '44px',
            },
            fontFamily: 'Source Sans Pro',
            fontStyle: 'normal',
            fontWeight: {
              lg: '400',
            },
            fontSize: {
              lg: '35px',
            },
            lineHeight: {
              lg: '44px',
            },
            letterSpacing: {
              lg: '0.0025em',
            },
            color: '#FF6E6C',
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
            paddingLeft: {
              lg: '72px',
            },
          }}
        >
          Your success is our success.{' '}
        </Typography>{' '}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: {
              lg: '24px',
            },
            gap: {
              lg: '88px',
            },
            width: {
              lg: '1440px',
            },
            height: {
              lg: '259px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <Box>
            <PinterestIcon
              sx={{
                fontSize: {
                  lg: '143.47px',
                },
              }}
            />{' '}
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
              }}
            >
              Pinterest{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684073774/Vector_wfbzjc.png"
              alt="logo"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
              }}
            >
              Pinterest{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684073967/Vector_rk1ge7.png"
              alt="logo1"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
                marginTop: {
                  lg: '75px',
                },
              }}
            >
              PWA{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684074066/Vector_y502pv.png"
              alt="logo2"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },

                marginTop: {
                  lg: '51.5px',
                },
              }}
            >
              Saas{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684074267/ion_logo-vue_lukdpf.png"
              alt="logo3"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
              }}
            >
              Pinterest{' '}
            </Typography>{' '}
          </Box>{' '}
        </Box>{' '}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: {
              lg: '24px',
            },
            gap: {
              lg: '88px',
            },
            width: {
              lg: '1440px',
            },
            height: {
              lg: '259px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <Box>
            <PinterestIcon
              sx={{
                fontSize: {
                  lg: '143.47px',
                },
              }}
            />{' '}
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
              }}
            >
              Pinterest{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684073774/Vector_wfbzjc.png"
              alt="logo"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
              }}
            >
              Pinterest{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684073967/Vector_rk1ge7.png"
              alt="logo1"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
                marginTop: {
                  lg: '75px',
                },
              }}
            >
              PWA{' '}
            </Typography>{' '}
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684074066/Vector_y502pv.png"
              alt="logo2"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },

                marginTop: {
                  lg: '51.5px',
                },
              }}
            >
              Saas{' '}
            </Typography>
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              width: {
                lg: '164px',
              },
              height: {
                lg: '211px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684074267/ion_logo-vue_lukdpf.png"
              alt="logo3"
            />
            <Typography
              sx={{
                width: {
                  lg: '164px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                textAlign: {
                  lg: 'center',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#1F1235',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                alignSelf: {
                  lg: 'stretch',
                },
                flexGrow: {
                  lg: '1',
                },
              }}
            >
              Pinterest
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: {
            lg: '24px',
          },
          gap: {
            lg: '80px',
          },
          height: {
            lg: '757px',
          },
          left: {
            lg: '1px',
          },
          top: {
            lg: '6316px',
          },
        }}
      >
        <Typography
          sx={{
            width: {
              lg: '572px',
            },
            height: {
              lg: '132px',
            },
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: {
              lg: '689',
            },
            fontSize: {
              lg: '99px',
            },
            lineHeight: {
              lg: '132px',
            },
            letterSpacing: {
              lg: '-0.015em',
            },
            color: '#301E4E',
            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
            paddingLeft: {
              lg: '82px',
            },
          }}
        >
          Testimonials
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: {
              lg: '0px 0px 48px',
            },
            gap: {
              lg: '16px',
            },
            width: {
              lg: '1219px',
            },
            height: {
              lg: '477px',
            },
            background: '#FFFFFF',
            boxShadow: {
              lg: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            },
            borderRadius: {
              lg: '18px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '1',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: {
                lg: '0px',
              },
              gap: {
                lg: '40px',
              },

              width: {
                lg: '1123px',
              },
              height: {
                lg: '168px',
              },

              flex: {
                lg: 'none',
              },
              order: {
                lg: '0',
              },
              flexGrow: {
                lg: '0',
              },
              paddingTop: {
                lg: '48px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684079647/Ellipse_25_wvhai8.png"
              alt="logo5"
              style={{
                width: {
                  lg: '168px',
                },
                height: {
                  lg: '168px',
                },
              }}
            />
            <Typography
              sx={{
                width: {
                  lg: '1000px',
                },
                height: {
                  lg: '83px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '62px',
                },
                lineHeight: {
                  lg: '83px',
                },
                letterSpacing: {
                  lg: '-0.005em',
                },
                color: '#301E4E',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              {' '}
              “Working with Extensive is great”{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: {
                lg: '0px',
              },
              gap: {
                lg: '36px',
              },
              width: {
                lg: '381px',
              },
              height: {
                lg: '131px',
              },
              flex: {
                lg: 'none',
              },
              order: {
                lg: '0',
              },
              flexGrow: {
                lg: '0',
              },
              marginTop: {
                lg: '20px',
              },
              marginLeft: {
                lg: '600px',
              },
            }}
          >
            <Box
              sx={{
                width: {
                  lg: '100px',
                },
                height: {
                  lg: '0',
                },
                border: {
                  lg: '2px solid #301E4E',
                },
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                alignSelf: {
                  lg: 'stretch',
                },

                flexGrow: {
                  lg: '1',
                },
                marginTop: {
                  lg: '50px',
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: {
                  lg: '0px',
                },
                width: {
                  lg: '184px',
                },
                height: {
                  lg: '131px',
                },
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '1',
                },
                flexGrow: {
                  lg: '0',
                },
              }}
            >
              <Typography
                sx={{
                  width: {
                    lg: '184px',
                  },
                  height: {
                    lg: '65x',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '400',
                  },
                  fontSize: {
                    lg: '49px',
                  },
                  lineHeight: {
                    lg: '65px',
                  },
                  color: '#301E4E',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  alignSelf: {
                    lg: 'stretch',
                  },
                  flexGrow: {
                    lg: '1',
                  },
                }}
              >
                Hershel{' '}
              </Typography>
              <Typography
                sx={{
                  width: {
                    lg: '184px',
                  },
                  height: {
                    lg: '66x',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '400',
                  },
                  fontSize: {
                    lg: '25px',
                  },
                  lineHeight: {
                    lg: '33px',
                  },
                  color: '#FF6E6C',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '1',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                Head of director GGPL PVT LTD.{' '}
              </Typography>
            </Box>{' '}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: {
                lg: '35px',
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1684082288/Frame_239_bgommw.png"
              alt="logo7"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingLeft: {lg: '5px'},
          gap: {
            lg: '10px',
          },
          height: {
            lg: '408px',
          },
          background: '#301E4E',
          flex: {
            lg: 'none',
          },
          order: {
            lg: '0',
          },
          flexGrow: {
            lg: '0',
          },
        }}
      >
        <Box
          sx={{
            width: {
              lg: '897px',
            },
            height: {
              lg: '264px',
            },

            lineHeight: {
              lg: '132px',
            },
            letterSpacing: {
              lg: '-0.015em',
            },

            flex: {
              lg: 'none',
            },
            order: {
              lg: '0',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Playfair Display',
              fontStyle: 'normal',
              fontWeight: {
                lg: '689',
              },
              fontSize: {
                lg: '99px',
              },
              color: '#A17FC9',
            }}
          >
            Looking to drive results ?
            <span
              style={{
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '689',
                },
                fontSize: {
                  lg: '99px',
                },
                color: '#FF6E6C',
                textDecoration: 'underline',
              }}
            >
              Lets chat{' '}
            </span>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',

          gap: {
            lg: '191px',
          },
          height: {
            lg: '236px',
          },
          background: '#301E4E',
          flex: {
            lg: 'none',
          },
          order: {
            lg: '1',
          },
          flexGrow: {
            lg: '0',
          },
          marginTop: {
            lg: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: {
              lg: '50px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Typography
              sx={{
                width: {
                  lg: '78px',
                },
                height: {
                  lg: '47px',
                },
                fontFamily: 'Playfair Display',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '35px',
                },
                lineHeight: {
                  lg: '47px',
                },
                letterSpacing: {
                  lg: '0.0025em',
                },
                color: '#FFFFFF',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
                paddingLeft: {
                  lg: '20px',
                },
              }}
            >
              Logo{' '}
            </Typography>{' '}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: {
                  lg: '0px',
                },
                gap: {
                  lg: '50px',
                },
                width: {
                  lg: '823px',
                },
                height: {
                  lg: '28px',
                },
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
                marginLeft: {
                  lg: '100px',
                },
              }}
            >
              <Typography
                sx={{
                  width: {
                    lg: '107px',
                  },
                  height: {
                    lg: '28px',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '500',
                  },
                  fontSize: {
                    lg: '21px',
                  },
                  lineHeight: {
                    lg: '28px',
                  },
                  letterSpacing: {
                    lg: '0.0015em',
                  },
                  color: '#FFFFFF',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                Home page{' '}
              </Typography>{' '}
              <Typography
                sx={{
                  width: {
                    lg: '107px',
                  },
                  height: {
                    lg: '28px',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '500',
                  },
                  fontSize: {
                    lg: '21px',
                  },
                  lineHeight: {
                    lg: '28px',
                  },
                  letterSpacing: {
                    lg: '0.0015em',
                  },
                  color: '#FFFFFF',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                About us{' '}
              </Typography>
              <Typography
                sx={{
                  width: {
                    lg: '107px',
                  },
                  height: {
                    lg: '28px',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '500',
                  },
                  fontSize: {
                    lg: '21px',
                  },
                  lineHeight: {
                    lg: '28px',
                  },
                  letterSpacing: {
                    lg: '0.0015em',
                  },
                  color: '#FFFFFF',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                Book audit{' '}
              </Typography>{' '}
              <Typography
                sx={{
                  width: {
                    lg: '107px',
                  },
                  height: {
                    lg: '28px',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '500',
                  },
                  fontSize: {
                    lg: '21px',
                  },
                  lineHeight: {
                    lg: '28px',
                  },
                  letterSpacing: {
                    lg: '0.0015em',
                  },
                  color: '#FFFFFF',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                Contact us{' '}
              </Typography>
              <Typography
                sx={{
                  width: {
                    lg: '107px',
                  },
                  height: {
                    lg: '28px',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '500',
                  },
                  fontSize: {
                    lg: '21px',
                  },
                  lineHeight: {
                    lg: '28px',
                  },
                  letterSpacing: {
                    lg: '0.0015em',
                  },
                  color: '#FFFFFF',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                Our services{' '}
              </Typography>{' '}
              <Typography
                sx={{
                  width: {
                    lg: '107px',
                  },
                  height: {
                    lg: '28px',
                  },
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal',
                  fontWeight: {
                    lg: '500',
                  },
                  fontSize: {
                    lg: '21px',
                  },
                  lineHeight: {
                    lg: '28px',
                  },
                  letterSpacing: {
                    lg: '0.0015em',
                  },
                  color: '#FFFFFF',
                  flex: {
                    lg: 'none',
                  },
                  order: {
                    lg: '0',
                  },
                  flexGrow: {
                    lg: '0',
                  },
                }}
              >
                Blogs{' '}
              </Typography>{' '}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                width: {
                  lg: '91px',
                },
                height: {
                  lg: '16px',
                },
                fontFamily: 'Source Sans Pro',
                fontStyle: 'normal',
                fontWeight: {
                  lg: '400',
                },
                fontSize: {
                  lg: '13px',
                },
                lineHeight: {
                  lg: '16px',
                },
                letterSpacing: {
                  lg: '0.004em',
                },
                color: '#FFFFFF',
                flex: {
                  lg: 'none',
                },
                order: {
                  lg: '0',
                },
                flexGrow: {
                  lg: '0',
                },
                paddingTop: {
                  lg: '60px',
                },
              }}
            >
              Copyright @2023
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingTop: {
              lg: '40px',
            },
            paddingRight: {
              lg: '20px',
            },
            gap: {
              lg: '16px',
            },
            width: {
              lg: '104px',
            },
            height: {
              lg: '24px',
            },
            flex: {
              lg: 'none',
            },
            order: {
              lg: '2',
            },
            flexGrow: {
              lg: '0',
            },
          }}
        >
          <InstagramIcon
            sx={{
              left: {
                lg: '8.33%',
              },
              right: {
                lg: '8.33%',
              },
              top: {
                lg: '8.33%',
              },
              bottom: {
                lg: '8.33%',
              },
              color: '#FFFFFF',
            }}
          />{' '}
          <FacebookRoundedIcon
            sx={{
              left: {
                lg: '8.33%',
              },
              right: {
                lg: '8.33%',
              },
              top: {
                lg: '8.33%',
              },
              bottom: {
                lg: '8.33%',
              },
              color: '#FFFFFF',
            }}
          />{' '}
          <TwitterIcon
            sx={{
              left: {
                lg: '8.33%',
              },
              right: {
                lg: '8.33%',
              },
              top: {
                lg: '8.33%',
              },
              bottom: {
                lg: '8.33%',
              },
              color: '#FFFFFF',
            }}
          />{' '}
        </Box>{' '}
      </Box>
    </Box>
  )
}

export default HomePage
