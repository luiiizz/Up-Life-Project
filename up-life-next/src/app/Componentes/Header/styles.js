import styled from 'styled-components';

export const Box = styled.header `
    padding-top: 30px;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Logo = styled.div `
    display: flex;
    align-items: center;
    label{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 25px;
        color: #BB0A1E;
    }
`

export const MenuList = styled.ul `
    margin-top: 15px;
    margin-left: auto;
`

export const ItemList = styled.li `
    display: inline-block;
    margin-right: 25px;
    font-weight: 500;

    a{
        color: #BB0A1E;
        text-decoration: none;
        font-size: 1.2rem;
    }
`

export const Botao = styled.button `
    width: 80px;
    height: 33px;
    float: right;
    margin-top: 10px;
    color: white;
    margin-right: 35px;

    background: #BB0A1E;
    border-radius: 10px;

    font-style: normal;
    font-weight: 200;
    font-size: 0.9rem;
    line-height: 19px;
    text-align: center;
`