import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import herobookappointmentimg from "../../assets/herobookappointmentimg.svg";
import herovideoimg from "../../assets/herovideoimg.svg";

import DoctorImage from "../../assets/Doctorconsult.png";

function Onlineconsult() {
  return (
    <Box
      sx={{
        py: {
          xs: 6,
          md: 8,
        },
        bgcolor: "#FFFFFF",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "1240px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: 5,
              md: 7,
              lg: 8,
            },
          }}
        >
          {/* Left Image */}

          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "55%",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={DoctorImage}
              alt="Doctor Consultation"
              sx={{
                width: "100%",
                maxWidth: {
                  xs: 420,
                  sm: 520,
                  md: 600,
                  lg: 640,
                },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Right Content */}

          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "40%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: {
                xs: "center",
                lg: "flex-start",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
                        {/* Heading */}
            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  sm: "38px",
                  md: "44px",
                  lg: "48px",
                },
                fontWeight: 600,
                color: "#101828",
                lineHeight: 1.2,
                maxWidth: "520px",
                mb: 2,
              }}
            >
             Ready to take charge of your health?
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: "18px",
                color: "#667085",
                lineHeight: "30px",
                maxWidth: "500px",
                mb: 5,
              }}
            >
              Book an appointment or consult a doctor online
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "380px",
                  lg: "360px",
                },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Book Appointment */}
              <Button
                fullWidth
                variant="contained"
                startIcon={<img src={herobookappointmentimg} alt="Book Appointment" />}
                sx={{
                  height: 56,
                  borderRadius: "12px",
                  bgcolor: "#0A8F73",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 500,
                  boxShadow: "none",

                  "&:hover": {
                    bgcolor: "#087A62",
                    boxShadow: "none",
                  },
                }}
              >
                Book Appointment
              </Button>

              {/* Consult Online */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<img src={herovideoimg} alt="Consult Online" />}
                sx={{
                  height: 56,
                  borderRadius: "12px",
                  border: "1.5px solid #0A8F73",
                  color: "#0A8F73",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 500,

                  "&:hover": {
                    bgcolor: "#F4FFFC",
                    border: "1.5px solid #0A8F73",
                  },
                }}
              >
                Consult Online
              </Button>
            </Box>
         </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Onlineconsult;