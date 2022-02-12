import styled from "styled-components";
import media from "./media";

export const Section = styled.section`
    width: 70%;
    display: grid;
    grid-template-columns: 1;
    grid-gap: 30px;
    margin: 20px 0px;
    justify-content: center;

    ${media.tablet`
        width: 70%;
    `}

    ${media.desktop`
        width: 50%;
        grid-template-columns: repeat(2, 340px);
    `}

    ${media.widescreen`
        width: 40%;
    `}
`;

export const AllProjectsLink = styled.div`
    background: linear-gradient(-45deg, #ff0086, #e7218c, #c012c8, #9506bf);
    border-radius: 5px;
    cursor: pointer;
    color: #1e1e1e;
    padding: 1px;
    width: 140px;
    height: 35px;

    a {
        position: relative;
        background: #1e1e1e;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #e1e1e1;
        height: 33px;
        transition: 0.2s background;

        :hover {
            background: #262626;
        }
    }
`;