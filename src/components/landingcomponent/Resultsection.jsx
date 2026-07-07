import React from "react";
import { Icon } from "@iconify/react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function Resultsection() {
  const stats = [
    {
      icon: "hugeicons:ai-dna",
      iconBg: "#F8EEF5",
      iconColor: "#6B0953",
      number: "1M+",
      label: "Patients Supported",
    },
    {
      icon: "hugeicons:ai-dna",
      iconBg: "#EBF4FC",
      iconColor: "#093D6B",
      number: "50K+",
      label: "Appointments Completed",
    },
    {
      icon: "hugeicons:ai-dna",
      iconBg: "#F6F4FC",
      iconColor: "#22096B",
      number: "500+",
      label: "Healthcare Providers",
    },
    {
      icon: "hugeicons:ai-dna",
      iconBg: "#FEF2E9",
      iconColor: "#6B3309",
      number: "99.9%",
      label: "Platform Availability",
    },
  ];

  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 5,
        },
        bgcolor: "#fff",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* Header */}

        <Box
          sx={{
            mb: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <Typography
            sx={{
              color: "#096B58",
              fontSize: {
                xs: 12,
                md: 14,
              },
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Our Impact In Numbers
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#101828",
              fontSize: {
                xs: 34,
                sm: 42,
                md: 44,
              },
              lineHeight: "100%",
            }}
          >
            Healthcare you can trust,
            <br />

            backed by{" "}
            <Box
              component="span"
              sx={{
                color: "#096B58",
              }}
            >
              real results
            </Box>
          </Typography>
        </Box>

        {/* Cards */}

        <Grid
          container
          spacing={3}
        >
          {stats.map((stat, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
              key={index}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  border: "1px solid #EAECF0",
                  boxShadow:
                    "0px 4px 12px rgba(16,24,40,.04)",
                  height: "100%",
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow:
                      "0px 16px 36px rgba(16,24,40,.10)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",

                    "&:last-child": {
                      pb: 4,
                    },
                  }}
                >
                    
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: "16px",
                      bgcolor: stat.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 5,
                    }}
                  >
                    <Icon
                      icon={stat.icon}
                      width={32}
                      height={32}
                      color={stat.iconColor}
                    />
                  </Box>

                  {/* Number */}
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#101828",
                      fontSize: {
                        xs: 34,
                        sm: 38,
                        md: 44,
                      },
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>

                  {/* Label */}
                  <Typography
                    sx={{
                      color: "#475467",
                      fontSize: {
                        xs: 15,
                        sm: 16,
                        md: 17,
                      },
                      fontWeight: 400,
                      lineHeight: "26px",
                    }}
                  >
                    {stat.label}
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Resultsection;