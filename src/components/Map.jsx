import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CallUs from "../assets/images/CallUs.svg";

const Map = () => (
  <Grid
    container
    spacing={0}
    sx={{
      borderRadius: 3,
      overflow: "hidden",
      boxShadow: "0 4px 30px 2px rgba(60,37,23,0.08)",
      my: 7,
      minHeight: { xs: 700, md: 380 },
    }}
  >
    {/* Map (Left) */}
    <Grid item xs={12} md={8} sx={{ position: "relative" }}>
      <Box sx={{ position: "relative", height: { xs: 320, md: 380 } }}>
        {/* Google Map iframe */}
        <iframe
          title="123 Innovation Street, Tech City"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.876425217567!2d-74.00594108459442!3d40.71277537933171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18c8e59d%3A0xf1f05b8c9d3c8f4d!2s123%20Innovation%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1721871000000"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Floating Info Card */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 20, md: 28 },
            left: { xs: 10, md: 28 },
            bgcolor: "#fff",
            borderRadius: 2,
            p: { xs: 1.8, md: 2.5 },
            minWidth: 230,
            maxWidth: 340,
            boxShadow: "0 4px 16px rgba(60,37,23,0.11)",
          }}
        >
          <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 17 }}>
            Innovation Tech Center
          </Typography>
          <Typography sx={{ fontSize: 15, color: "text.secondary", mb: 1 }}>
            24/7 support available
            <br />
            123 Innovation Street,
            <br />
            Tech City, NY 10001, USA
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box
              sx={{
                color: "#FFC72A",
                display: "flex",
                alignItems: "center",
                mr: 1,
              }}
            >
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: 18 }} />
              ))}
              <StarIcon sx={{ fontSize: 18, color: "#FFC72A99" }} />
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: 15 }}>4.9</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14, ml: 0.8 }}>
              · 98 reviews
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              color: "#2C3E50",
              fontWeight: 500,
              fontSize: 15,
              px: 0,
              py: 0.7,
              minWidth: 0,
            }}
          >
            View Large Map
          </Button>
        </Box>
      </Box>
    </Grid>

    {/* Contact & CTA (Right) */}
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        bgcolor: "#2C3E50",
        color: "#fff",
        pl: { xs: 2, md: 5 },
        pr: { xs: 2, md: 3 },
        py: { xs: 3, md: 0 },
        display: "flex",
        height: { xs: "auto", md: 380 },
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 18, md: 22 },
          mb: 2,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Have Questions? We're Here to Help – Request a Free Quote Today!
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        {/* Circular Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={CallUs} alt="Call Icon" />
        </Box>

        {/* Text */}
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: "#D1D8E0",
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
              fontSize: "20px",
            }}
          >
            Call Us Now!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#fff",
              textAlign: "left",
            }}
          >
            +1 (555) 987-6543
          </Typography>
        </Box>
      </Stack>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#16A085",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          textTransform: "uppercase",
          px: 3,
          py: 1.5,
          fontSize: "14px",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "#00371b",
          },
        }}
        endIcon={<ArrowOutwardIcon />}
      >
        Request a Free Quote
      </Button>
    </Grid>
  </Grid>
);

export default Map;
