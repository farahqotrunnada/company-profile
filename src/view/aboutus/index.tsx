import { Container } from "@mui/material";
import ThemeWrapper from "../components/themeWrapper";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutUsSection from "../sections/aboutusSection";
import TeamSection from "../sections/teamSection";


export default function TeamView() {
  return (
    <div>
      <ThemeWrapper>
        <Header/>
          <Container maxWidth="lg">
              <AboutUsSection/>
              <TeamSection/>
              <Footer/>
          </Container>
      </ThemeWrapper>
    </div>
  );
}