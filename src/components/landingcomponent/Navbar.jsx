import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import logo from "../../assets/logo.svg";

const navItems = [
  { title: "Home" },
  { title: "Solutions", dropdown: true },
  { title: "For Patients", dropdown: true },
  { title: "For Providers", dropdown: true },
  { title: "Pricing" },
  { title: "Resources" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #ECECEC",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: { xs: "72px", sm: "78px", md: "84px" },
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Mediconnect"
              sx={{
                width: {
                  xs: 130,
                  sm: 150,
                  md: 170,
                  lg: 190,
                },
                cursor: "pointer",
              }}
            />

            {/* Desktop & Tablet Navigation */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  lg: "flex",
                },
                alignItems: "center",
                gap: { md: 2, lg: 4.5 },
              }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover .menuText": {
                      color: "#0F8B73",
                    },
                  }}
                >
                  <Typography
                    className="menuText"
                    sx={{
                      fontSize: { md: "13px", lg: "15px" },
                      fontWeight: 500,
                      color: "#1F2937",
                      transition: ".3s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {item.dropdown && (
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: { md: 16, lg: 18 },
                        ml: 0.3,
                        color: "#6B7280",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* Desktop & Tablet Buttons */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                alignItems: "center",
                gap: { sm: 1, md: 2 },
              }}
            >
              <Button
                startIcon={<PersonOutlineOutlinedIcon />}
                sx={{
                  minWidth: { sm: 90, md: 110, lg: 120 },
                  height: { sm: 40, md: 44, lg: 46 },
                  borderRadius: "12px",
                  textTransform: "none",
                  bgcolor: "#F3F8F7",
                  color: "#0F8B73",
                  fontSize: { sm: "13px", md: "14px", lg: "16px" },
                  fontWeight: 500,
                  boxShadow: "none",
                  px: { sm: 1.5, md: 2 },
                  "&:hover": {
                    bgcolor: "#EDF5F4",
                    boxShadow: "none",
                  },
                  "& .MuiButton-startIcon": {
                    mr: { sm: 0.5, md: 1 },
                  },
                }}
              >
                Sign up
              </Button>

              <Button
                variant="contained"
                startIcon={<PersonOutlineOutlinedIcon />}
                sx={{
                  minWidth: { sm: 80, md: 90, lg: 100 },
                  height: { sm: 40, md: 44, lg: 46 },
                  borderRadius: "12px",
                  textTransform: "none",
                  bgcolor: "#0F8B73",
                  fontSize: { sm: "13px", md: "14px", lg: "16px" },
                  fontWeight: 500,
                  boxShadow: "none",
                  px: { sm: 1.5, md: 2 },
                  "&:hover": {
                    bgcolor: "#0C7762",
                    boxShadow: "none",
                  },
                  "& .MuiButton-startIcon": {
                    mr: { sm: 0.5, md: 1 },
                  },
                }}
              >
                Login
              </Button>
            </Box>

            {/* Mobile & Small Tablet Menu Icon */}
            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                },
              }}
            >
              <IconButton
                onClick={() => setOpen(true)}
                sx={{
                  p: { xs: 1, sm: 1.5 },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: { xs: 280, sm: 320 },
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: 18, sm: 20 },
              }}
            >
              Menu
            </Typography>

            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          <List sx={{ mt: 1 }}>
            {navItems.map((item) => (
              <ListItemButton key={item.title}>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: { xs: 14, sm: 15 },
                    fontWeight: 500,
                  }}
                />

                {item.dropdown && (
                  <KeyboardArrowDownIcon />
                )}
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Button
            fullWidth
            startIcon={<PersonOutlineOutlinedIcon />}
            sx={{
              mb: 2,
              height: { xs: 44, sm: 48 },
              borderRadius: "12px",
              bgcolor: "#F3F8F7",
              color: "#0F8B73",
              textTransform: "none",
              fontSize: { xs: "14px", sm: "15px" },
              "&:hover": {
                bgcolor: "#EDF5F4",
              },
            }}
          >
            Sign up
          </Button>

          <Button
            fullWidth
            variant="contained"
            startIcon={<PersonOutlineOutlinedIcon />}
            sx={{
              height: { xs: 44, sm: 48 },
              borderRadius: "12px",
              bgcolor: "#0F8B73",
              textTransform: "none",
              fontSize: { xs: "14px", sm: "15px" },
              "&:hover": {
                bgcolor: "#0C7762",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;