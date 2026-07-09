import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import FooterLogo from "../../assets/Logo.svg";

function Footer() {
  const platformLinks = [
    "Hospital Management",
    "Telemedicine",
    "Pharmacy System",
    "Lab Management",
    "Health Insurance",
    "Appointment and Scheduling",
    "Remote monitoring",
    "AI & Analytics",
  ];

  return (
    <Box
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 3,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "1380px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            rowGap: 5,
            columnGap: {
              xs: 4,
              md: 5,
            },
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: 280,
                md: 190,
              },
            }}
          >
            <Box
              component="img"
              src={FooterLogo}
              alt="Logo"
              sx={{
                width: 165,
                mb: 3,
              }}
            />

            <Typography
              sx={{
                color: "#667085",
                fontSize: 14,
                lineHeight: "20px",
                width:{
                    xs:"100%",
                    sm:"100%",
                    md:"105%"
                }
              }}
            >
              One Integrated platform for all your healthcare
              needs. Empowering hospitals, Doctors and patients
              with AI and Technology.
            </Typography>
          </Box>

          {/* Platform */}
          <Box
            sx={{
              minWidth: {
                xs: "100%",
                sm: 220,
                md: 190,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#101828",
                mb: 3,
              }}
            >
              Platform
            </Typography>

            {platformLinks.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#667085",
                  fontSize: 16,
                  lineHeight: "28px",
                  mb: 1.5,
                  cursor: "pointer",
                  transition: ".3s",
                  "&:hover": {
                    color: "#0F8B73",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Resources */}
          <Box
            sx={{
              minWidth: {
                xs: "100%",
                sm: "45%",
                md: 180,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#101828",
                mb: 3,
              }}
            >
              Resources
            </Typography>

            {[
              "Documentation",
              "API Reference",
              "Integration",
              "Case studies",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: 16,
                  color: "#667085",
                  mb: 2,
                  cursor: "pointer",
                  transition: ".3s",
                  "&:hover": {
                    color: "#096B58",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Company */}
          <Box
            sx={{
              minWidth: {
                xs: "100%",
                sm: "45%",
                md: 180,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#101828",
                mb: 3,
              }}
            >
              Company
            </Typography>

            {[
              "About Us",
              "Careers",
              "Press",
              "Partners",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: 16,
                  color: "#667085",
                  mb: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#096B58",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Newsletter */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: 320,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#101828",
                mb: 2,
              }}
            >
              Newsletter
            </Typography>

            <Typography
              sx={{
                color: "#667085",
                fontSize: 15,
                mb: 2.5,
              }}
            >
              Subscribe to get latest updates!
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 4,
              }}
            >
              <TextField
                fullWidth
                placeholder="Enter Your Email ID"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 48,
                    borderRadius: "8px 0 0 8px",
                    backgroundColor: "#FFFFFF",
                    "& fieldset": {
                      borderColor: "#D0D5DD",
                    },
                  },
                }}
              />

              <Button
                sx={{
                  minWidth: 56,
                  height: 48,
                  borderRadius: "0 8px 8px 0",
                  bgcolor: "#0F8B73",
                  "&:hover": {
                    bgcolor: "#0C7761",
                  },
                }}
              >
                <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
              </Button>
            </Box>

            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#101828",
                mb: 2,
              }}
            >
              Our Socials
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2.5,
              }}
            >
              <IconButton>
                <Icon icon="prime:twitter" width={24} color="#667085" />
              </IconButton>

              <IconButton>
                <Icon icon="mdi:youtube" width={24} color="#667085" />
              </IconButton>

              <IconButton>
                <Icon icon="mdi:facebook" width={24} color="#667085" />
              </IconButton>

              <IconButton>
                <Icon icon="mdi:linkedin" width={24} color="#667085" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            mt: {
              xs: 5,
              md: 7,
            },
            mb: 3,
            borderColor: "#EAECF0",
          }}
        />

        {/* Copyright */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#667085",
            fontSize: {
              xs: 13,
              sm: 14,
              md: 16,
            },
            lineHeight: "28px",
          }}
        >
          © 2026 Healthcare. All Rights Reserved. Privacy policy, Terms of
          Service, HIPAA Notice, Cookie Settings, Accessibility.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;