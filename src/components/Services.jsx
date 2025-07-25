import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import services1 from "../assets/images/service1.png";
import services2 from "../assets/images/service2.png";
import services3 from "../assets/images/service3.png";

// Sample service data
const services = [
  {
    id: "01",
    title: "Regular Vacation Rental Cleaning",
    label: "CLEANING 01",
    image: services1,
  },
  {
    id: "02",
    title: "Deep Cleaning",
    label: "CLEANING 02",
    image: services2,
  },
  {
    id: "03",
    title: "Linens and Laundry",
    label: "CLEANING 03",
    image: services3,
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, textAlign: "center" }}>
      {/* Section Heading */}
      <Typography
        variant="caption"
        sx={{
          textTransform: "uppercase",
          color: "#000",
          letterSpacing: 1,
          fontWeight: 500,
          position: "relative",
          display: "inline-block",
          mb: 1,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Our Services
        <Divider
          sx={{
            width: 70,
            borderBottom: "2px solid #e4521b",
            mx: "auto",
            mb: 1,
          }}
        />
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
          fontFamily: "Poppins, sans-serif",
          maxWidth: 900,
          mx: "auto",
          mb: 4,
        }}
      >
        Trusted{" "}
        <Box component="span" sx={{ color: "#e4521b" }}>
          Cleaning & Laundry Services
        </Box>{" "}
        Across Sevier County, TN – Gatlinburg, Sevierville & Pigeon Forge
        Included
      </Typography>

      {/* Service Cards */}
      <Grid container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                height="200"
              />

              <CardContent>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "#7d7d7d",
                    mb: 0.5,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {service.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: "#004A27",
                    fontSize: "16px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Carousel Dots (static mockup) */}
      <Box mt={4} display="flex" justifyContent="center" gap={1}>
        <Box
          sx={{
            width: 10,
            height: 10,
            bgcolor: "#004A27",
            borderRadius: "50%",
          }}
        />
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              bgcolor: "#ccc",
              borderRadius: "50%",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
