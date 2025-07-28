import React from "react";
import { Box, Grid, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import logo from "../assets/images/logo.png";

const services = [
  "Regular Vacation Rental Cleaning",
  "Deep Cleaning",
  "Linens and Laundry",
  "Quality Control",
  "Customized Cleaning Plans",
];

const socialLinks = [
  { icon: <FacebookIcon />, label: "Facebook", url: "#" },
  { icon: <LinkedInIcon />, label: "LinkedIn", url: "#" },
  { icon: <InstagramIcon />, label: "Instagram", url: "#" },
  { icon: <YouTubeIcon />, label: "YouTube", url: "#" },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{ bgcolor: "#16A085", color: "#fff", pt: 5, position: "relative" }}
  >
    <Grid
      container
      spacing={3.5}
      sx={{ maxWidth: "1200px", mx: "auto", pb: 3, px: 2 }}
      alignItems="center"
    >
      {/* Logo & About */}
      <Grid item xs={12} md={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography
            sx={{
              fontFamily: "Rubik, sans-serif",
              fontSize: { xs: "24px", md: "36px" },
              color: "#ffff",
              fontWeight: 700,
            }}
          >
            Mountain Top
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#d6e7de",
            fontSize: 14.5,
            mb: 2,
            fontFamily: "Poppins,sans-serif",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. A eu tempor sed posuere lacus
          risus ipsum lectus ultricies Semper rhoncus eget dolor cum.
        </Typography>
        <Stack direction="row" spacing={1.7}>
          {socialLinks.map((item, i) => (
            <IconButton
              key={item.label}
              color="inherit"
              aria-label={item.label}
              href={item.url}
              sx={{
                bgcolor: "#fff",
                color: "#17563c",
                "&:hover": { bgcolor: "#f9632d", color: "#fff" },
                boxShadow: "0 2px 7px rgba(0,0,0,0.08)",
                p: 1.1,
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>
      </Grid>

      {/* Services */}
      <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "left" } }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.19rem",
            color: "#fff",
            letterSpacing: 1.5,
            mb: 1.6,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Services
        </Typography>
        <Box
          component="ul"
          sx={{ listStyle: "none", p: 0, m: 0, color: "#fff" }}
        >
          {services.map((service, i) => (
            <Box
              key={i}
              component="li"
              sx={{
                fontFamily: "Poppins,sans-serif",
                fontSize: 15,
                mb: 1.1,
                display: "flex",
                alignItems: "center",
                pl: 0,
                "&:before": {
                  content: '"»"',
                  color: "#2C3E50",
                  mr: 1.2,
                  fontWeight: 700,
                  fontSize: "1.12rem",
                },
              }}
            >
              {service}
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Contact */}
      <Grid item xs={12} md={4}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.19rem",
            color: "#fff",
            letterSpacing: 1.5,
            mb: 1.6,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Contact Us
        </Typography>
        <Stack
          spacing={1.5}
          sx={{ fontSize: 15, fontFamily: "Poppins,sans-serif" }}
        >
          <Box display="flex" alignItems="center">
            <PlaceIcon sx={{ color: "#2C3E50", mr: 1.2, fontSize: 23 }} />
            <span>
             123 Innovation Street,
              <br />
               Tech City, NY 10001, USA
            </span>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ color: "#2C3E50", mr: 1.2, fontSize: 20 }} />
            <span>+1 (555) 987-6543</span>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ color: "#2C3E50", mr: 1.2, fontSize: 20 }} />
            <span>info@example.com</span>
          </Box>
          <Box display="flex" alignItems="center">
            <AccessTimeIcon sx={{ color: "#2C3E50", mr: 1.2, fontSize: 20 }} />
            <span>Mon – Fri: 8:00am – 5:00pm</span>
          </Box>
        </Stack>
      </Grid>
    </Grid>
    {/* Orange Copyright Row */}
    <Box
      sx={{
        bgcolor: "#2C3E50",
        color: "#fff",
        fontWeight: 500,
        fontSize: 15,
        textAlign: "center",
        py: 1.45,
        letterSpacing: 0.4,
        fontFamily: "Poppins, sans-serif",
        mt: 3,
      }}
    >
      Copyright © 2025 Mountain Top Cleaning And Maintenance – All Rights
      Reserved.
    </Box>
  </Box>
);

export default Footer;
