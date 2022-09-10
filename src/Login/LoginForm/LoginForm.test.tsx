import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import React from "react"
import { server } from "../../mocks/server";
import { AuthContextProvider } from "../../store/auth/AuthContextProvider"
import LoginForm from "./LoginForm"
import { rest } from 'msw';

describe('Login form component', () => {
    it('should render', () => {
        renderLoginForm()
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
    })

    it('should validate if fields are empty', async () => {
        const usernameError = 'Username is required';
        const passwordError = 'Password is required';

        const user = userEvent.setup();
        renderLoginForm();
        await user.click(screen.getByText('Login'));
        expect(screen.getByText(usernameError)).toBeInTheDocument();
        expect(screen.getByText(passwordError)).toBeInTheDocument();

        await user.click(screen.getByPlaceholderText('Username'));
        await user.keyboard('   ')
        await user.click(screen.getByPlaceholderText('Password'));
        await user.keyboard('   ')

        await user.click(screen.getByText('Login'));
        expect(screen.getByText(usernameError)).toBeInTheDocument();
        expect(screen.getByText(passwordError)).toBeInTheDocument();

        await user.click(screen.getByPlaceholderText('Username'));
        await user.keyboard('user')
        await user.click(screen.getByText('Login'));
        expect(screen.queryByText(usernameError)).not.toBeInTheDocument();
        expect(screen.getByText(passwordError)).toBeInTheDocument();

        await user.clear(screen.getByPlaceholderText('Username'));
        await user.click(screen.getByPlaceholderText('Password'));
        await user.keyboard('psw')
        await user.click(screen.getByText('Login'));
        expect(screen.getByText(usernameError)).toBeInTheDocument();
        expect(screen.queryByText(passwordError)).not.toBeInTheDocument();
    })

    it('should login to app', async () => {
        server.use(
            rest.post('https://playground.tesonet.lt/v1/tokens', (_req, res, ctx) => {

                return res.once(ctx.status(200), ctx.json({ token: 'testToken' }))
            
              }),
        )
        const user = userEvent.setup();
        renderLoginForm();

        await user.click(screen.getByPlaceholderText('Username'));
        await user.keyboard('user')
        await user.click(screen.getByPlaceholderText('Password'));
        await user.keyboard('psw')
        await user.click(screen.getByText('Login'));
    })

    it('should show error if credentials are invalid', async () => {
        server.use(
            rest.post('https://playground.tesonet.lt/v1/tokens', (_req, res, ctx) => {

                return res.once(ctx.status(401))
            
              }),
        )
        const user = userEvent.setup();
        renderLoginForm();

        await user.click(screen.getByPlaceholderText('Username'));
        await user.keyboard('user')
        await user.click(screen.getByPlaceholderText('Password'));
        await user.keyboard('psw')
        await user.click(screen.getByText('Login'));
        expect(await screen.findByText('Invalid username or password')).toBeInTheDocument();
    })
})

const renderLoginForm = () => {
    return render(<AuthContextProvider>
        <LoginForm/>
            </AuthContextProvider>)
}