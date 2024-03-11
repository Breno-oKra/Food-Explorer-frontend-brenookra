import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Box = styled.main`
  width: 100%;
  height: 100%;
  padding-inline: 123px;
  display: flex;
  flex-direction: column;
  > div {
    padding-top: 34px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    > h2 {
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      color: ${({ theme }) => theme.LIGHT_300};
    }
  }
  @media (max-width:800px){
    padding-inline: 10px;
  }
`;
export const BoxFood = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  > div {
    padding: 16px 0;
    display: flex;
    gap: 13px;
    align-items: center;
    max-width: 300px;
    
    > a > img {
      width: 72px;
      height: 72px;
      border-radius: 100%;
      object-fit: contain;
    }
    > div {
      > h3 {
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        color: ${({ theme }) => theme.LIGHT_300};
      }
      > button {
        background: none;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        color: ${({ theme }) => theme.TOMATO_400};
      }
    }
  }
  @media (max-width:800px){
    gap: 0px;
  }
`;
