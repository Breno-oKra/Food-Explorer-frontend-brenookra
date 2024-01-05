import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-top: 48px;

  > h3 {
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    color: 1px solid ${({ theme }) => theme.LIGHT_300};
  }
  > div {
    width: 100%;
    display: flex;
    position: relative;

    > button {
      width: 150px;
      position: absolute;
      z-index: 3;
      height: 100%;
      border: none;
      display: flex;

      > svg {
        color: ${({ theme }) => theme.LIGHT_100};
        font-size: 40px;
      }
    }
    > button:nth-child(1) {
      align-items: center;

      background: linear-gradient(to left, rgba(0, 10, 15, 0) 0%, #000a0f 100%);
    }
    > button:nth-child(3) {
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0) 0%,
        #000a0f 100%
      );
      align-items: center;
      justify-content: end;

      right: 0;
    }
    > div {
      flex: 1;
      display: flex;
      overflow-x: hidden;
      gap: 27px;
    }
  }
`;
export const Box = styled(Link)`
  position: relative;
  z-index: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.DARK_300};
  background: ${({ theme }) => theme.DARK_200};
  .icon-flut {
    position: absolute;
    right: 18px;
    top: 16px;
    background: none;
    border: none;
    > svg {
        font-size: 24px;
        color:${({ theme }) => theme.LIGHT_300} ;
    }
  }
  > img {
    width: 100%;
    height: 176px;
    object-fit: cover; 
  }
  > h2 {
    font-family: Poppins;
    font-size: 24px;
  }
  > p {
    font-family: Roboto;
    font-size: 14px;
  }
  > strong {
    font-family: Roboto;
    font-size: 32px;
    color: ${({ theme }) => theme.CAKE_200};
    font-style: normal;
    font-weight: 400;
  }
  > div {
    display: flex;
    gap: 16px;
  }
`;

