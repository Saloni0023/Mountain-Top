import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Rating,
  Stack,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GoogleIcon from "@mui/icons-material/Google";
import logo2 from "../assets/images/logo2.png";
import google2 from "../assets/images/google2.png";
import google3 from "../assets/images/google3.png";
import google4 from "../assets/images/google4.svg";

// Example review data; swap avatars for your own (jpg, png, or initials)
const reviews = [
  {
    name: "Dj.other 123",
    date: "Feb 29, 2024",
    rating: 5,
    content:
      "The team is very responsive and they do a great job with washing & folding laundry. Highly recommended if you are in the cabin cleaning or hotel game.",
    avatar: null, // Will use a colored circle with initials
  },
  {
    name: "Nicholas Gallucci",
    date: "Feb 29, 2024",
    rating: 5,
    content:
      "Great staff and clean facility. I got everything back neatly folded on time. The management was super friendly.",
    avatar: null,
  },
  {
    name: "Taz Ahsan",
    date: "Feb 27, 2024",
    rating: 5,
    content:
      "Awesome facility, friendly employees who you can tell put a lot of care into their work. Most importantly it's CLEAN! Really glad I found this place.",
    avatar: null,
  },
];

// Badge/avatar helper
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const GoogleReviews = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        my: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      {/* SECTION HEADING */}
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
          GOOGLE REVIEWS
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
        Real Reviews,{" "}
        <Box component="span" sx={{ color: "#f9632d" }}>
          Real Satisfaction
        </Box>
        — See What Our Clients Say
      </Typography>

      <Grid container spacing={4} alignItems="stretch" justifyContent="center">
        {/* LEFT: RATING BADGE */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              p: 2,
              textAlign: "left",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            {/* Logo on the left */}
            <img
              src={logo2}
              alt="Mountain Top Logo"
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: 18,
              }}
            />

            {/* Vertical stack for text, rating, and stars */}
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#000000",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: { xs: "16px", md: "18px" },
                  mb: 0.5,
                }}
              >
                Mountain Top
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "14px", md: "16px" },
                    mb: 0.5,
                  }}
                >
                  4.9
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0.2}
                  sx={{ mb: 1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFC72A", fontSize: 18 }} />
                  ))}
                </Stack>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#888",
                  mb: 1,
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Based on 32 reviews
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#888",
                    fontWeight: 500,
                    fontSize: 15,
                    mr: 1,
                  }}
                >
                  powered by
                </Typography>
                <img
                  src={google2}
                  alt="Mountain Top Logo"
                  style={{
                    width: "55px",
                    maxWidth: "100%",
                  }}
                />
              </Box>

              <Box display="flex" alignItems="center">
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    bgcolor: "#3C2517",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "12px", md: "14px" },
                    borderRadius: 5,
                    color: "#fff",
                    px: 2.5,
                    py: 1.3,
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    "&:hover": {
                      bgcolor: "#2E1A11",
                    },
                  }}
                >
                  Review us on
                  <img
                    src={google3}
                    alt="Google Logo"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* REVIEWS */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {reviews.map((review, idx) => (
              <Grid key={idx} item xs={12} md={4}>
                <Paper
                  sx={{
                    height: "80%",
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <Box display="flex" alignItems="flex-start" mb={2}>
                    <Avatar
                      sx={{
                        bgcolor: "#f9672b",
                        mr: 2,
                        width: 48,
                        height: 48,
                        fontWeight: "bold",
                      }}
                    >
                      {review.img ? (
                        <img
                          alt={review.name}
                          src={review.img}
                          width={48}
                          height={48}
                        />
                      ) : (
                        getInitials(review.name)
                      )}
                    </Avatar>
                    <Box flex="1">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: {xs: "14px", md: "16px"},
                          fontWeight: 400,
                        }}>
                          {review.name}
                        </Typography>
                        <img
                          src={google4}
                          alt="Google"
                          style={{
                            width: "auto",
                            marginLeft: 4,
                            display: "block",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        color="#767676"
                        sx={{ mt: 0.5 }}
                      >
                        {review.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Rating
                      value={review.rating}
                      precision={0.5}
                      readOnly
                      sx={{ color: "#FFC72A" }}
                      icon={<StarIcon fontSize="5px" />}
                      emptyIcon={
                        <StarIcon fontSize="5px" sx={{ color: "#eee" }} />
                      }
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="#333"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: { xs: "12px", md: "14px" },
                    }}
                  >
                    {review.content}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default GoogleReviews;
