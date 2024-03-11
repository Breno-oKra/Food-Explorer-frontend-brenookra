import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px 123px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.DARK_600};
  align-items: center;
  margin-top: 46px;
  > img {
    width: 186px;
  }
  > span {
    color: ${({ theme }) => theme.LIGHT_200};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  @media (max-width: 800px) {
    padding: 24px 10px;
    justify-content: space-between;
    img{
      width: 140px;
    }
    span{
      font-size: 12px;
    }
  }
`;
