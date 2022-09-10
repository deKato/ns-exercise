import { render, screen } from "@testing-library/react"
import React from "react"
import Input from "./Input"

describe('Input component', () => {
    it('should render', () => {
        render(<Input type={"text"} value={"3"} name={"test-input"} placeholder={""} onChange={()=> {}}/>)
        expect(screen.getByRole('textbox')).toHaveValue('3')
    })
})