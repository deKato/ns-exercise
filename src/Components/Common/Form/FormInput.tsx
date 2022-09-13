import React from "react";
import ValidationError from "../Error/ValidationError";
import Input, { InputProps } from "../Input/Input";
import { StyledFormInputContainer } from "./FormInput.styled";

interface FormInputProps extends InputProps {
  errorMessage: string;
}

const FormInput = (props: FormInputProps) => {
  const { errorMessage, ...inputProps } = props;
  return (
    <StyledFormInputContainer>
      <Input {...inputProps} $hasError={!!errorMessage} />
      {errorMessage && <ValidationError text={errorMessage} />}
    </StyledFormInputContainer>
  );
};

export default FormInput;
