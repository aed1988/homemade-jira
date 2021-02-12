import styled from "styled-components/macro";

export const DefaultSection = styled.section.attrs((props) => ({
    rowGap: props.rowGap || "0px",
    colGap: props.colGap || "0px",
    height: props.height,
    backgroundColor: props.backgroundColor || props.theme.colors.offWhite,
}))`
    display: grid;
    grid-template-rows: ${(props) =>
        `repeat(${props.rows || 1}, auto [row-start])`};
    row-gap: ${(props) => props.rowGap};
    grid-template-columns: ${(props) =>
        props.columns
            ? `repeat(${props.columns}, auto [col-start])`
            : `repeat(1, auto [col-start])`};
    column-gap: ${(props) => props.colGap};
    align-items: center;
    justify-items: center;
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    border-bottom: ${(props) =>
        props.borderBottom && `2px solid ${props.theme.colors.black}`};
    padding: 0 10%;
    font-family: "Noto Sans JP", sans-serif;
`;

export const DefaultCard = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 396px;
    min-height: 333px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    padding-top: 50px;
`;

export const DefaultButton = styled.button.attrs((props) => ({
    width: props.width === "lg" ? "200px" : "100px",
    height: props.height || "2em",
    backgroundColor: props.primary
        ? props.theme.colors.accent1
        : props.theme.colors.accent2,
}))`
    font-size: 20px;
    line-height: 48px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color || props.theme.colors.white};
    border: ${(props) => `1px solid ${props.theme.colors.white}`};
    border-radius: 6px;
    width: props.width;
    height: props.height;

    &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.accent2};
        border: ${(props) => `1px solid ${props.theme.colors.accent2}`};
        transition: all 0.2s;
    }
`;

export const DefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DefaultInput = styled.input.attrs((props) => ({
    type: props.type || "text",
    size: props.size || "1em",
}))`
    width: 330px;
    font-size: max(16px, 1em);
    padding: ${(props) => props.size};
    background-color: #fff;
    border: ${(props) => `2px solid ${props.theme.colors.offWhite}`};
    border-radius: 4px;
`;
