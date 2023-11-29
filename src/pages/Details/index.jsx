import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, BoxInfos,Infos,Box } from "./style";
import foodPra from "../../assets/food.svg";

import { CaretLeft } from "@phosphor-icons/react";
import { BoxQuant } from "../../components/BoxQuant";
export function Details() {
  return (
    <Container>
      <Header />
      <Box>
        <button><CaretLeft/> voltar</button>
        <BoxInfos>
          <img src={foodPra} alt="" />
          <div>
            <Infos>
              <h3>Salada Ravanello</h3>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim. O pão naan dá um toque especial.
              </p>
              <div>
                <span>alface</span>
                <span>cebola</span>
              </div>
            </Infos>
            <div>
                <BoxQuant/>
                <Button title="Editar Prato" />
            </div>
           
          </div>
        </BoxInfos>
      </Box>
      <Footer />
    </Container>
  );
}
