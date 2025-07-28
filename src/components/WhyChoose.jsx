import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import WhyChooseImg from "../assets/images/WhyChoose.png";

const perks = [
  {
    number: "01",
    title: "Trained Professionals",
    desc: "Lorem ipsum dolor sit amet consectetur. Volutpat ac tempus dolor lacus potenti.",
  },
  {
    number: "02",
    title: "Cabin Cleaning Pros",
    desc: "Lorem ipsum dolor sit amet consectetur. Volutpat ac tempus dolor lacus potenti.",
  },
  {
    number: "03",
    title: "Fast Turnaround",
    desc: "Lorem ipsum dolor sit amet consectetur. Volutpat ac tempus dolor lacus potenti.",
  },
  {
    number: "04",
    title: "Commercial Laundry Specialists",
    desc: "Lorem ipsum dolor sit amet consectetur. Volutpat ac tempus dolor lacus potenti.",
  },
  {
    number: "05",
    title: "Hassle-Free Scheduling",
    desc: "Lorem ipsum dolor sit amet consectetur. Volutpat ac tempus dolor lacus potenti.",
  },
  {
    number: "06",
    title: "Dedicated Support",
    desc: "Lorem ipsum dolor sit amet consectetur. Volutpat ac tempus dolor lacus potenti.",
  },
];

const WhyChoose = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
      >
        {/* Left line */}
        <Box
          sx={{
            height: 2,
            background: "#2C3E50",
            flex: 1,
            maxWidth: 80,
            mr: 2,
          }}
        />
        <Typography
          variant="overline"
          sx={{
            color: "#000",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            fontSize: {xs: "12px", md: "14px"},
            letterSpacing: 1,
            whiteSpace: "nowrap",
          }}
        >
          WHY CHOOSE US
        </Typography>
        {/* Right line */}
        <Box
          sx={{
            height: 2,
            background: "#2C3E50",
            flex: 1,
            maxWidth: 80,
            ml: 2,
          }}
        />
      </Box>

      <Typography
        align="center"
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
          fontFamily: "Poppins, sans-serif",
          maxWidth: 900,
          mx: "auto",
          mb: 4,
        }}
      >
        Why Choose{" "}
        <Box component="span" sx={{ color: "#2C3E50" }}>
          Mountain Top Cleaning and Maintenance?
        </Box>
      </Typography>

      {/* Main Content */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          {/* Left block: features 1-3 */}
          <Grid container direction="column" spacing={3}>
            {perks.slice(0, 3).map((perk) => (
              <Grid item key={perk.number}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    minHeight: 84,
                    border: "1.5px solid #2C3E50",
                    boxShadow: "0 2px 8px 0 rgba(249,99,45,0.1)",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <Box display="flex" alignItems="flex-start">
                    <Typography
                      component="span"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: "bold",
                        fontFamily: "Rubik, sans-serif",
                        fontSize: { xs: "28px", md: "36px" },
                        mr: 4,
                        minWidth: 35,
                      }}
                    >
                      {perk.number}
                    </Typography>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          fontFamily: "Rubik, sans-serif",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {perk.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        {perk.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Middle Image */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: 220, sm: 280, md: 315 },
            }}
          >
            <img
              src={WhyChooseImg}
              alt="Interior"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Grid>

        {/* Right block: features 4-6 */}
        <Grid item xs={12} md={4}>
          <Grid container direction="column" spacing={3}>
            {perks.slice(3).map((perk) => (
              <Grid item key={perk.number}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    minHeight: 84,
                    border: "1.5px solid #2C3E50",
                    boxShadow: "0 2px 8px 0 rgba(249,99,45,0.1)",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <Box display="flex" alignItems="flex-start">
                    <Typography
                      component="span"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: "bold",
                        fontFamily: "Rubik, sans-serif",
                        fontSize: { xs: "28px", md: "36px" },
                        mr: 4,
                        minWidth: 35,
                      }}
                    >
                      {perk.number}
                    </Typography>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          fontFamily: "Rubik, sans-serif",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {perk.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        {perk.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChoose;
