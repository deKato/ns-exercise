import React from "react";
import { StyledValidationError } from "./ValidationError.styled";

interface ValidationErrorProps {
  text: string;
}

const ValidationError = (props: ValidationErrorProps) => {
  const { text } = props;
  return <StyledValidationError>{text}</StyledValidationError>;
};

export default ValidationError;
