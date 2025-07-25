import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// Import your images at the top
import seviervilleImg from "../assets/images/Area-We-Serve-1.png";
import gatlinburgImg from "../assets/images/Area-We-Serve-2.png";
import pigeonForgeImg from "../assets/images/Area-We-Serve-3.png";
import seymourImg from "../assets/images/Area-We-Serve-4.png";
import pittmanCenterImg from "../assets/images/Area-We-Serve-5.png";
import sevierCountyImg from "../assets/images/Area-We-Serve-6.png";

const areas = [
  { name: "Sevierville, TN", img: seviervilleImg },
  { name: "Gatlinburg, TN", img: gatlinburgImg },
  { name: "Pigeon Forge, TN", img: pigeonForgeImg },
  { name: "Seymour, TN", img: seymourImg },
  { name: "Pittman Center, TN", img: pittmanCenterImg },
  { name: "Sevier County, TN", img: sevierCountyImg },
];

const AreaWeServe = () => (
  <Box
    sx={{
      py: { xs: 5, md: 7 },
      px: 8,
      textAlign: "center",
   
    }}
  >
    {/* Header */}
    <Typography
      variant="h4"
      component="h2"
      sx={{
        fontWeight: 700,
        fontFamily: "Rubik, sans-serif",
      }}
    >
      Area We{' '}
      <Box component="span" sx={{ color: "#f9632d" }}>
        Serve
      </Box>
    </Typography>

    {/* Images Grid */}
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ mt: 1.5, mb: 2 }}
    >
      {areas.map(({ name, img }, i) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          key={name}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box>
            <Box
              sx={{
                mb: 1.3,
                mx: "auto",
              }}
            >
              <img
                src={img}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                textAlign: "center",
                fontSize: "1.03rem",
                color: "#161617",
              }}
            >
              {name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default AreaWeServe;
