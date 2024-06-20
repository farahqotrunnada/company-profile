import HomeSection from "./sections/homeSection";
import Footer from '@/view/components/footer';
import Header from '@/view/components/header';
import ProductSection from '@/view/sections/productSection';
import ThemeWrapper from '@/view/components/themeWrapper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import OverviewSection from "./sections/overviewSection";

export default function HomeView() {
  return (
    <ThemeWrapper>
      <Header/>
      <Container maxWidth="lg">
        
        <Box mt={4}>
          <HomeSection/>
          <OverviewSection/>
          <ProductSection />
        </Box>
        <Footer />
      </Container>
    </ThemeWrapper>
  );
}
