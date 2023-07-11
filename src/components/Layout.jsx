import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />

        {children}

        <Footer />
      </Box>
    </>
  );
}

export default Layout;
