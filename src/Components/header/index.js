import React from "react";
import { Container, Logo, Button, List, ListItem, Link } from "./styles/header";

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = ({ children, ...restProps }) => {
    return <Logo {...restProps} />;
};

Header.Button = ({ children, ...restProps }) => {
    return <Button {...restProps}>{children}</Button>;
};

Header.List = ({ children, ...restProps }) => {
    return <List {...restProps}>{children}</List>;
};

Header.ListItem = ({ children, ...restProps }) => {
    return <ListItem {...restProps}>{children}</ListItem>;
};

Header.Link = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>;
};
