import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.LIGHT_100};
  background-color:  ${({ theme, colors }) =>
    colors ? colors : theme.TOMATO_100};
  padding: 12px 32px;
  border-radius: 5px;
  border: none;
  > p{
    width: 100%;
    text-align: center;
  }
  > svg {
    margin-right: 8px;
    
  }
`;
