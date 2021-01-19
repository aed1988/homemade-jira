import React from "react";
import { Container, Logo, Hamburger } from "./styles/header";

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Hamburger = ({ children, ...restProps }) => {
    return <Hamburger {...restProps}>{children}</Hamburger>;
};

Header.Logo = ({ children, ...restProps }) => {
    return <Logo {...restProps} />;
};
