import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Icon } from "@iconify/react";

import AIHealthImage from "../../assets/aihealthinsight.svg";
import RecordsImage from "../../assets/medicalrecordschoose.svg";
import SecurityImage from "../../assets/securehealthchoose.svg";
import CareImage from "../../assets/continuouscarechoose.svg";
import { CheckCircleRounded } from "@mui/icons-material";

function Chooseus() {
  const features = [
    {
      image: AIHealthImage,
      icon: (
      <Icon
        icon="hugeicons:ai-dna"
        width={24}
        height={24}
        color="#096B58"
      />
    ),
    title: "AI Health Insights",
      description:
        "Receive personalized health recommendations and risk assessments.",
      points: [
        "Instant symptom analysis",
        "Health risk assessment",
        "Personalized recommendations",
      ],
    },
    {
      image: RecordsImage,
      icon: (
      <Icon
        icon="tabler:clipboard-text"
        width={24}
        height={24}
        color="#096B58"
      />
    ),
      title: "Connected Medical Records",
      description:
        "Access prescriptions, reports, and consultations from one place.",
      points: [
        "All records in one place",
        "Easy access anytime",
        "100% secure & private",
      ],
    },
    {
      image: SecurityImage,
      icon: (
      <Icon
        icon="tabler:ambulance"
        width={24}
        height={24}
        color="#096B58"
      />
    ),
      title: "Secure Healthcare Network",
      description:
        "Enterprise-grade security and privacy protection.",
      points: [
        "Instant symptom analysis",
        "Health risk assessment",
        "Personalized recommendations",
      ],
    },
    {
      image: CareImage,
      icon:(
      <Icon
        icon="tabler:user-heart"
        width={24}
        height={24}
        color="#096B58"
      />
    ),
      title: "Continuous Care",
      description:
        "From appointments to follow-ups and monitoring.",
      points: [
        "Health tips & articles",
        "Lifestyle recommendations",
        "Connect with experts"
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 5,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 5,
              sm: 6,
              md: 7,
              lg: 8,
            },
          }}
        >
          <Typography
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: {
                xs: 2,
                sm: 2.5,
              },
              py: {
                xs: 0.6,
                sm: 0.8,
              },
              borderRadius: "999px",
              color: "#096B58",
              fontSize: {
                xs: 10,
                sm: 11,
                md: 20,
              },
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
              mb: {
                xs: 2,
                sm: 2.5,
              },
            }}
          >
            WHY CHOOSE US?
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#101828",
              fontSize: {
                xs: 28,
                sm: 34,
                md: 42,
                lg: 52,
              },
              lineHeight: "100%",
              mb: {
                xs: 1.5,
                sm: 2,
              },
              px: {
                xs: 1,
                sm: 2,
              },
            }}
          >
            Healthcare Powered by Intelligence
          </Typography>
        </Box>

        {/* Cards Grid - Responsive columns */}
        <Grid
          container
          spacing={{
            xs: 2,
            sm: 2.5,
            md: 3,
          }}
          justifyContent="center"
        >
          {features.map((feature, index) => (
           <Grid
  size={{
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3,
  }}
  key={index}
>
              <Card
                elevation={0}
                sx={{
                  borderRadius: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                  },
                  border: "1px solid #E4E7EC",
                  boxShadow: "0px 8px 24px rgba(16,24,40,.06)",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: {
                      xs: "translateY(-3px)",
                      sm: "translateY(-4px)",
                      md: "translateY(-5px)",
                      lg: "translateY(-6px)",
                    },
                    boxShadow: "0px 18px 40px rgba(16,24,40,.12)",
                    borderColor: "#096B58",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: {
                      xs: 2.5,
                      sm: 3,
                      md: 3.5,
                    },
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    "&:last-child": {
                      pb: {
                        xs: 2.5,
                        sm: 3,
                        md: 3.5,
                      },
                    },
                  }}
                >
                  {/* Top Image */}
                  <Box
                    sx={{
                      height: {
                        xs: 160,
                        sm: 180,
                        md: 200,
                        lg: 220,
                      },
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      mb: {
                        xs: 2.5,
                        sm: 2.5,
                        md: 3,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                {/* Icon + Title */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: {
      xs: 1.5,
      sm: 2,
    },
  }}
>
  {/* Small Icon */}
  <Box
    sx={{
      width: {
        xs: 44,
        sm: 46,
        md: 48,
      },
      height: {
        xs: 44,
        sm: 46,
        md: 48,
      },
      borderRadius: "10px",
      bgcolor: "#EEF8F5",
      color: "#096B58",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      "& svg": {
        fontSize: {
          xs: 20,
          sm: 22,
          md: 24,
        },
      },
    }}
  >
    {feature.icon}
  </Box>

  {/* Title */}
  <Typography
    sx={{
      fontSize: {
        xs: 17,
        sm: 18,
        md: 20,
      },
      fontWeight: 700,
      color: "#101828",
      lineHeight: 1.3,
    }}
  >
    {feature.title}
  </Typography>
</Box>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: "#096B58",
                      fontSize: {
                        xs: 14,
                        sm: 15,
                        md: 16,
                      },
                      lineHeight: {
                        xs: "22px",
                        sm: "24px",
                        md: "26px",
                      },
                      mb: {
                        xs: 2.5,
                        sm: 2.5,
                        md: 3,
                      },
                      flexShrink: 0,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  {/* Feature List */}
                  <List
                    disablePadding
                    sx={{
                      mt: "auto",
                      flex: 1,
                    }}
                  >
                    {feature.points.map((point, idx) => (
                      <ListItem
                        key={idx}
                        disableGutters
                        sx={{
                          alignItems: "flex-start",
                          py: {
                            xs: 0.6,
                            sm: 0.7,
                            md: 0.8,
                          },
                          px: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: {
                              xs: 24,
                              sm: 26,
                              md: 28,
                            },
                            mt: "4px",
                          }}
                        >
                          <CheckCircleRounded
                            sx={{
                              color: "#66C6B9",
                              fontSize: {
                                xs: 16,
                                sm: 17,
                                md: 18,
                              },
                            }}
                          />
                        </ListItemIcon>

                        <ListItemText
                          primary={point}
                          primaryTypographyProps={{
                            sx: {
                              color: "#344054",
                              fontSize: {
                                xs: 13,
                                sm: 13.5,
                                md: 14,
                              },
                              lineHeight: {
                                xs: "20px",
                                sm: "21px",
                                md: "22px",
                              },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Chooseus;