import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    div {
        margin: 20px 0px;
        background: linear-gradient(-45deg, #ff0086, #e7218c, #c012c8, #9506bf);
        border-radius: 5px;
        cursor: pointer;
        color: #1e1e1e;
        padding: 2px;
        width: 160px;
        height: 50px;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #1e1e1e;
            border-radius: 5px;
            text-decoration: none;
            color: #e1e1e1;
            height: 46px;
            transition: 0.2s background;
            transition: 0.2s font-size;

            :hover {
                background: #262626;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
`;