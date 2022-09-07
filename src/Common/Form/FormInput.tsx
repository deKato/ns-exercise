import React from "react";
import ValidationError from "../Error/ValidationError";
import Input, { InputProps } from "../Input/Input";
import Label from "../Label/Label";
import { StyledFormInputContainer } from "./FormInput.styled";

interface FormInputProps extends InputProps {
  label: string;
  errorMessage: string;
}

const FormInput = (props: FormInputProps) => {
  const { errorMessage, ...inputProps } = props;
  const { label, name } = inputProps;
  return (
    <StyledFormInputContainer>
      {/* <Label htmlFor={name} text={label} /> */}
      <Input {...inputProps} />
      {errorMessage && <ValidationError text={errorMessage} />}
    </StyledFormInputContainer>
  );
};

export default FormInput;
