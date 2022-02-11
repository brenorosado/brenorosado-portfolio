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