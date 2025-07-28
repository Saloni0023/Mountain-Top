import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import logo from "../assets/images/logo.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%",  }}>
      <Grid
        container
        alignItems="center"
        spacing={2}
      >
        {/* Logo Section */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            backgroundColor: "#16A085",
            clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)",
            py: 2,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            height: "100%",
          }}
        >
          <Typography sx={{
            fontFamily: "Rubik, sans-serif",
            fontSize: {xs: "24px", md: "36px"},
            color: "#ffff",
            fontWeight: 700,
          }}>
            Mountain Top
          </Typography>
        </Grid>

        {/* Info Blocks */}
        <Grid
          item
          xs={12}
          md={9}
          container
          spacing={2}
          justifyContent={isMobile ? "center" : "space-between"}
        >
          <Grid item xs={12} sm={4}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Box
                sx={{
                  backgroundColor: "#e6eeec",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WatchLaterIcon
                  sx={{
                    width: 32,
                    height: 32,
                    color: "#3C2517",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#2C3E50",
                  }}
                >
                  Office Hours
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#16A085",
                  }}
                >
                  Mon – Fri: 8:00am – 5:00pm
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Box
                sx={{
                  backgroundColor: "#e6eeec",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon
                  sx={{
                    width: 32,
                    height: 32,
                    color: "#3C2517",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#2C3E50",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#16A085",
                  }}
                >
                  info@example.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Box
                sx={{
                  backgroundColor: "#e6eeec",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CallIcon
                  sx={{
                    width: 32,
                    height: 32,
                    color: "#3C2517",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#2C3E50",
                  }}
                >
                  Call Us Now!
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#16A085",
                  }}
                >
                 +1 555 987-6543
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
