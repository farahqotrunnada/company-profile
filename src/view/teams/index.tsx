import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TeamSection from "../sections/teamSection";
import ThemeWrapper from "../components/themeWrapper";
import Header from "../components/header";
import Footer from "../components/footer";


export default function TeamView() {
  return (
    <ThemeWrapper>
        <Header/>
        <Container maxWidth="lg">
          <Box mt={4}>
            <Typography variant="h2" color="primary" gutterBottom>
              Our Teams
            </Typography>
            <TeamSection/>
            <Footer/>
          </Box>
        </Container>
    </ThemeWrapper>
  );
}