import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material";
import ecodoctoricon from "../../assets/ecodoctoricon.svg";
import arrowline from "../../assets/arrowline.svg";
import { ArrowForwardOutlined } from "@mui/icons-material";

const ecosystemItems = [
  {
    title: "Patients",
    description: "Manage your health and access care",
    icon: ecodoctoricon,
  },
  {
    title: "Doctors",
    description: "Doctor care and consultations",
    icon: ecodoctoricon,
  },
  {
    title: "Hospitals",
    description: "Streamline operations and patient care",
    icon: ecodoctoricon,
  },
  {
    title: "Laboratories",
    description: "Accurate tests and timely reports",
    icon: ecodoctoricon,
  },
  {
    title: "Pharmacies",
    description: "Dispense and deliver medicine with ease",
    icon: ecodoctoricon,
  },
  {
    title: "Insurance",
    description: "Simplify policies and claims",
    icon: ecodoctoricon,
  },
];

function Exploreecosys() {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md:2 },
        bgcolor: "#fff",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6,
          },
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              color: "#047857",
              px: { xs: 2, sm: 2.5 },
              py: { xs: 0.5, sm: 1 },
              fontSize: { xs: 11, sm: 12, md: 13 },
              fontWeight: 600,
              letterSpacing: ".8px",
              textAlign: "center",
            }}
          >
            ONE CONNECTED HEALTHCARE NETWORK
          </Box>
        </Box>

        {/* Heading */}
        <Typography
          align="center"
          sx={{
            fontWeight: 700,
            color: "#111827",
            fontSize: {
              xs: 28,
              sm: 32,
              md: 42,
              lg: 52,
            },
            lineHeight: 1.15,
            px: { xs: 1, sm: 2 },
          }}
        >
          Built to connect every participant in the
        </Typography>

        <Typography
          align="center"
          sx={{
            fontWeight: 700,
            color: "#111827",
            fontSize: {
              xs: 28,
              sm: 32,
              md: 42,
              lg: 52,
            },
            lineHeight: 1.15,
            mb: { xs: 2, sm: 3 },
            px: { xs: 1, sm: 2 },
          }}
        >
          healthcare journey
        </Typography>

        <Typography
          align="center"
          sx={{
            maxWidth: 760,
            mx: "auto",
            color: "#6B7280",
            fontSize: {
              xs: 15,
              sm: 16,
              md: 17,
            },
            lineHeight: 1.8,
            mb: { xs: 6, sm: 8, md: 10 },
            px: { xs: 2, sm: 3 },
          }}
        >
          From booking to recovery, we make healthcare simple, accessible and personalized for you.
        </Typography>

        {/* Grid Layout for Items */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: {
              xs: 3,
              sm: 4,
              md: 2,
            },
            position: "relative",
          }}
        >
          {ecosystemItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                position: "relative",
                zIndex: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: {
                  xs: 2,
                  sm: 0,
                },
              }}
            >
              {/* Circle */}
              <Box
                sx={{
                  width: {
                    xs: 70,
                    sm: 76,
                    md: 84,
                  },
                  height: {
                    xs: 70,
                    sm: 76,
                    md: 84,
                  },
                  mx: "auto",
                  borderRadius: "50%",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#059669",
                    boxShadow: "0 4px 12px rgba(5, 150, 105, 0.15)",
                  },
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: {
                      xs: 30,
                      sm: 32,
                      md: 36,
                    },
                    height: {
                      xs: 30,
                      sm: 32,
                      md: 36,
                    },
                  }}
                />
              </Box>

              {/* Arrow - Only show on desktop */}
              {index !== ecosystemItems.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    position: "absolute",
                    top: "35px",
                    left: "75%",
                    width: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 12,
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      borderTop: "2px dashed #D9D9D9",
                    }}
                  />
                  <ArrowForwardOutlined
                    sx={{
                      fontSize: 16,
                      color: "#D9D9D9",
                      ml: -0.4,
                    }}
                  />
                </Box>
              )}

              {/* Title */}
              <Typography
                sx={{
                  mt: {
                    xs: 2,
                    sm: 2.5,
                  },
                  fontWeight: 700,
                  color: "#111827",
                  fontSize: {
                    xs: 15,
                    sm: 16,
                    md: 18,
                  },
                }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  mt: {
                    xs: 0.5,
                    sm: 1,
                  },
                  px: {
                    xs: 0.5,
                    sm: 1,
                  },
                  color: "#343434",
                  fontSize: {
                    xs: 12,
                    sm: 13,
                    md: 14,
                  },
                  lineHeight: 1.6,
                  maxWidth: {
                    xs: "100%",
                    sm: "100%",
                    md: "160px",
                  },
                  mx: "auto",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: {
              xs: 4,
              sm: 6,
              md: 10,
            },
          }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardOutlined />}
            sx={{
              bgcolor: "#059669",
              px: {
                xs: 3,
                sm: 3.5,
                md: 4.5,
              },
              py: {
                xs: 1.5,
                sm: 1.6,
                md: 1.8,
              },
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: {
                xs: 14,
                sm: 15,
                md: 16,
              },
              textTransform: "none",
              boxShadow: "none",
              width: {
                xs: "100%",
                sm: "auto",
              },
              maxWidth: {
                xs: "280px",
                sm: "none",
              },
              "&:hover": {
                bgcolor: "#047857",
                boxShadow: "none",
              },
            }}
          >
            Explore Ecosystem
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Exploreecosys;