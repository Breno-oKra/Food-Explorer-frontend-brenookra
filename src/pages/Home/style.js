import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Box = styled.main`
  width: 100%;
  padding-inline: 123px;
  display: flex;
  flex-direction: column;
 
`;
export const BoxBanner = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  margin-top: 164px;
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  > img {
    position: relative;
    width: 50%;
    height: 406px;
    flex-shrink: 0;
    bottom: 70px;
    background-size: cover;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    > strong {
      font-weight: 500;
      font-size: 40px;
      line-height: 56px;
      font-family: "Poppins", sans-serif;
    }
    p {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
