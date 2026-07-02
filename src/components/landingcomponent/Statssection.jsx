import React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import {
  LocalHospitalOutlined,
  ScienceOutlined,
  MedicationOutlined,
  FolderOpenOutlined,
  ShieldOutlined,
  MonitorHeartOutlined,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const statsData = [
  {
    icon: <LocalHospitalOutlined sx={{ fontSize: 26 }} />,
    title: "Doctor Consultation",
    description:
      "Book appointments with verified doctors across specialities.",
  },
  {
    icon: <ScienceOutlined sx={{ fontSize: 26 }} />,
    title: "Lab Tests",
    description:
      "Book lab tests at Home with certified laboratories.",
  },
  {
    icon: <MedicationOutlined sx={{ fontSize: 26 }} />,
    title: "Online Pharmacy",
    description:
      "Order medicines online and get them delivered to your doorstep.",
  },
  {
    icon: <FolderOpenOutlined sx={{ fontSize: 26 }} />,
    title: "Health Records",
    description:
      "Access prescriptions, reports and medical history securely.",
  },
  {
    icon: <ShieldOutlined sx={{ fontSize: 26 }} />,
    title: "Insurance Claims",
    description:
      "Verify coverage, file claims and track approvals.",
  },
  {
    icon: <MonitorHeartOutlined sx={{ fontSize: 26 }} />,
    title: "Remote Monitoring",
    description:
      "Track your vitals and stay connected with your care team.",
  },
];

function Statssection() {
  return (
    <Box
      sx={{
        py: {
          xs: 6,
          sm: 7,
          md: 6,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(6,1fr)",
            },
          }}
        >
          {statsData.map((item, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                position: "relative",
                border: "1px solid #ECECEC",
                borderRadius: "18px",
                background: "#FFFFFF",
                overflow: "hidden",

                minHeight: {
                  xs: 250,
                  sm: 255,
                  md: 260,
                  lg: 264,
                },

                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,.08)",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",

                  "&:last-child": {
                    pb: 4,
                  },
                }}
              >
                {/* Icon */}

                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    bgcolor: "#EEF8F5",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "#0D8B72",

                    mb: 3,
                  }}
                >
                  {item.icon}
                </Box>

                {/* Title */}

                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "30px",
                    color: "#17201D",

                    minHeight: 60,

                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Description */}

                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#667085",
                    lineHeight: "28px",

                    minHeight: 90,
                  }}
                >
                  {item.description}
                </Typography>

                                {/* Arrow Button */}
                <Box
                  sx={{
                    mt: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                    pt: 2,
                  }}
                >
                  <IconButton
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: "#F7F7F7",
                      color: "#4B5563",
                      border: "1px solid #F0F0F0",
                      transition: "all .3s ease",

                      "& svg": {
                        fontSize: 16,
                      },

                      "&:hover": {
                        bgcolor: "#0D8B72",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    <ArrowForwardIosRounded />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Statssection;