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
  @media (max-width: 800px) {
    padding-inline: 10px;
  }
`;
export const BoxFood = styled.div`
  display: flex;
  margin-bottom: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    padding: none;
    font-size: 14px;

    th {
      padding: 21px 24px;
      border: 2px solid ${({ theme }) => theme.DARK_1000};
    }

    td {
      padding: 16px 24px;
      border: 2px solid ${({ theme }) => theme.DARK_1000};

      text-align: start;
    }

    tr td .status p {
      display: flex;
      gap: 8px;
      justify-content: start;
      align-items: center;
    }
    @media (max-width:800px) {
      display: none;
    }
  }
`;
export const BoxMobile = styled.div`
  display: none;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.LIGHT_400} ;
  font-size: 17px;
  > div {
    border: 2px solid ${({ theme }) => theme.DARK_1000};
    border-radius: 0.5rem;
    padding: 24px;
    display: flex;
    flex-direction: column;
   
    align-items: start;
    gap: 15px;
    > div:nth-child(1) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .status p {
      display: flex;
      gap: 8px;
      justify-content: start;
      align-items: center;
      }
    }
    > div:nth-child(3){
      width: 100%;
    }
  
  }
  @media (max-width:800px) {
      display: flex;
    }
`;
