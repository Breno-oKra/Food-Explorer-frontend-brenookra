import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 14px;
  flex: 1;
  > input {
    width: 24px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.LIGHT_300};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  > button {
    background: none;
    border: none;
  }
`;