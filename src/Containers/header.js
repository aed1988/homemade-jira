import React, { useState } from "react";
import { Header } from "../Components";
import logo from "../logo.svg";

export const HeaderContainer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Header>
            <Header.Logo src={logo} />
        </Header>
    );
};
