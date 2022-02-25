import styled, { keyframes } from "styled-components";

const projectCardHoverAnimation = keyframes`
    to {
        transform: scale(101%);
    }
`;

export const ProjectContainerArticle = styled.article`
    cursor: pointer;
    border: 1px solid white;
    border-radius: 5px;

    :hover {
        animation: 0.3s ease-out ${projectCardHoverAnimation} forwards;
    }
`;

export const ProjectWrapperLink = styled.a`
    text-decoration: none;
    color: #e1e1e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px;

        h4 {
            width: 100%;
            text-align: center;
            padding-bottom: 10px;
        }

        p {
            padding: 4px;
        }
`;

export const ButtonsContainer = styled.div`
    background-color: black;
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
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 5px;
    background: white;
    color: black;
    cursor: pointer;
    transition: font-size 0.2s;

    :hover {
        font-size: 25px;
    }
`;