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
  padding-inline: 123px;
  display: flex;
  flex-direction: column;
  align-items: start;
  > button {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.LIGHT_300};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    > svg {
        font-size: 34px;
    }
 
  }
`;
export const BoxInfos = styled.div`
  display: flex;
  gap: 47px;
  > img {
    width: 390px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    >div:nth-child(2){
        display: flex;
        gap:33px ;
        margin-top: 48px;
    }
  }
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  > h3 {
    color: ${({ theme }) => theme.LIGHT_300};
    font-family: Poppins;
    font-size: 40px;

    font-weight: 500;
  }
  > p {
    color: ${({ theme }) => theme.LIGHT_300};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 300;
  }
  > div {
    display: flex;
    gap: 12px;

    > span {
      color: ${({ theme }) => theme.LIGHT_100};
      background: ${({ theme }) => theme.DARK_1000};
      padding: 4px 8px;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      border-radius: 5px;
    }
  }
`;
