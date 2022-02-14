import styled from "styled-components";
import media from "./media";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    padding: 0px 5px;
    margin: 30px 0px;

    ${media.tablet`
        width: 60%;
    `}

    ${media.desktop`
        width: 50%;
    `}
    
    ${media.widescreen`
        width: 40%;
    `}

    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 15px;
    }
`;

export const StackIcon = styled.a`
    margin: 20px 0px;
    width: 120px;
    height: 80px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
    cursor: pointer;
    transition: font-size 0.2s;
    color: ${props => props.color};
    ${'' /* border: 1px solid red; */}

    ${media.tablet`
        width: 150px;
        height: 90px;
    `}

    span {
        font-size: 12px;
        text-align: center;
        ${'' /* border: 1px solid yellow; */}

        ${media.tablet`
            font-size: 16px;
        `}
    }

    :hover {
        font-size: 53px;
    }
`;