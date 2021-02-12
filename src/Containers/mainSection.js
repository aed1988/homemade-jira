import React from "react";
import { Section } from "../Components";

export const MainContainer = () => {
    return (
        <Section columns="2">
            <Section borderBottom colGap="0px">
                Hello
            </Section>
            <Section>Goodbye</Section>
        </Section>
    );
};
