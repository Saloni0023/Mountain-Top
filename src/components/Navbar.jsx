import React from "react";
import { AppBar, Button, Stack, Toolbar, Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Commercial Laundry", href: "#laundry" },
  { label: "Service Areas", href: "#areas" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#e4521b", boxShadow: "none" }}>
      <Toolbar
        disableGutters
        sx={{
          px: 2,
          minHeight: "48px !important",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Nav links */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Stack direction="row" spacing={0}>
            {navLinks.map(({ label, href }, index) => (
              <Button
                key={index}
                href={href}
                sx={{
                  color: "#fff",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  height: "48px",
                  px: 2,
                  borderRadius: 0,
                  "&:hover": {
                    background:
                      "linear-gradient(to bottom, #994A29 0%, #004A27 100%)",
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
