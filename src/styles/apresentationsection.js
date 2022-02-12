import styled, { keyframes } from "styled-components";
import media from './media';

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

export const Section = styled.section`
    margin: 20px 0px;
    width: 95%;
    display: flex;
    justify-content: space-between;

    ${media.tablet`
        width: 70%;
    `}

    ${media.desktop`
        width: 50%;
    `}

    ${media.widescreen`
        width: 40%;
    `}

    article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1 {
            font-size: 32px;
            margin-bottom: 5px;

            strong {
                animation: ${gradientAnimation} 3s ease-in infinite;
                background: -webkit-linear-gradient(-45deg, #ff0086, #e7218c, #c012c8, #9506bf);
                background-size: 300% 300%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            ${media.tablet`
                font-size: 50px;
            `}
        }

        span {
            font-size: 13px;
            padding-left: 2px;

            ${media.tablet`
                font-size: 18px;
            `}
        }

        a {
            display: flex;
            justify-content: center;
            text-decoration: none;
            color: #e1e1e1;
            font-size: 25px;
            transition: color 0.3s;

            :hover {
                color: #e7218c;
            }

            ${media.tablet`
                font-size: 40px;
            `}
        }
    }
`;