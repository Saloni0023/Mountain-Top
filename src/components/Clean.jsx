import React from "react";
import { Box, Typography, Button } from "@mui/material";
import clean from "../assets/images/clean.png";

const Clean = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${clean})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
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
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Clean Rentals. Happy Guests.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            color: "#FFFFFF",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 200,
          }}
        >
          Let us handle the mess so your guests always leave glowing reviews.
        </Typography>
        <Button
          variant="contained"
          color="warning"
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
        >
          Get a Vacation Rental Cleaning Quote
        </Button>
      </Box>
    </Box>
  );
};

export default Clean;
