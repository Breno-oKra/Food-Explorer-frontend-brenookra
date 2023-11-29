import { Header } from "../../components/Header";
import { Container, Box, BoxBanner } from "./style";
import Banner from "../../assets/banner1.png";
import { Section } from "../../components/Sections";
import { Footer } from "../../components/Footer";

function Home() {
  return (
    <Container>
      <Header />
      <Box>
        <BoxBanner>
          <img src={Banner} width={500} alt="" />
          <div>
            <strong>Sabores inigualáveis</strong>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </BoxBanner>
        <div>
          <Section></Section>
          <Section></Section>
        </div>
      </Box>
      <Footer/>
    </Container>
  );
}

export default Home;
