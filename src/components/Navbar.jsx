import React from "react";
import { AppBar, Button, Stack, Toolbar, Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const navLinks = [
  "Home",
  "Services",
  "Commercial Laundry",
  "Service Areas",
  "About Us",
  "Blog",
  "Contact Us",
];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#e4521b",
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: 0,
          minHeight: "48px !important",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Centered Nav Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Stack direction="row" spacing={0} sx={{ height: "48px" }}>
            {navLinks.map((label, index) => (
              <Button
                key={index}
                disableRipple
                sx={{
                  color: "#fff",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  height: "100%",
                  borderRadius: 0,
                  px: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...(label === "Home" && {
                    background: "linear-gradient(to bottom, #994A29 0%, #004A27 100%)",
                  }),
                  "&:hover": {
                    background: "linear-gradient(to bottom, #994A29 0%, #004A27 100%)",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* CTA */}
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: "#004A27",
            color: "#FFFFFF",
            textTransform: "none",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            borderRadius: 0,
            px: 2,
            py: 1.2,
            minHeight: "48px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            mr: 0,
            "&:hover": {
              backgroundColor: "#00381f",
            },
          }}
        >
          Get Free Quote
          <ArrowOutwardIcon fontSize="small" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
