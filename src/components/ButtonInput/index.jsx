import { Plus, X } from "@phosphor-icons/react";
import { Container } from "./style";

export function ButtonInput({title,isNew}){
    return(
        <Container className={isNew? "add" : "close"}>
            <input type="text" value={title} placeholder={isNew? "Adicionar" : ""}  />
            <button>
                {isNew ? <Plus/> :  <X/> }
               
            </button>
        </Container>
    )
}