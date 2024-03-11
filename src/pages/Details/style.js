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
  @media (max-width:800px) {
    padding-inline: 30px;
    align-items: center;
    > button{
      width: 100%;
      font-weight: normal;

      justify-content: start;
      margin-bottom: 10px;
      > svg{
        font-size: 26px;
      }
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
  @media (max-width:800px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
    img{
      width: 260px;
    }
    >div:nth-child(2){
        display: flex;
        gap:10px ;
        margin-top: 48px;
    
        align-items: center;
     
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
    flex-wrap: wrap;
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
  @media (max-width:800px) {
    width: 100%;

    align-items: center;
    h3{
      font-size: 27px;
    }
    p{
      font-size: 16px;
    }
  }
`;
