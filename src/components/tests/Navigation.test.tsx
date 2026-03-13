import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";
import { MemoryRouter, useLocation } from "react-router";
import userEvent from "@testing-library/user-event";

function LocationDisplay() {
    const location = useLocation();
    return <div data-testid='location'>{location.pathname}</div>;
}

describe('Navigation bar', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
    });

    test('render links', () => {
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
    });

    test('render correct ammount of links', () => {
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });

    test('links point to correct page', () => {
        const links: HTMLAnchorElement[] = screen.getAllByRole("link");

        expect(links[0].href).toContain("/");
        expect(links[1].href).toContain("/portfolio");
    });
});

describe('Navigation between pages', () => {
    test('from home to portfolio page', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Navigation />
                <LocationDisplay />
            </MemoryRouter>
        );

        await userEvent.click(screen.getByText('Portfolio'));
        expect(screen.getByTestId('location')).toHaveTextContent('/portfolio');
    });

    test('from portfolio to home page', async () => {
        render(
            <MemoryRouter initialEntries={['/portfolio']}>
                <Navigation />
                <LocationDisplay />
            </MemoryRouter>
        );

        await userEvent.click(screen.getByText('Home'));
        expect(screen.getByTestId('location')).toHaveTextContent('/');
    });

    test('active home link has bottom border', () => {
        render(
            <MemoryRouter>
                <Navigation />
                <LocationDisplay />
            </MemoryRouter>
        );

        expect(screen.getByTestId('location')).toHaveTextContent('/');

        const homeLink = screen.getByText('Home');
        const homeLinkStyles = getComputedStyle(homeLink);
        expect(homeLinkStyles.borderBottom).toContain('4px solid');

        const portfolioLink = screen.getByText('Portfolio');
        const portfolioLikStyles = getComputedStyle(portfolioLink);
        expect(portfolioLikStyles.borderBottom).not.toContain('4px solid');
    });

    test('close mobile menu after navigating to a different page', async () => {
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));

        render(
            <MemoryRouter initialEntries={['/']}>
                <Navigation />
                <LocationDisplay />
            </MemoryRouter>
        );

        await userEvent.click(screen.getByAltText('hamburger icon'));
        await userEvent.click(screen.getByText('Portfolio'));
        expect(screen.getByTestId('location')).toHaveTextContent('/portfolio');

        const mobileNav = screen.getByRole('navigation', { hidden: true });
        const styles = getComputedStyle(mobileNav);
        expect(styles.visibility).toBe('hidden');
    });
});

describe('Navigation bar on mobile', () => {
    beforeEach(() => {
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));

        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
    });

    test('mobile menu is closed by default', () => {
        const mobileNav = screen.getByRole('navigation', { hidden: true });
        const styles = getComputedStyle(mobileNav);

        expect(styles.visibility).toBe('hidden');
    });

    test('render hamburger icon', () => {
        expect(screen.getByAltText('hamburger icon')).toBeInTheDocument();
    });

    test('open menu when user clicks hamburger icon', async () => {
        const hamburgerIcon = screen.getByAltText('hamburger icon');
        await userEvent.click(hamburgerIcon);

        const mobileNav = screen.getByRole('navigation');
        const styles = getComputedStyle(mobileNav);

        expect(styles.visibility).toBe('visible');
    });

    test('close menu when user clicks x icon', async () => {
        const hamburgerIcon = screen.getByAltText('hamburger icon');
        await userEvent.click(hamburgerIcon);

        const xIcon = screen.getByAltText('x icon');
        await userEvent.click(xIcon);

        const mobileNav = screen.getByRole('navigation', { hidden: true });
        const styles = getComputedStyle(mobileNav);
        expect(styles.visibility).toBe('hidden');
    });
});

//TO DO: 
/*describe('Navigation is keyboard accessible', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
    });

    test('links are keyboard accessible', () => {

    });

    test('tab navigation moves through links', () => {

    })
});*/