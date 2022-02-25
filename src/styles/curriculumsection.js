import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    div {
        margin: 10px 0px;
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
    }
`;