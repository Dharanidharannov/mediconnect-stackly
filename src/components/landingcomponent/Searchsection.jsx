import React from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
  Chip,
  Paper,
  InputAdornment,
} from "@mui/material";

import {
  Search as SearchIcon,
  LocationOnOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";

function Searchsection() {
  const popularSearches = [
    "Dermatologist",
    "Gynecologist",
    "Paediatrician",
    "Orthopaedic",
    "Dentist",
  ];

 return (
  <Box
    sx={{
      py: {
        xs: 2,
        sm: 3,
        md: 4,
      },
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
        },
      }}
    >
      {/* Search Box */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB",
          borderRadius: {
            xs: "16px",
            md: "22px",
          },
          p: {
            xs: 2,
            md: 2,
          },
        }}
      >
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={2}
        >
          {/* Location */}

          <Button
            variant="outlined"
            startIcon={<LocationOnOutlined />}
            endIcon={<KeyboardArrowDown />}
            fullWidth
            sx={{
              width: {
                md: 260,
              },
              height: 56,
              borderRadius: "14px",
              justifyContent: "space-between",
              borderColor: "#E5E7EB",
              color: "#374151",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Select Location
          </Button>

          {/* Search */}

          <TextField
            fullWidth
            placeholder="Search Doctors, Specialities, Clinics and Hospitals..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#9CA3AF" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: 1,

              "& .MuiOutlinedInput-root": {
                height: 56,
                borderRadius: "14px",
              },
            }}
          />

          {/* Button */}

          <Button
            variant="contained"
            fullWidth
            sx={{
              width: {
                md: 120,
              },
              height: 56,
              bgcolor: "#0D8B72",
              borderRadius: "14px",
              textTransform: "none",
              fontWeight: 600,

              "&:hover": {
                bgcolor: "#0A6E5B",
              },
            }}
          >
            Search
          </Button>
        </Stack>
      </Paper>

      {/* Popular Searches */}

      <Stack
        spacing={2}
        sx={{
          mt: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Popular Searches:
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            overflowX: "auto",
            pb: 1,

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
          }}
        >
          {popularSearches.map((item) => (
            <Chip
              key={item}
              label={item}
              clickable
              sx={{
                flexShrink: 0,
                bgcolor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "999px",
                px: 1,
                fontWeight: 500,

                "&:hover": {
                  bgcolor: "#F3FAF8",
                  borderColor: "#0D8B72",
                  color: "#0D8B72",
                },
              }}
            />
          ))}
        </Box>
      </Stack>
    </Container>
  </Box>
);
}

export default Searchsection;