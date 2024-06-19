import { Box, Container, Typography } from "@mui/material";
import ThemeWrapper from "../components/themeWrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductSection from "../sections/productSection";


export default function TeamView() {
  return (
    <div>
      <ThemeWrapper>
      <Header/>
          <Container maxWidth="lg">
            <Box mt={4}>

              <Typography variant="h2" color="primary" gutterBottom>
                Services
              </Typography>
              <ProductSection/>
              <Footer/>
            </Box>
          </Container>
      </ThemeWrapper>
    </div>
  );
}