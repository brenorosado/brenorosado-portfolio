import styled, { keyframes } from "styled-components";
import { gradientAnimation } from "./apresentationsection";

const projectCardHoverAnimation = keyframes`
    to {
        transform: translateY(-5px);
    }
`;

export const ProjectContainerArticle = styled.article`
    :hover {
        animation: 0.3s ease-out ${projectCardHoverAnimation} forwards;
    }
`;

export const ProjectContent = styled.div`
    background: linear-gradient(-45deg, #ff0086, #e7218c, #c012c8, #9506bf);
    background-size: 300% 300%;
    border-radius: 5px;
    padding: 2px;
    width: 340px;
    animation: ${gradientAnimation} 3s ease-in infinite;
`;

export const ProjectWrapperLink = styled.a`
    text-decoration: none;
    color: #e1e1e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #262626;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px;

        h3 {
            width: 100%;
            text-align: center;
            padding-bottom: 6px;
        }

        p {
            padding: 4px;
        }
`;

export const ButtonsContainer = styled.div`
    background-color: #262626;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
`;  

export const ProjectLink = styled.a`
    width: 49%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    border-radius: 5px;
    background: black;
    color: white;
    cursor: pointer;
    transition: font-size 0.2s;

    :hover {
        font-size: 30px;
    }
`;