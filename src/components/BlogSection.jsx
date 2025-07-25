import React from "react";
import { Box, Grid, Typography, Paper, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// blog images (replace with your real images or imports)
import blog1 from "../assets/images/Blog-1.png";
import blog2 from "../assets/images/Blog-2.png";
import blog3 from "../assets/images/Blog-3.png";

const blogPosts = [
  {
    img: blog1,
    date: "April 26, 2025",
    title: "A Fresh Approach for a Sustainable Future",
    link: "#",
  },
  {
    img: blog2,
    date: "April 28, 2025",
    title: "Professional Cleaning for Busy Lives",
    link: "#",
  },
  {
    img: blog3,
    date: "April 30, 2025",
    title: "Beyond the Surface Shine",
    link: "#",
  },
];
const BlogSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        py: { xs: 6, md: 8 },
        px: 2,
        bgcolor: "#fff",
      }}
    >
      {/* BLOG TITLE */}
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
            background: "#ED5D2B",
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
            fontSize: { xs: "12px", md: "14px" },
            letterSpacing: 1,
            whiteSpace: "nowrap",
          }}
        >
          BLOG
        </Typography>
        {/* Right line */}
        <Box
          sx={{
            height: 2,
            background: "#ED5D2B",
            flex: 1,
            maxWidth: 80,
            ml: 2,
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: 26, md: 32 },
          textAlign: "center",
          fontWeight: 800,
          fontFamily: "Poppins, sans-serif",
          letterSpacing: 0.5,
          mb: 4.3,
        }}
      >
        The Mountain Top{" "}
        <Box
          component="span"
          sx={{
            color: "#ff6333",
            fontWeight: 800,
            display: "inline",
          }}
        >
          Cleaning and Maintenance
        </Box>{" "}
        <Box
          component="span"
          sx={{
            color: "#161617",
            fontWeight: 800,
            display: "inline",
          }}
        >
          Blog
        </Box>
      </Typography>

      {/* BLOG CARDS GRID */}
      <Grid container spacing={4} justifyContent="center">
        {blogPosts.map((post, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: "0 2px 18px 0 rgba(60,37,23,0.10)",
                border: "1.7px solid #f3c7bc",
                overflow: "hidden",
                pb: 2.3,
                bgcolor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                component="img"
                src={post.img}
                alt={post.title}
                sx={{
                  width: "100%",
                  height: 186,
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <Box sx={{ px: 2 }}>
                <Typography
                  sx={{
                    color: "#7f797b",
                    fontSize: 14.8,
                    fontFamily: "Poppins, sans-serif",
                    mb: 1.1,
                  }}
                >
                  {post.date}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    color: "#161617",
                    fontSize: 19,
                    mb: 1.2,
                    lineHeight: 1.23,
                  }}
                >
                  {post.title}
                </Typography>
                <Button
                  endIcon={
                    <ArrowForwardIcon sx={{ fontSize: 18, ml: "2px" }} />
                  }
                  sx={{
                    color: "#3C2517",
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 15,
                    textTransform: "none",
                    pl: 0,
                    "&:hover": {
                      color: "#FF6333",
                      bgcolor: "transparent",
                    },
                  }}
                  disableRipple
                  href={post.link}
                >
                  Read More
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
