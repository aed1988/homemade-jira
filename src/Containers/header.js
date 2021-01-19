import React from "react";
import { Header } from "../Components";
import logo from "../logo.svg";

export const HeaderContainer = () => {
    return (
        <Header>
            <Header.Logo src={logo} />
            <Header.Hamburger></Header.Hamburger>
        </Header>
    );
};
