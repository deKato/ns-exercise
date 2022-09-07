import React from "react";
import { StyledInput } from "./Input.styled";

export interface InputProps {
  type: string;
  value: string | number;
  name: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
