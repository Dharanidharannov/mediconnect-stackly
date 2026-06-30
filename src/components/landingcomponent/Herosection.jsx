import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";
import {
  VideoCameraFrontOutlined,
  CalendarTodayOutlined,
  ScienceOutlined,
  LocalHospitalOutlined,
  VerifiedOutlined,
  BoltOutlined,
  ArrowForwardOutlined,
} from "@mui/icons-material";

import herotrustedicon from "../../assets/herotrusted.svg"
import herosecureicon from "../../assets/herosecure.svg"
import heroverifiedicon from "../../assets/heroverified.svg"
import hero24supporticon from "../../assets/hero24support.svg"

import herosectionbadge1 from "../../assets/herosectionbadge1.svg";
import herobookappointmentimg from "../../assets/herobookappointmentimg.svg";
import herovideoimg from "../../assets/herovideoimg.svg";

import heroImage from "../../assets/heroimgrightside.svg";

import PersonSearchOutlined from "@mui/icons-material/PersonSearchOutlined";
import VideocamOutlined from "@mui/icons-material/VideocamOutlined";


function Herosection() {
  const trustItems = [
    {
      icon: herotrustedicon,
      title: "Trusted by",
      subtitle: "Healthcare Experts",
    },
    {
      icon: heroverifiedicon,
      title: "Verified",
      subtitle: "Healthcare Experts",
    },
    {
      icon: herosecureicon,
      title: "Secure & Confidential",
      subtitle: "Your data is protected",
    },
    {
      icon: hero24supporticon,
      title: "24/7 Care",
      subtitle: "We're here for you",
    },
  ];

  return (
    <Box
      sx={{
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 },
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
<Container
  maxWidth={false}
  sx={{
    maxWidth: "1320px",
    mx: "auto",
    px: {
      xs: 2,
      sm: 3,
      md: 4,
      lg: 5,
    },
  }}
>
        <Grid
  container
  spacing={6}
  alignItems="center"
>
          {/* Left Content */}
         <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Chip
                icon={
                  <img
                    src={herosectionbadge1}
                    alt="AI Badge"
                    style={{
                      width: 18,
                      height: 18,
                    }}
                  />
                }
                label="AI-Powered Healthcare Ecosystem"
                sx={{
                  bgcolor: "#E6F4F0",
                  color: "#00856F",
                  fontWeight: 600,
                  fontSize: "14px",
                  borderRadius: "100px",
                  border: "0.5px solid #00856F",
                  height: "32px",
                  px: 1.5,
                  mb: 3,
                  "& .MuiChip-icon": {
                    ml: 1,
                    mr: 0,
                  },
                  "& .MuiChip-label": {
                    px: 1,
                  },
                }}
              />

              {/* Main Heading */}
              <Typography
                sx={{
                  width: {
                    xs: "100%",
                    md: "600px",
                  },
                  fontWeight: 600,
                  fontSize: {
                    xs: "36px",
                    sm: "48px",
                    md: "62px",
                  },
                  lineHeight: {
                    xs: "44px",
                    sm: "52px",
                    md: "68px",
                  },
                  letterSpacing: "0",
                  color: "#17201D",
                  mb: 3,
                }}
              >
                One Platform for the Entire{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#0D8B72",
                  }}
                >
                  Healthcare
                </Box>
                <br />
                Ecosystem
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  width: {
                    xs: "100%",
                    md: "504px",
                  },
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "16px",
                  },
                  fontWeight: 400,
                  lineHeight: "32px",
                  letterSpacing: 0,
                  color: "#4D4D4D",
                  mb: 4,
                }}
              >
                Connect Patients, Doctors, Hospitals, Laboratories, Pharmacies,
                Insurance, and Healthcare providers through one secure AI-powered
                platform.
              </Typography>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  startIcon={<img src={herobookappointmentimg} alt="book" />}
                  sx={{
                    width: { xs: "100%", sm: "200px" },
                    height: "56px",
                    bgcolor: "#0D8B72",
                    color: "#FFFFFF",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#0B7863",
                      boxShadow: "none",
                    },
                    "& .MuiButton-startIcon": {
                      mr: 1,
                    },
                  }}
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<img src={herovideoimg} alt="video" />}
                  sx={{
                    width: { xs: "100%", sm: "196px" },
                    height: "56px",
                    border: "1px solid #0D8B72",
                    color: "#0D8B72",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    bgcolor: "#FFFFFF",
                    boxShadow: "none",
                    "&:hover": {
                      border: "1px solid #0D8B72",
                      bgcolor: "#F5FCFA",
                      boxShadow: "none",
                    },
                    "& .MuiButton-startIcon": {
                      mr: 1,
                    },
                  }}
                >
                  Consult Online
                </Button>
              </Stack>

              {/* Trust Indicators */}
<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={3}
  sx={{
    width: {
      xs: "100%",
      md: "680px",
    },
    minHeight: "28px",
    mt: 4,
    alignItems: {
      xs: "flex-start",
      md: "center",
    },
  }}
>
  {trustItems.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          bgcolor: "#F3FAF8",
          border: "1px solid #D8EEE8",
          flexShrink: 0,
        }}
      >
        <img
          src={item.icon}
          alt={item.title}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </Box>

      {/* Text */}
      <Box>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "100%",
            color: "#17201D",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16px",
            color: "#6B7280",
          }}
        >
          {item.subtitle}
        </Typography>
      </Box>
    </Box>
  ))}
</Stack>
            </Box>
          </Grid>

          {/* Right Content - Feature Cards */}
<Grid size={{ xs: 12, md: 6 }}>
  <Box
    sx={{
      position: "relative",
      width: "100%",
    minHeight: {
  xs: 360,
  sm: 430,
  md: 595,
},
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    {/* Main Image */}
    <Box
      component="img"
      src={heroImage}
      alt="Doctor"
      sx={{
        width: {
          xs: "95%",
          sm: "85%",
          md: "90%",
        },
        maxWidth: {
          xs: 320,
          sm: 420,
          md: 540,
        },
        objectFit: "contain",
      }}
    />

    {/* Find Doctors */}
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        top: {
          xs: 15,
          sm: 35,
          md: 90,
        },
        left: {
          xs: 8,
          sm: 10,
          md: 0,
        },
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
        py: {
          xs: 1,
          sm: 1.2,
          md: 1.5,
        },
        borderRadius: "18px",
        bgcolor: "#fff",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.08)",
        zIndex: 2,
      }}
    >
      <PersonSearchOutlined
        sx={{
          color: "#0F8B73",
          fontSize: {
            xs: 22,
            sm: 24,
            md: 28,
          },
        }}
      />

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: 13,
              sm: 14,
              md: 16,
            },
          }}
        >
          Find Doctors
        </Typography>

        <Typography
          sx={{
            color: "#7B7B7B",
            fontSize: {
              xs: 10,
              sm: 11,
              md: 13,
            },
          }}
        >
          Verified specialists
        </Typography>
      </Box>
    </Paper>

    {/* Consult Online */}
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        top: {
          xs: 5,
          sm: 20,
          md: 20,
        },
        right: {
          xs: 8,
          sm: 10,
          md: 10,
        },
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
        py: {
          xs: 1,
          sm: 1.2,
          md: 1.5,
        },
        borderRadius: "18px",
        bgcolor: "#fff",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.08)",
        zIndex: 2,
      }}
    >
      <VideocamOutlined
        sx={{
          color: "#0F8B73",
          fontSize: {
            xs: 22,
            sm: 24,
            md: 28,
          },
        }}
      />

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: 13,
              sm: 14,
              md: 16,
            },
          }}
        >
          Consult Online
        </Typography>

        <Typography
          sx={{
            color: "#7B7B7B",
            fontSize: {
              xs: 10,
              sm: 11,
              md: 13,
            },
          }}
        >
          Connect in Few Seconds
        </Typography>
      </Box>
    </Paper>

    {/* Lab Tests */}
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        bottom: {
          xs: 10,
          sm: 30,
          md: "15%",
        },
        left: {
          xs: "50%",
          sm: "35%",
          md: "20%",
        },
        transform: {
          xs: "translateX(-50%)",
          sm: "translateX(0)",
          md: "translateX(0)",
        },
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
        py: {
          xs: 1,
          sm: 1.2,
          md: 1.5,
        },
        borderRadius: "18px",
        bgcolor: "#fff",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.08)",
        zIndex: 2,
      }}
    >
      <ScienceOutlined
        sx={{
          color: "#0F8B73",
          fontSize: {
            xs: 22,
            sm: 24,
            md: 28,
          },
        }}
      />

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: 13,
              sm: 14,
              md: 16,
            },
          }}
        >
          Lab Tests
        </Typography>

        <Typography
          sx={{
            color: "#7B7B7B",
            fontSize: {
              xs: 10,
              sm: 11,
              md: 13,
            },
          }}
        >
          Book tests at home
        </Typography>
      </Box>
    </Paper>
  </Box>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Herosection;