import { Container } from "./style";

export function Button({title,icon:Icon,color,...rest}){

    return(
        <Container colors={color} {...rest} >
            {
                Icon &&  <Icon size={32} />
            }
           
             <p>{title}</p>
        </Container>
    )
}