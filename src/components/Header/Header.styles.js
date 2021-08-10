import styled from "styled-components";

export const Wrapper = styled.div`
background: var(--darkGrey);
padding: 0 20px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: var(--maxWidth);
padding: 20px 0;
margin: 0 auto;
color: var(--white);

a {
    color: var(--white);
    text-decoration: none;
}
.containerLoggedin{
    display: flex;
    background: var(--darkGrey);
    border-style: solid;
    border-color: white;
    width: 25%;
    min-width: 100px;
    height: 40px;
    border-radius: 30px;
    font-size: var(--fontMed);
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
        color: var(--white);
        font-size: var(--fontMed);
    }
}
`;

export const LogoImg = styled.img`
width: 200px;
@media screen and (max-width: 500px){
    width: 150px;
}
`;

export const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width:500px){
     width: 80px;
    }
`;