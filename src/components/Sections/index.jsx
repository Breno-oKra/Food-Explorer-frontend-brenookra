import { Container, Box } from "./style";
import foodSvg from "../../assets/food.svg";
import { Button } from "../Button";
import {
  Minus,
  Plus,
  CaretLeft,
  CaretRight,
  PencilSimple,
} from "@phosphor-icons/react";
import { BoxQuant } from "../BoxQuant";
import { useAuth } from "../../hooks/auth";
export function Section({ title, data }) {
  const { user } = useAuth();
  console.log(user.role)
  return (
    <Container>
      <h3>{title}</h3>
      <div>
        <button>
          <CaretLeft />
        </button>
        <div>
          {data.map((item) => (
            <Box key={item.id} to={`/details/${item.id}`}>
              <img src={`http://localhost:3000/files/${item.image}`} alt="" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <strong>R$ {item.value}</strong>
              <button className="icon-flut">
                <PencilSimple />
              </button>
              <div>
                {user.role == "customer" && (
                  <>
                    <BoxQuant />
                    <Button title="Incluir" />
                  </>
                )}
              </div>
            </Box>
          ))}
        </div>
        <button>
          <CaretRight />
        </button>
      </div>
    </Container>
  );
}
