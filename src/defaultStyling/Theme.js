import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        white: "#ffffff",
        black: "#000000",
        accent1: "#14213d",
        accent2: "#fca311",
        offWhite: "#e5e5e5",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em",
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
