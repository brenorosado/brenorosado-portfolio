import styled from "styled-components";
import media from "./media";

export const Section = styled.section`
    width: 70%;
    display: grid;
    grid-template-columns: 1;
    grid-gap: 20px;
    margin: 20px 0px;
    justify-content: center;

    ${media.tablet`
        width: 70%;
        grid-template-columns: repeat(2, 18.8rem);
    `}

    ${media.desktop`
        width: 50%;
        grid-template-columns: repeat(3, 18.8rem);
    `}

    ${media.widescreen`
        width: 40%;
    `}
`;

export const AllProjectsLink = styled.div`
    a {
        border: 1px solid white;
        text-decoration: none;
        background: black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #e1e1e1;
        height: 48px;
        padding: 15px;
        transition: 0.2s font-size;

        :hover {
            font-size: 18px;
            font-weight: bold;
        }
    }
`;