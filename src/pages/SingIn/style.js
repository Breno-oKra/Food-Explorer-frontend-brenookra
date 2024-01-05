import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 64px;
  gap: 32px;
  border-radius: 16px;
  background: ${({ theme }) => theme.DARK_700};
  > h3 {
    width: 100%;
    text-align: center;
  }
  label {
    display: flex;
    gap: 8px;
    flex-direction: column;
    font-size: 16px;
    color: ${({ theme }) => theme.LIGHT_400};
    font-weight: 400;
    > input {
      padding: 12px 14px;
      width: 348px;
      border-radius: 8px;
      background:${({ theme }) => theme.DARK_900};
      color: ${({ theme }) => theme.LIGHT_300};
      border: 1px solid ${({ theme }) => theme.LIGHT_100};
    }
  }
  a{
    width: 100%;
    text-align: center;
  }
`;
