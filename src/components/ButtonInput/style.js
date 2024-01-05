import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  input {
    padding:0;
    padding-left: 3px;
    min-width: 40px;
  }
  &.add {
    padding: 10px 16px;
    border-radius: 8px;
    border: 2px dashed ${({ theme }) => theme.LIGHT_300};
    input,
    button {
      background: none;
    }
    button svg {
      color: ${({ theme }) => theme.LIGHT_300};
    }
  }
  &.close {
    padding: 10px 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.LIGHT_600};
    input {
      color: ${({ theme }) => theme.LIGHT_100};
      font-size: 16px;

      font-weight: 400;
    }
    input,
    button {
      background: none;
    }
    button svg {
      color: ${({ theme }) => theme.LIGHT_300};
    }
  }
`;
