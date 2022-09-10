import { render, screen } from "@testing-library/react";
import React from "react";
import FormInput from "./FormInput";

describe('FormInput component', () => {
    it('should render', () => {
        const placeholder = 'This is form input'
        render(<FormInput errorMessage={""} type={"text"} value={""} name={"test-input"} placeholder={placeholder} onChange={() => {}}/>)
        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    }),
    it('should render with error message', () => {
        const error = 'This is error'
        const placeholder = 'This is form input'
        render(<FormInput errorMessage={error} type={"text"} value={""} name={"test-input"} placeholder={placeholder} onChange={() => {}}/>)
        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
        expect(screen.getByText(error)).toBeInTheDocument()
    })
});