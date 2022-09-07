import React, { FC, ReactNode } from "react";
import { StyledCard } from "./Card.styled";

interface ICardProps {
  children: ReactNode;
}

export const Card = (props: ICardProps) => {
  return <StyledCard>{props.children}</StyledCard>;
};
