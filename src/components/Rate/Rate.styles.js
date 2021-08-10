import styled from "styled-components";

export const Wrapper = styled.button`
    display: flex;
    background: var(--white);
    border-radius: 30px;
    width: 25%;
    min-width: 90px;
    height: 35px;
    border-radius: 30px;
    font-size: var(--fontSuperBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
    opacity: 0.8;
}

    p {
        margin: auto;
        position: relative;
        color: var(--darkGrey);
        font-size: var(--fontMed);
    }
`;