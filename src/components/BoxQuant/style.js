import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 14px;
  > div {
    display: flex;
    gap: 14px;
    flex: 1;
    > input {
      max-width: 40px;
      background: none;
      border: none;
      color: ${({ theme }) => theme.LIGHT_300};
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      text-align: center;
    }
    > button {
      background: none;
      border: none;
      @media (max-width: 800px) {
        font-size: 15px;
    
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    &.detailForm{
      flex-direction: row;
    }
    gap: 12px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.LIGHT_100};
  background-color: ${({ theme, colors }) =>
    colors ? colors : theme.TOMATO_100};
  padding: 12px 32px;
  border-radius: 5px;
  border: none;
  > p {
    width: 100%;
    text-align: center;
  }
  > svg {
    margin-right: 8px;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
