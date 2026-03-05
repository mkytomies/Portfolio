import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ContactForm from "../ContactForm";

test('Rendering and submitting succesfully', async () => {
    const handleSubmit = jest.fn()
    render(<ContactForm onSubmit={handleSubmit}/>);

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText('First Name'), 'Maija');
    await user.type(screen.getByPlaceholderText('Last Name'), 'Mehiläinen');
    await user.type(screen.getByPlaceholderText('Email'), 'maija.mehilainen@gmail.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Hei!');

    await user.click(screen.getByRole('button', {name: /submit/i}));

    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
            email: 'maija.mehilainen@gmail.com',
            firstName: 'Maija',
            lastName: 'Mehiläinen',
            message: 'Hei!'
        }),
    )
});

test('Failure test', async () => {
    const handleSubmit = jest.fn();
    render(<ContactForm onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole('button', {name: /submit/i});
    userEvent.click(submitButton);

    await waitFor(() => {
        const firstNameErr = screen.getByTestId('fnameErr');
        const lastNameErr = screen.getByTestId('lnameErr');
        const emailErr = screen.getByTestId('emailErr');
        const messageErr = screen.getByTestId('messageErr');

        expect(emailErr.textContent).toMatch('Email is required');
        expect(firstNameErr.textContent).toMatch('First name is required');
        expect(lastNameErr.textContent).toMatch('Last name is required');
        expect(messageErr.textContent).toMatch('Message is required');
    });
})