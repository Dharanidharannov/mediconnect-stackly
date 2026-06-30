import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Everythingneed() {
  return (
    <Box
      sx={{
        py: {
          xs: 6,
          sm: 8,
          md: 10,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 3,
            sm: 5,
            md: 8,
            lg: 10,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          {/* Subtitle */}
          <Typography
            sx={{
              color: "#0D8B72",
              textTransform: "uppercase",
              fontWeight: 500,
              letterSpacing: "1px",
              fontSize: {
                xs: "12px",
                sm: "13px",
                md: "16px",
              },
              mb: {
                xs: 2,
                md: 3,
              },
            }}
          >
            EVERYTHING YOU NEED FOR BETTER HEALTH CARE
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              width: {
                xs: "100%",
                sm: "90%",
                md: "820px",
                lg: "1070px",
              },
              fontFamily: "Poppins",
              fontWeight: 600,
              color: "#17201D",

              fontSize: {
                xs: "30px",
                sm: "38px",
                md: "48px",
                lg: "50px",
              },

              lineHeight: {
                xs: "40px",
                sm: "50px",
                md: "60px",
                lg: "60px",
              },

              letterSpacing: 0,
            }}
          >
            Access care, diagnostics,
            medicines, records,
            insurance, and AI-powered
            health services from a{" "}
            <Box
              component="span"
              sx={{
                color: "#0D8B72",
              }}
            >
              single platform.
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Everythingneed;