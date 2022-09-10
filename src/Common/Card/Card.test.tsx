import { render, screen } from "@testing-library/react"
import React from "react"
import { Card } from "./Card"

describe('Card component', () => {
    it('should render', () => {
        render(<Card><div>test div</div></Card>)
        expect(screen.getByText('test div')).toBeInTheDocument();
    })
})