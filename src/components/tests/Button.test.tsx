import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../Button';

const label = "Github";
const to= "https://github.com/mkytomies/";

test('Render button with correct label', () => {
    render(
        <MemoryRouter>
            <Button label={label} to={to} />
        </MemoryRouter>
    );

    const button = screen.getByText(label);
    expect(button).toBeInTheDocument();
});

test('Link has the correct URL', () => {
    render(
        <MemoryRouter>
            <Button label={label} to={to} />
        </MemoryRouter>
    );

    const link: HTMLAnchorElement = screen.getByRole("link");
    expect(link.href).toContain(to);
})