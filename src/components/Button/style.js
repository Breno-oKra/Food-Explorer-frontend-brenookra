import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.LIGHT_100};
  background-color:  ${({ theme, colors }) =>
    colors ? colors : theme.TOMATO_100};
  padding: 12px 32px;
  border-radius: 5px;
  border: none;
 gap: 7px;
  > p{
    text-align: center;
  }
  
`;
