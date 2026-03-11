import { getAllByRole, render, screen } from "@testing-library/react";
import Navigation from "../Navigation";
import { MemoryRouter, useLocation } from "react-router";
import userEvent from "@testing-library/user-event";

function LocationDisplay() {
    const location = useLocation();
    return <div data-testid='location'>{location.pathname}</div>;
}

test('Render navigation', () => {
    render(
        <MemoryRouter>
            <Navigation />
        </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
});

test('Links have the correct to value', () => {
    render(
        <MemoryRouter>
            <Navigation />
        </MemoryRouter>
    );

    const links: HTMLAnchorElement[] = screen.getAllByRole("link");

    expect(links[0].textContent).toEqual("Home");
    expect(links[0].href).toContain("/");

    expect(links[1].textContent).toEqual("Portfolio");
    expect(links[1].href).toContain("/portfolio");
})

test('Navigate to portfolio page', async () => {
    const user = userEvent.setup();

    render(
        <MemoryRouter initialEntries={['/']}>
            <Navigation />
            <LocationDisplay />
        </MemoryRouter>
    );
    
    await user.click(screen.getByText('Portfolio'));
    expect(screen.getByTestId('location')).toHaveTextContent('/portfolio');
});

test('Navigate to home page', async () => {
    const user = userEvent.setup();

    render(
        <MemoryRouter initialEntries={['/portfolio']}>
            <Navigation />
            <LocationDisplay />
        </MemoryRouter>
    );
    
    await user.click(screen.getByText('Home'));
    expect(screen.getByTestId('location')).toHaveTextContent('/');
});

/*test('Tab through navigation links', () => {
    render(
        <MemoryRouter>
            <Navigation />
        </MemoryRouter>
    );

    const links: HTMLAnchorElement[] = screen.getAllByRole('link');
    for(let i = 0; i <= links.length; i++) {
        userEvent.tab();

    }

});*/