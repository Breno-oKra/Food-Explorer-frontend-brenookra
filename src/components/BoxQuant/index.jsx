import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./style";

export function BoxQuant(){
    return(
        <Container>
        <button><Minus size={32} color="#ede8e8" /></button>
        <input type="number" value={1} />
        <button><Plus size={32} color="#ede8e8" /></button>
        </Container>
    )
}