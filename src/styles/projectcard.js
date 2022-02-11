import styled from "styled-components";

export const ProjectContainerArticle = styled.article`
    background: linear-gradient(-45deg, #ff0086, #e7218c, #c012c8, #9506bf);
    border-radius: 5px;
    padding: 2px;
    width: 340px;

    a {
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
            padding-bottom: 5px;
        }

        p {
            padding: 4px;
        }
        
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

    a {
        width: 49%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        border-radius: 5px;
        background: black;
        color: #e1e1e1;
        cursor: pointer;
        transition: font-size 0.2s;

        :hover {
            font-size: 30px;
        }
        
    }
`;  