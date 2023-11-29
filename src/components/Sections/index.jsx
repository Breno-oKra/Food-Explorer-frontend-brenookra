import { Container, Box } from "./style";
import foodSvg from "../../assets/food.svg"
import { Button } from "../Button";
import { Minus,Plus,CaretLeft,CaretRight,PencilSimple } from "@phosphor-icons/react";
import { BoxQuant } from "../BoxQuant";
export function Section() {
  return (
    <Container>
      <h3>Refeição</h3>
      <div>
        <button><CaretLeft/></button>
        <div>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <button className="icon-flut"><PencilSimple  /></button>
            <div>
                <BoxQuant/>
                <Button title="Incluir"/>
            </div>
          </Box>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <div>
                <BoxQuant>
                    <button><Minus size={32} color="#ede8e8" /></button>
                    <input type="number" value={1} />
                    <button><Plus size={32} color="#ede8e8" /></button>
                </BoxQuant>
                <Button title="Incluir"/>
            </div>
          </Box>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <div>
                <BoxQuant>
                    <button><Minus size={32} color="#ede8e8" /></button>
                    <input type="number" value={1} />
                    <button><Plus size={32} color="#ede8e8" /></button>
                </BoxQuant>
                <Button title="Incluir"/>
            </div>
          </Box>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <div>
                <BoxQuant>
                    <button><Minus size={32} color="#ede8e8" /></button>
                    <input type="number" value={1} />
                    <button><Plus size={32} color="#ede8e8" /></button>
                </BoxQuant>
                <Button title="Incluir"/>
            </div>
          </Box>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <div>
                <BoxQuant>
                    <button><Minus size={32} color="#ede8e8" /></button>
                    <input type="number" value={1} />
                    <button><Plus size={32} color="#ede8e8" /></button>
                </BoxQuant>
                <Button title="Incluir"/>
            </div>
          </Box>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <div>
                <BoxQuant>
                    <button><Minus size={32} color="#ede8e8" /></button>
                    <input type="number" value={1} />
                    <button><Plus size={32} color="#ede8e8" /></button>
                </BoxQuant>
                <Button title="Incluir"/>
            </div>
          </Box>
          <Box>
            <img src={foodSvg} alt="" />
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com camarões e pesto. </p>
            <strong>R$ 49,97</strong>
            <div>
                <BoxQuant>
                    <button><Minus size={32} color="#ede8e8" /></button>
                    <input type="number" value={1} />
                    <button><Plus size={32} color="#ede8e8" /></button>
                </BoxQuant>
                <Button title="Incluir"/>
            </div>
          </Box>
        </div>
        <button><CaretRight /></button>
      </div>
    </Container>
  );
}
