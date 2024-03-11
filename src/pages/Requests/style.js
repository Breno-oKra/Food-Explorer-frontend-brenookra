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
  margin-top: 34px;
  padding-inline: 123px;
  display: flex;
  flex-direction: column;
  .hidden {
    display: none;
    visibility: hidden;
  }
  .show {
    display: flex;
    visibility: visible;
  }
  > div {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 800px) {
    padding-inline: 20px;
  }
`;

export const BoxOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > p {
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
    }
    > div {
      display: flex;
      flex-direction: column;

      min-height: 300px;
      > div {
        max-width: 450px;
        display: flex;
        gap: 13px;
        padding: 16px 0;
        > img {
          width: 72px;
          height: 72px;
          border-radius: 100%;
          object-fit: cover;
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: start;
          > strong {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 13px;
            color: ${({ theme }) => theme.LIGHT_300};
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            > p {
              color: ${({ theme }) => theme.LIGHT_400};
              font-size: 12px;
              font-family: Roboto;
              font-weight: 400;
            }
          }
          > button {
            background: none;
            color: ${({ theme }) => theme.TOMATO_400};
            font-size: 12px;
          }
        }
        @media (max-width: 1100px) {
          img {
            width: 50px;
            height: 50px;
          }
          > div {
            strong {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    padding-inline: 30px;
  }
`;
export const ButtonMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  @media (min-width: 1100px) {
    display: none;
    visibility: hidden;
  }
`;
export const BoxTwo = styled.div`
  width: 530px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1100px) {
    display: none;
    visibility: hidden;
    padding-inline: 80px;
  }
`;
export const TableBox = styled.div`
  height: 450px;
  border: 1px solid ${({ theme }) => theme.LIGHT_600};
  background: ${({ theme }) => theme.DARK_500};
  border-radius: 8px;
  overflow: hidden;
  > div:nth-child(1) {
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.LIGHT_600};
    height: 80px;

    .active {
      background: ${({ theme }) => theme.DARK_800};
    }
    > button:nth-child(1) {
      border-right: 1px solid ${({ theme }) => theme.LIGHT_600};
    }
    > button {
      flex: 1;
      padding: 12px 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: ${({ theme }) => theme.LIGHT_100};
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        svg {
          font-size: 24px;
        }
      }
    }
  }
  > div:nth-child(2) {
    width: 100%;
    min-height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const FormBox = styled.div`
  padding: 59px 98px 41px;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > form {
      display: flex;
      flex-direction: column;
      gap: 37px;
    
      fieldset {
        width: 100%;

        legend {
          color: ${({ theme }) => theme.LIGHT_400};
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 8px;
        }
        input {
          width: 100%;
          background: none;
          padding: 12px 14px;
          border-radius: 5px;
          border: 1px solid ${({ theme }) => theme.LIGHT_100};
          color: ${({ theme }) => theme.LIGHT_100};
        }
        input::placeholder {
          color: ${({ theme }) => theme.LIGHT_500};
        }
      }
      > div {
        display: flex;
        gap: 17px;
        input {
          flex: 1;
        }
      }
    }
  }

`;
