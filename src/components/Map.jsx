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
          title="Mountain Top Sevierville House Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.343568903132!2d-83.51255098477967!3d35.85710808015416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598f16c6e00e2b%3A0x43753592a0ce4415!2s1837%20Newport%20Hwy%20%233%2C%20Sevierville%2C%20TN%2037876!5e0!3m2!1sen!2sus!4v1721770000000"
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
            Mountain Top Sevierville House
          </Typography>
          <Typography sx={{ fontSize: 15, color: "text.secondary", mb: 1 }}>
            24/7 emergency service
            <br />
            1837 Newport Hwy #3,
            <br />
            Sevierville, TN 37876
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
              <StarIcon sx={{ fontSize: 18, color: "#FFC72A99" }} />{" "}
              {/* Half star look */}
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: 15 }}>4.6</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14, ml: 0.8 }}>
              · 10 reviews
            </Typography>
          </Box>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              color: "#f9632d",
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
        bgcolor: "#3C2517",
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
              color: "#ED5D2B",
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
            +1 865 328 2433
          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ED5D2B",
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
