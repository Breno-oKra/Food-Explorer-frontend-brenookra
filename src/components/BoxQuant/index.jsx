import { Minus, Plus } from "@phosphor-icons/react";
import { Button, Container } from "./style";

import { useState } from "react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
export function BoxQuant({ valueText, food,isDetail }) {

  const [value, setValue] = useState(1);
    const {setCart,cart} = useAuth()
  async function AddFoodCart(foo) {
    try {
      await api
        .post(
          `/foods/cart`,
          { id: foo.id, quant: foo.quant,adm:foo["user_id"]},
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.cart) {
           
            const newCart = res.data.cart
            const carts = localStorage.getItem("@food:cart");
            const oldCart = JSON.parse(carts);
            setCart(!cart)
            if (carts) {       
              localStorage.setItem(
                "@food:cart",
                JSON.stringify([...oldCart, newCart])
              );
            }else {
                localStorage.setItem("@food:cart", JSON.stringify([newCart]));
            }
          } 
        });
    } catch (error) {
      alert(error.message);
    }
  }
  function add() {
    if (value >= 15) {
      setValue(15);
      return;
    }
    setValue(value + 1);
  }
  function remove() {
    if (value <= 2) {
      setValue(1);
      return;
    }
    setValue(value - 1);
  }
  return (
    <Container className={isDetail? "detailForm": ""}>
      <div>
        <button type="click" onClick={remove}>
          <Minus size={32} color="#ede8e8" />
        </button>
        <input type="number" value={value} readOnly />
        <button type="click" onClick={add}>
          <Plus size={32} color="#ede8e8" />
        </button>
      </div>
      <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          let foods = {
            ...food,
            quant: value,
          };
          AddFoodCart(foods);
        }}
      >
        {valueText ? `Incluir ∙ ${valueText}` : "Incluir"}
      </Button>
    </Container>
  );
}
