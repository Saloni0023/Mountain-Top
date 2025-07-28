import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LivingRoomImg from "../assets/images/HeroImg.png";
import CallUs2 from "../assets/images/CallUs-2.png";


// This is features sectiongit status

const FeatureSection = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, bgcolor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          {/* Top Line */}
          <Typography
            variant="caption"
            sx={{
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
              borderBottom: "2px solid #2C3E50",
              pb: 0.5,
              fontSize: "16px",
              display: "inline-block",
              color: "#000",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Mountain Top Cleaning and Maintenance
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", md: "36px" },
              mt: 2,
              fontFamily: "Rubik, sans-serif",
              lineHeight: 1.3,
            }}
          >
            Your{" "}
            <Box component="span" sx={{ color: "#2C3E50" }}>
              Experts
            </Box>{" "}
            in Cabin Cleaning & Commercial Laundry
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 2,
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#000000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
            }}
          >
            Mountain Top Cleaning offers expert cleaning and commercial laundry
            services for homes, cabins, and rentals across Sevier County,
            including Gatlinburg, Sevierville, and Pigeon Forge. We deliver
            spotless results with attention to detail, keeping your property
            fresh, clean, and guest-ready.
          </Typography>

          {/* Feature Columns */}
          <Grid container spacing={3}>
            {[...Array(2)].map((_, col) => (
              <Grid item xs={6} key={col}>
                <List dense>
                  {[...Array(4)].map((_, i) => (
                    <ListItem key={i}>
                      <KeyboardDoubleArrowRightIcon
                        sx={{ width: "2rem", color: "#2C3E50" }}
                      />

                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#16A085",
                              fontWeight: 600,
                              fontSize: "16px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            Lorem ipsum dolor sit
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>

          {/* Call Us */}
          <Stack direction="row" alignItems="center" spacing={2} mt={3}>
            {/* Circular Icon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={CallUs2} alt="Call Icon" />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#16A085",
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                }}
              >
                Call Us Now!
              </Typography>
              <Typography
                sx={{
                  color: "#1c1c1c",
                  fontWeight: 700,
                  fontSize: "24px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                +1 865 328 2433
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={LivingRoomImg}
            alt="Living Room"
            sx={{
              width: "100%",
              height: "80vh",
              borderRadius: "12px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;
