import { Plus, X } from "@phosphor-icons/react";
import { Container } from "./style";

export function ButtonInput({title,isNew,onclick,...rest}){
   
    return(
        <Container  className={isNew? "add" : "close"}>
            <input type="text" value={title} {...rest} placeholder={isNew? "Adicionar" : ""} readOnly={isNew? false : true} />
            <button type="button" onClick={onclick}>
                {isNew ? <Plus/> :  <X/> }
               
            </button>
        </Container>
    )
}