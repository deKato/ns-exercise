import { render, screen } from "@testing-library/react";
import React from "react";
import ValidationError from "./ValidationError";

describe('Validation error component', () => {
    it('should render', () => {
        const errorMessage = 'error is here';
        render(<ValidationError text={errorMessage}/>)
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    })});