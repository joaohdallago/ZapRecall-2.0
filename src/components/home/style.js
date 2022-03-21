import styled from "styled-components";

export const HomeStyle = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 73px;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 65px;
        }

        span {
        font-size: 25px;
        font-family: 'Righteous', cursive;

        color: #fff;
        }   
    }
    
    button {
        width: 141px;
        height: 31px;

        font-size: 12px;

        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;

        color: #D70900;
        background-color: #fff;
    }
`