import { Header } from "../../components/Header";
import {
  Container,
  Box,
  BoxOne,
  BoxTwo,
  TableBox,
  ButtonMobile,
  FormBox,
} from "./style";

import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { CreditCard, DiamondsFour, Receipt } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import QrCode from "../../assets/qrcode.svg";
import Clock from "../../assets/Clock.svg";
import CheckCircle from "../../assets/CheckCircle.svg";
import ForkKnife from "../../assets/ForkKnife.svg";
import InputMask from "react-input-mask";
export function Requests() {
  const { user, signOut } = useAuth();
  const [cart, setCart] = useState([]);
  const [control, setControl] = useState(false);
  const [TotalSum, setTotalSum] = useState(0);
  const [pay, setPay] = useState("pix");
  const [card, setCard] = useState();
  const [validate, setValidate] = useState();
  const [cvc, setCVC] = useState();
  const [status, setStatus] = useState("none");
  const [controlButton, setControlButton] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function dataLoad() {
      try {
        await api
          .get(`/foods/cart/${user.id}`, { withCredentials: true })
          .then(async (res) => {
            if (res.data.length < 1) {
              await api
                .get(`/historic/last`, { withCredentials: true })
                .then((resHist) => {
                  let data = resHist.data;
                  setStatus(data.status);

                  setCart(data.description);
                  Sum(data.description);
                });
            } else {
              setCart(res.data);
              Sum(res.data);
            }
          });
      } catch (error) {
        if (error.response.status == 401) {
          alert("Voce Foi Deslogado");
          signOut();
          navigate("/");
        }
      }
    }
    dataLoad();
  }, [control]);
  let statusImage = {
    pending: Clock,
    preparing: CheckCircle,
    delivered: ForkKnife,
  };
  async function handleDeletefoodcart(id) {
    try {
      await api.delete(`/foods/cart/${id}`, { withCredentials: true });
      setControl(!control);
    } catch (error) {
      alert(error.message);
    }
  }
  function Sum(data) {
    let Sume = 0;
    data.map((item) => {
      Sume = parseFloat(item.value.replace(",", ".")) * item.quant + Sume;
    });

    setTotalSum(Sume.toFixed(2));
  }
  function handlePay() {
    setControlButton(false);
    if (card && validate && cvc) {
      handleOrder();
      setControlButton(true);
    } else {
      alert("preencha todos os campos");
    }
  }
  async function handleOrder() {
    await api.post(
      "/historic",
      { user: user.id, cart },
      { withCredentials: true }
    );
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Box>
        <div>
          <BoxOne id="mobile-box1">
            <h2> {status == "none" ? "Meu Pedido" : "Seu Ultimo Pedido"}</h2>
            <div>
              <div>
                {cart &&
                  cart.map((item, index) => (
                    <div key={index}>
                      <img
                        src={`${api.defaults.baseURL}/files/${item.image}`}
                        alt=""
                      />
                      <div>
                        <strong>
                          {item.quant} x {item.name} <p>R$ {item.value}</p>
                        </strong>
                        {status == "none" ? (
                          <button
                            type="button"
                            onClick={() => handleDeletefoodcart(item.idCart)}
                          >
                            Excluir
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
              <p>Total: R$ {TotalSum}</p>
            </div>
            <ButtonMobile>
              <Button
                title="Avançar"
                onClick={() => {
                  document
                    .getElementById("mobile-box1")
                    .classList.toggle("hidden");
                  document
                    .getElementById("mobile-box2")
                    .classList.toggle("show");
                }}
              />
            </ButtonMobile>
          </BoxOne>
          <BoxTwo id="mobile-box2">
            <h2>Meu Pagamento</h2>
            <TableBox>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    if (status == "none") {
                      setPay("pix");
                    }
                  }}
                  className={pay == "pix" ? "active" : ""}
                >
                  <div>
                    <DiamondsFour /> Pix
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (status == "none") {
                      setPay("credit");
                    }
                  }}
                  className={pay == "credit" ? "active" : ""}
                >
                  <div>
                    <CreditCard /> Credito
                  </div>
                </button>
              </div>

              <FormBox>
                <div>
                  {status == "none" ? (
                    pay == "pix" ? (
                      <img src={QrCode} />
                    ) : (
                      <form action="">
                        <fieldset>
                          <legend htmlFor="">Numero do cartão</legend>
                          <InputMask
                            placeholder="000 000 000 000"
                            mask="999 999 999 999"
                            value={card}
                            onChange={(e) => setCard(e.target.value)}
                          ></InputMask>
                        </fieldset>
                        <div>
                          <fieldset>
                            <legend htmlFor="">validade</legend>
                            <InputMask
                              placeholder="00/00"
                              mask="99/99"
                              value={validate}
                              onChange={(e) => setValidate(e.target.value)}
                            ></InputMask>
                          </fieldset>
                          <fieldset>
                            <legend htmlFor="">CVC</legend>
                            <InputMask
                              placeholder="000"
                              mask="999"
                              value={cvc}
                              onChange={(e) => setCVC(e.target.value)}
                            ></InputMask>
                          </fieldset>
                        </div>
                        {controlButton ? (
                          <Button
                            title={"Finalizar pagamento"}
                            icon={Receipt}
                            onClick={handlePay}
                          />
                        ) : (
                          <Button title={"Aguarde..."} />
                        )}
                      </form>
                    )
                  ) : (
                    <img src={statusImage[status]} />
                  )}
                </div>
              </FormBox>
            </TableBox>
            <ButtonMobile>
              <Button
                title="Voltar"
                onClick={() => {
                  document
                    .getElementById("mobile-box1")
                    .classList.toggle("hidden");
                  document
                    .getElementById("mobile-box2")
                    .classList.toggle("show");
                }}
              />
            </ButtonMobile>
          </BoxTwo>
        </div>
      </Box>
      <Footer />
    </Container>
  );
}
