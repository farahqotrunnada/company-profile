import Footer from '@/view/components/footer';
import Header from '@/view/components/header';
import ThemeWrapper from '@/view/components/themeWrapper';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const HomeSection = dynamic(() => import('./sections/homeSection'), { ssr: false });
const OverviewSection = dynamic(() => import('./sections/overviewSection'), { ssr: false });
const ProductSection = dynamic(() => import('@/view/sections/productSection'), { ssr: false });

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
