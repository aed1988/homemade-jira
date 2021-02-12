import React from "react";
import { SectionStyle } from "./styles/section";

export default function Section({ children, ...restProps }) {
    return <SectionStyle {...restProps}>{children}</SectionStyle>;
}
