import {
  Container,
  Image,
  InputCamp,
  ButtonOut,
  BoxCustomer,
  ButtonLink,
  ButtonMenu,
  ButtonReceipt,
  ModalMenu,
  BoxButtons,
} from "./style";
import BannerAdmin from "../../assets/logo-admin.svg";
import BannerCustomer from "../../assets/logo.svg";
import {
  List,
  MagnifyingGlass,
  Receipt,
  SignOut,
  X,
} from "@phosphor-icons/react";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../hooks/api";
export function Header({ controlData, setControlData }) {
  const { user, signOut, cart } = useAuth();
  const [cartQuant, setCartQuant] = useState(0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function SignOutBack() {
    navigate("/");
    signOut();
  }
  useEffect(() => {
    async function handlecart() {
      try {
        await api.get(`/foods/cart`, { withCredentials: true }).then((res) => {
          if (res.data.cart) {
            setCartQuant(res.data.cart.length);
            localStorage.setItem("@food:cart", JSON.stringify([res.data.cart]));
          }
        });
      } catch (error) {
        if (error.response.status == 401) {
          return;
        }
        alert("Não Foi Possivel Acessar o Carrinho");
      }
    }
    user.role == "customer" ? handlecart() : "";
  }, [cart]);

  function ButtonsLinks({ isMobile }) {
    return (
      <ButtonLink
        to="/historic"
        className={`${isMobile ? "isMobile" : "isDesktop"}`}
      >
        <p>Historico de pedidos</p>
      </ButtonLink>
    );
  }
  function FavoritesBox({ isMobile }) {
    return (
      <ButtonLink
        to="/favorites"
        className={`${isMobile ? "isMobile" : "isDesktop"}`}
      >
        <p>Meus Favoritos</p>
      </ButtonLink>
    );
  }
  return (
    <Container>
      <ButtonMenu
        className="btn-menu"
        onClick={() => {
          document.getElementById("modal").classList.toggle("open");
        }}
      >
        <List />
      </ButtonMenu>

      <Link to="/">
        {user.role == "admin" ? (
          <Image src={BannerAdmin} alt="" width={300} />
        ) : (
          <Image src={BannerCustomer} alt="" width={300} />
        )}
      </Link>

      <InputCamp className={"isDesktop"}>
        <button
          type="submit"
          onClick={() => {
            if (controlData != undefined) {
              setControlData(!controlData);
            }
            navigate(`/?title=${search}`);
          }}
        >
          {" "}
          <MagnifyingGlass size={24} color={theme.LIGHT_400} />
        </button>

        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Ex: Salada Ceasar"
        />
        <button
          onClick={() => {
            if (controlData != undefined) {
              setControlData(!controlData);
            }
            setSearch("");
            navigate("/");
          }}
          className="closeData"
        >
          <X />
        </button>
      </InputCamp>
      <ButtonsLinks isMobile={false} />
      {user.role == "admin" ? (
        <Button title="Novo Prato" to="/new" className="new isDesktop" />
      ) : (
        <BoxCustomer>
          <FavoritesBox />
          <Button
            title={`Pedidos (${cartQuant})`}
            icon={Receipt}
            to={`/requests/${user.id}`}
            className="isDesktop"
          />
          <ButtonReceipt className="isMobile" to={`/requests/${user.id}`}>
            <Receipt />

            <p>{cartQuant}</p>
          </ButtonReceipt>
        </BoxCustomer>
      )}

      <ButtonOut onClick={SignOutBack} className="isDesktop">
        <SignOut size={32} color={theme.LIGHT_400} />
      </ButtonOut>
      <ModalMenu id="modal" className="ModalMobile">
        <div>
          <button
            className="isNotVisible"
            onClick={() => {
              document.getElementById("modal").classList.toggle("open");
            }}
          >
            <X /> Menu
          </button>
        </div>
        <div>
          <InputCamp className={"isMobile"}>
            <button
              type="submit"
              onClick={() => {
                if (controlData != undefined) {
                  setControlData(!controlData);
                }
                navigate(`/?title=${search}`);
                document.getElementById("modal").classList.toggle("open");
              }}
            >
              {" "}
              <MagnifyingGlass size={24} color={theme.LIGHT_400} />
            </button>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ex: Salada Ceasar"
            />
            <button
              onClick={() => {
                if (controlData != undefined) {
                  setControlData(!controlData);
                }
                setSearch("");
                document.getElementById("modal").classList.toggle("open");
                navigate("/");
              }}
              className="closeData"
            >
              <X />
            </button>
          </InputCamp>
          <BoxButtons>
            {user.role == "admin" ? (
              <Button title="Novo Prato" to="/new" className="new isMobile" />
            ) : (
              <FavoritesBox isMobile />
            )}
            <ButtonsLinks isMobile />
          </BoxButtons>
          <button onClick={SignOutBack}> Sair</button>
        </div>
      </ModalMenu>
    </Container>
  );
}
