import styled from "styled-components";

export const Container = styled.div`
  width: 185px;
  display: flex;

  align-items: center;
  background-color: ${({ theme }) => theme.DARK_900};
  padding: 16px;
  gap: 8px;
  > select {
    width: 100%;

    appearance: none;
    background: none;

    color: ${({ theme }) => theme.LIGHT_400};
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.99357 7.8295C5.43291 7.39017 6.14522 7.39017 6.58456 7.8295L12.5391 13.784L18.4936 7.8295C18.9329 7.39017 19.6452 7.39017 20.0846 7.8295C20.5239 8.26884 20.5239 8.98116 20.0846 9.4205L13.3346 16.1705C12.8952 16.6098 12.1829 16.6098 11.7436 16.1705L4.99357 9.4205C4.55423 8.98116 4.55423 8.26884 4.99357 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right -5px top 50%;
  }
  > select option {
    background-color: ${({ theme }) => theme.LIGHT_400};
    color: ${({ theme }) => theme.DARK_900};
  }
  @media (max-width:800px) {
      width: 100%;
  }
`;
