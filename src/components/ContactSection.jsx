import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const ContactSection = () => {
  return (
    <Box sx={{ bgcolor: "#2C3E50", py: 0, px: 0 }}>
      <Grid container alignItems="stretch">
        {/* Left Side - Call Box with Slant */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: "#16A085",
            color: "#fff",
            py: 2,
            px: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            clipPath: {
              xs: "none",
              md: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
            },
          }}
        >
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                fontSize: "24px",
                color: "#2C3E50",
                mb: 1,
                textAlign: "left",
              }}
            >
              Call Us Now!
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                fontSize: "42px",
                color: "#fff",
              }}
            >
             +1 555 987-6543
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            py: 4,
            px: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Rubik, sans-serif",
              fontSize: "24px",
              mb: 3,
              color: "#fff",
            }}
          >
            Cleaning & Commercial Laundry Services
          </Typography>

          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Name"
                size="small"
                required
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Email"
                size="small"
                required
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                minRows={5}
                label="Message"
                size="small"
                required
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FormControlLabel
                control={<Checkbox />}
                label="I'm not a robot"
                sx={{
                  backgroundColor: "#fff",
                  px: 1.5,
                  borderRadius: 1,
                  py: 0.5,
                  width: "100%",
                  mx: "auto",
                }}
              />
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Phone"
                size="small"
                required
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Zip"
                size="small"
                required
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#16A085",
                  fontWeight: "bold",
                  textTransform: "none",
                  py: 1.2,
                  borderRadius: 1,
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#00381f",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
