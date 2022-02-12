import styled from "styled-components";
import media from "./media";

export const HomeMain = styled.main`
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 30px;

        ${media.tablet`
            font-size: 40px;
        `}
    }
`;