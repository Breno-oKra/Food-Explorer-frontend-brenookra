import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  background-color: ${({ theme }) => theme.DARK_600};
  padding: 24px 123px;
  > a {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .isMobile {
    visibility: isVisible;
    display: none;
  }
  @media (max-width: 1100px) {
    padding: 24px 60px;
    gap: 20px;
    .btn-menu {
      display: block;
    }
    .btn-mobile-cart {
      display: block;
    }
    .isDesktop {
      display: none;
    }
    .isMobile {
      display: flex;

      visibility: visible;
    }
    @media (max-width: 800px) {
      padding: 24px 0px;
      justify-content: center;
      .search {
        display: none;
      }
    }
  }

  .open {
    display: block;
    visibility: visible;
  }
`;
export const ButtonReceipt = styled(Link)`
  margin: 10px;
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  > svg {
    font-size: 35px;
    color: ${({ theme }) => theme.LIGHT_200};
  }

  > p {
    width: 20px;
    height: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.TOMATO_100};

    border-radius: 100%;
    top: -5px;
    right: 0;
    font-size: 10px;
  }
`;
export const ButtonMenu = styled.button`
  display: none;
  padding: 12px 32px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: ${({ theme }) => theme.LIGHT_200};
  background: none;
`;
export const Image = styled.img`
  width: 197px;
  @media (max-width: 800px) {
    width: 170px;
  }
`;
export const ButtonLink = styled(Link)`
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{

    font-size: 14px;
  }
  @media (max-width:800px) {

    align-items: start;
    justify-content: start;
  }
`;
export const InputCamp = styled.div`
  width: 100%;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.DARK_900};

  > input {
    flex: 1;
    max-width: 344px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.LIGHT_500};
    z-index: 10;
  }
  > button {
    background: none;
    > svg {
      margin-right: 14px;
    }
  }
  .closeData {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.LIGHT_200};
    > svg {
      margin-right: 14px;
    }
  }
`;
export const ButtonOut = styled.button`
  border: none;
  background: none;
`;
export const BoxCustomer = styled.div`
  display: flex;
  gap: 32px;

  align-items: center;
  > a {
    font-size: 16px;
    font-weight: 400;
  }
`;
export const ModalMenu = styled.div`
  visibility: hidden;
  display: none;
  top: 0;
  left: 0;
  position: fixed;
  background-color: blue;
  width: 100%;
  height: 100vh;
  z-index: 40;
  background-color: ${({ theme }) => theme.DARK_400};
  > div:nth-child(1) {
    width: 100%;
    height: 104px;
    background-color: ${({ theme }) => theme.DARK_600};
    padding: 24px 30px;
    display: flex;
    align-items: end;
    > button {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 21px;
      gap: 10px;
      background: none;
      color: ${({ theme }) => theme.LIGHT_200};
    }
  }
  > div:nth-child(2) {
    margin-top: 20px;
    padding-inline: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    > button {
      background: none;
      color: ${({ theme }) => theme.LIGHT_200};
      font-size: 24px;
      text-align: start;
    }
  }
`;
export const BoxButtons = styled.div`
  a,
  button {
    border-bottom: 1px solid ${({ theme }) => theme.LIGHT_700};
  }
`;
