import React from "react";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import HeroImg from "../assets/images/HeroImg.png";
import Google from "../assets/images/google.png";
import Yelp from "../assets/images/yelp.png";
import Facebook from "../assets/images/facebook.png";
import CallUs from "../assets/images/CallUs.svg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        px: { xs: 2, md: 4 },
        py: 4,
        textAlign: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          zIndex: 2,
          maxWidth: "850px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Rubik, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "42px" },
            lineHeight: 1.3,
          }}
        >
          Expert Cleaning & Commercial Laundry Services in Sevier County
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 600,
            mt: 2,
          }}
        >
          TN Serving Gatlinburg, Sevierville & Pigeon Forge
        </Typography>

        <Box
          sx={{
            width: "60%",
            height: "2px",
            backgroundColor: "#109C3D",
            my: 2,
          }}
        />

        <Typography
          variant="body1"
          sx={{
            color: "#FFFFFF",
            mb: 4,
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 200,
          }}
        >
          Professional home, cabin, and vacation rental cleaning — plus fresh,
          reliable laundry services for local businesses and commercial clients
          across the Smoky Mountains.
        </Typography>

        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#063A41",
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
          <Grid item>
            <Stack direction="row" spacing={2} alignItems="center">
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
                    color: "#fff",
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
          </Grid>
        </Grid>

        <Stack direction="row" spacing={3} mt={12} justifyContent="center">
          <img src={Google} alt="Google Reviews" height={60} />
          <img src={Yelp} alt="Yelp Reviews" height={60} />
          <img src={Facebook} alt="Facebook Reviews" height={60} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
