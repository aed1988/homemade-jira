import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border: ${(props) => `1px solid ${props.theme.colors.oxfordBlue}`};
    background-color: ${(props) => props.theme.colors.platinum};
    font-family: ${(props) => props.theme.fonts[0]};
`;

export const Logo = styled.img`
    height: 100px;
    width: 100px;
`;

export const Hamburger = styled.div``;
