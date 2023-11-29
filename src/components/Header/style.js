import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 104px;
    display: flex;
    justify-content: space-between;
    gap: 32px;
    background-color:  ${({ theme }) => theme.DARK_600};
    padding: 24px 123px;
`
export const Image = styled.img`
    width: 197px;
    
`
export const InputCamp = styled.div`
    flex: 1;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  ${({ theme }) => theme.DARK_900};
    >svg{
       
        margin-right: 14px;
    }
    >input{
        flex: 1;
        max-width: 344px;
        border: none;
        background: none;
     
    }

`
export const ButtonOut = styled.button`
    border: none;
    background: none;
   
`
