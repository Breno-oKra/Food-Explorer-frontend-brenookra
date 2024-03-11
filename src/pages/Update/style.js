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
  padding-inline: 123px;

  > button {
    margin-top: 40px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.LIGHT_300};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    > svg {
      font-size: 34px;
    }
  }
  h2{
    margin-bottom: 32px;
  }
  @media (max-width:800px) {
    padding-inline:30px;
    }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 32px;
  legend {
    color: ${({ theme }) => theme.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  input,
  select {
    width: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.DARK_800};
    color: ${({ theme }) => theme.LIGHT_500};
    font-weight: 400;
  }
  > fieldset {
    width: 100%;
    textarea {
      width: 100%;
      padding: 14px;
      border-radius: 8px;
      background: ${({ theme }) => theme.DARK_800};
      min-height: 172px;
      color: ${({ theme }) => theme.LIGHT_300} ;
    }
  }
  .align-1 {
    width: 100%;
    display: flex;
    gap: 32px;
    input,
    select {
      padding: 12px 14px;
    }
    fieldset:nth-child(1) {
      width: 229px;
      > label {
        input {
          width: 1;
          position: absolute;
          visibility: hidden;
          display: none;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 14px;
          border-radius: 8px;
          background: ${({ theme }) => theme.DARK_800};
          color: ${({ theme }) => theme.LIGHT_500};
          svg {
            font-size: 16px;
          }
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
    fieldset:nth-child(2) {
      flex: 1;
    }
    fieldset:nth-child(3) {
      width: 264px;
    }
    @media (max-width:800px) {
      flex-direction: column;
      fieldset{
        min-width:100%;
       
      }
    }
  }
  .align-2 {
    width: 100%;
    display: flex;
    gap: 32px;
    fieldset:nth-child(1) {
      display: flex;
      flex: 1;
      > div {
        
        width: 100%;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        background-color:${({ theme }) => theme.DARK_800} ;
        
        padding: 4px 8px;
        border-radius: 8px;
      }
    }
    fieldset:nth-child(2) {
      > input {
        padding: 12px 14px;
      }
    }
    @media (max-width:800px) {
      flex-direction: column;
    }
  }
`;
export const ContainerButton = styled.div`
    display: flex;
    gap: 32px;
`
