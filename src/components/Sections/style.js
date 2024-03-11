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
      width: 100px;
      position: absolute;
      z-index: 3;
      height: 100%;
      border: none;
      display: flex;

      > svg {
        color: ${({ theme }) => theme.LIGHT_100};
        font-size: 40px;
      }
      @media (max-width: 800px) {
        display: none;
      }
    }
    > button:nth-child(1) {
      align-items: center;

      background: linear-gradient(to left, rgba(0, 10, 15, 0) 0%, #000a0f 100%);
    }
    > button:nth-child(3) {
      background: linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, #000a0f 100%);
      align-items: center;
      justify-content: end;

      right: 0;
    }
    > div {
      flex: 1;
      display: flex;
      overflow-x: auto;
      gap: 27px;
      scroll-behavior: smooth;
      scrollbar-color: transparent transparent;  
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 18px;
    }
  }
`;
export const Box = styled.div`
 
  max-width: 277px;
  min-width: 277px;
  height: 448px;
  position: relative;
  z-index: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  .icon-flut {
    z-index: 4;
    position: absolute;
    right: 18px;
    top: 16px;
    background: none;
    border: none;
    transition: transform 500ms;
    > button {
      background: none;
      border: none;
      cursor: auto;
      > svg {
        font-size: 26px;
        color: ${({ theme }) => theme.LIGHT_300};
      }
    }
  }
  .icon-flut:hover {
    transform: scale(1.5);
  }
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.DARK_300};
    background: ${({ theme }) => theme.DARK_200};
   
    > img {
      width: 100%;
      height: 176px;
      object-fit: cover;
      
    }
    > h2 {
      font-family: Poppins;
      font-size: 24px;
      text-align: center;
    }
    > p {
      width: 100%;
      font-family: Roboto;
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    > strong {
      font-family: Roboto;
      font-size: 32px;
      color: ${({ theme }) => theme.CAKE_200};
      font-style: normal;
      font-weight: 400;
    }
    @media (max-width: 800px) {
      justify-content: space-evenly;
      gap: 2px;
      img {
        height: 100px;
      }
      h2 {
        font-size: 16px;
      }
      p {
        display: none;
      }
      strong {
        font-size: 22px;
      }
    }
  }
  .actions {
    display: flex;
    gap: 16px;
  }
  @media (max-width: 800px) {
    max-width: 210px;
    min-width: 210px;
    height: 290px;
    padding: 15px;
  }
`;
