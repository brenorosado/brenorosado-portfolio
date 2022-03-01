import styled, { keyframes } from "styled-components";
import media from "./media";

export const gradientAnimation = keyframes`
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
`;

export const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 999;
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0 10px;

        input {
            display: none;
        }

        input:checked + ul {
            position: fixed;
            display: flex;
            align-items: center;
            top: 80px;
            width: 100%;

            li {
                padding: 10px 0px;
            }
        }

        ${media.tablet`
            justify-content: space-between;
            width: 80%;
        `}

        ${media.desktop`
            width: 60%;
            justify-content: space-between;
        `}

        ul {
            list-style: none;
            display: none;
            flex-direction: column;
            background: black;
            
            ${media.tablet`
                position: static;
                display: flex;
                flex-direction: row;
                align-items: center;
            `}

            li {
                margin: 0px 20px;
                cursor: pointer;

                :hover {
                    color: #e7218c;
                }
            }
        }
    }
`;

export const Logo = styled.a`
    font-size: 32px;
    text-decoration: none;
    color: white;

    strong {
        animation: ${gradientAnimation} 3s ease-in infinite;
        background: -webkit-linear-gradient(-45deg, #ff0086, #e7218c, #c012c8, #9506bf);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ${media.tablet`
        font-size: 40px;
    `}
`;

export const MenuButton = styled.label`
    display: flex;
    background: #e7218c;
    cursor: pointer;
    padding: 5px;
    height: 35px;
    border-radius: 5px;
    font-size: 25px;

    ${media.tablet`
        display: none;
    `}
`;