import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <Box
      sx={{
        marginTop: "auto",
        width: "100%",
        backgroundColor: "#002D62",
        padding: "10px",
      }}
    >
      <Typography
        noWrap
        component="a"
        href="/"
        color="white"
        sx={{
          display: "flex",
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
        }}
      >
        TMDB
      </Typography>
    </Box>
  );
}

export default Footer;
