import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

import johnsmithImage from "../../assets/johnsmithreview.jpg"

const testimonials = [
  {
    name: "John Smith",
    role: "Business Analyst",
    title: "Fast & Reliable Lab Tests",
    quote:
      "I scheduled my lab test online and received reports quickly.",
    rating: 5,
    image: johnsmithImage,
  },
  {
    name: "Vikram Rao",
    role: "Accountant",
    title: "Consult Online",
    quote:
      "Convenient online consultations from home.",
    rating: 5,
   
  },
  {
    name: "Kavya",
    role: "Teacher",
    title: "Insurance Support",
    quote:
      "Smooth and hassle-free insurance support.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    title: "Hospital Care",
    quote:
      "Quick booking and quality care.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=15",
  },
];

function Patientreview() {
  return (
    <Box
      sx={{
        py: {
          xs: 6,
          md: 8,
        },
        px:{
        xs:2,
        sm:3,
        md:7,
        }
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "1500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            gap: {
              xs: 5,
              md: 6,
            },
          }}
        >
          {/* Left Section */}

          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "26%",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            <Typography
              sx={{
                color: "#096B58",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 1,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
             WHAT OUR PATIENTS SAY
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 34,
                  md: 36,
                },
                fontWeight: 600,
                lineHeight: 1.15,
                color: "#141414",
                mb: 2,
              }}
            >
              Trusted by Millions
            </Typography>

            <Typography
              sx={{
                color: "#666666",
                fontSize: 18,
                lineHeight: "30px",
                maxWidth: 300,
                mx: {
                  xs: "auto",
                  lg: 0,
                },
              }}
            >
              From booking to recovery, we make healthcare simple, accessible and personalized for you.
            </Typography>
          </Box>

          {/* Right Section */}

          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "74%",
              },
              display: "flex",
              gap: 2,
              overflowX: {
                xs: "auto",
                lg: "visible",
              },
              pb: 1,

              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
 <Card
  key={index}
  elevation={0}
  sx={{
    width: {
      xs: "100%",
      sm: 240,
      md: 208,
      lg: 208,
    },
    minWidth: {
      xs: "100%",
      sm: 240,
      md: 208,
      lg: 208,
    },
    height: 192,
    border: "1px solid #E4E7EC",
    borderRadius: "12px",
    bgcolor: "#FBFBFB",
    transition: ".3s",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 20px rgba(0,0,0,.06)",
    },
  }}
>
  <CardContent
    sx={{
      p: "16px",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      "&:last-child": {
        pb: "16px",
      },
    }}
  >
    {/* Rating */}

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 1,
      }}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <StarIcon
          key={item}
          sx={{
            color: "#FDB022",
            fontSize: 15,
            mr: 0.3,
          }}
        />
      ))}

      <Typography
        sx={{
          ml: 0.6,
          fontSize: 14,
          fontWeight: 500,
          color: "#344054",
        }}
      >
        5/5
      </Typography>
    </Box>

    {/* Title */}

    <Typography
      sx={{
        fontSize: 16,
        fontWeight: 500,
        color: "#101828",
        lineHeight: "22px",
        mb: 1,
      }}
    >
      {testimonial.title}
    </Typography>

    {/* Quote */}

   <Typography
  sx={{
    fontSize: 13,
    color: "#667085",
    lineHeight: "20px",
    height: 42,
    overflow: "hidden",
  }}
>
  “{testimonial.quote}”
</Typography>

    {/* User */}

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: "auto",
      }}
    >
      <Avatar
        src={testimonial.image}
        sx={{
          width: 28,
          height: 28,
        }}
      />

      <Box>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 500,
            color: "#101828",
            lineHeight: "18px",
          }}
        >
          {testimonial.name}
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#98A2B3",
            lineHeight: "16px",
          }}
        >
          {testimonial.role}
        </Typography>
      </Box>
    </Box>
  </CardContent>
</Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Patientreview;