import React, { FC, ReactNode } from "react";
import { StyledText } from "./Text.styled";

interface ITextProps {
  children: ReactNode;
}

export const Text = (props: ITextProps) => {
  return <StyledText>{props.children}</StyledText>;
};
