import styled from "styled-components";
import media from "./media";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    border-bottom: 3px solid black;

    div {
        width: 100%;
        padding: 20px 0px;
        display: flex;
        justify-content: space-evenly;

        ${media.tablet`
            width: 70%;
        `}

        ${media.desktop`
            width: 50%;
        `}

        a {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s color;
            transition: 0.3s font-size;
            font-size: 33px;
            cursor: pointer;
            text-decoration: none;
            color: #e1e1e1;

            ${media.tablet`
                width: 50px;
                height: 50px;
            `}

            :hover {
                font-size: 38px;
                color: #e7218c;
            }
        }
    }
`;