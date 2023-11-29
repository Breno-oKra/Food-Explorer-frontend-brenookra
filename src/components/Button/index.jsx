import { Container } from "./style";

export function Button({title,icon:Icon,color}){
    console.log(color)
    return(
        <Container colors={color}>
            {
                Icon &&  <Icon size={32} />
            }
           
             <p>{title}</p>
        </Container>
    )
}