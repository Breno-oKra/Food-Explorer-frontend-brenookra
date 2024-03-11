import styled from "styled-components";

export const Container = styled.div`
  position: relative;
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
  @media (max-width: 900px) {
    padding-inline: 30px;
  }
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
  @media (max-width: 650px) {
    gap: 20px;
    height: 140px;
    margin-top: 60px;
    > img {
      width: 160px;
      height: 160px;
      bottom: 20px;
      transform: scale(1.1);
    }
    > div {
      > strong {
     
        font-size: 20px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 500px) {
    gap: 20px;
    height: 140px;
    margin-top: 60px;
    > img {
      width: 100px;
      height: 100px;
      bottom: 0px;
      transform: scale(1.5);
    }
    > div {
      > strong {
     
        font-size: 16px;
      }
      p {
        font-size: 10px;
      }
    }
  }
`;
