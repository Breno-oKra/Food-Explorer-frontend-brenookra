import { Container } from "./style";
import logoFooter from "../../assets/footerLogo.svg"
export function Footer(){
    return(
        <Container>
            <img src={logoFooter}/>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}