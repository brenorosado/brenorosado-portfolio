import styled from "styled-components";
import media from "./media";

export const Section = styled.section`
    height: 150px;
    width: 100%;
    margin-top: 30px;
    ${'' /* margin-bottom: 10px; */}
    display: flex;
    flex-direction: column;
    align-items: center;

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

    div {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-evenly;

        ${media.desktop`
            width: 60%;
        `}

        a {
            transition: 0.3s color;
            transition: 0.3s font-size;
            font-size: 35px;
            cursor: pointer;

            :hover {
                font-size: 38px;
                color: #e7218c;
            }
        }
    }
`;