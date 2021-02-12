import styled from "styled-components/macro";

import { DefaultButton } from "../../../defaultStyling/styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    background-color: ${(props) => props.theme.colors.accent1};
    font-family: ${(props) => props.theme.fonts[0]};
    height: 80px;
`;

export const Logo = styled.img`
    height: 3.5rem;
`;

export const Button = styled(DefaultButton)``;

export const List = styled.ul`
    padding-left: 25px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 30px;
    align-items: center;
    list-style-type: none;
    color: ${(props) => props.theme.colors.white};
`;

export const ListItem = styled.li`
    font-size: 18px;
    font-weight: 400;
    &:hover {
        border-bottom: ${(props) => `2px solid ${props.theme.colors.accent2}`};
        color: ${(props) => props.theme.colors.accent2};
        transition: all 0.1s;
    }
`;

export const Link = styled.a``;
