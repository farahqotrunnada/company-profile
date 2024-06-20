import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
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