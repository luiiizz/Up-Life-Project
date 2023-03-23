import styled from 'styled-components';

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50%;
    height: 100%;
    padding: 50px;
    
    p{  
        font-family: 'Lato';
        color: white;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        max-width: 70%;

    }

    button {
        margin-top: 40px;
        color: rgba(187, 10, 30, 1);
        font-size: 20px;
        font-weight: 700px;
        width: 150px;
        height: 60px;
        left: 290px;
        cursor: pointer;

        background: #FFFFFF;
        border-radius: 15px;
    }
`
