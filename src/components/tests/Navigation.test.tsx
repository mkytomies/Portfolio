import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

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

describe('Navigation is keyboard accessible', () => {
    beforeEach(() => {
        global.innerWidth = 1400;
        global.dispatchEvent(new Event('resize'));
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
    });

    test('tab navigation moves through links', async () => {
        await userEvent.tab();
        expect(screen.getByText('Home')).toHaveFocus();
        await userEvent.tab();
        expect(screen.getByText('Portfolio')).toHaveFocus();
        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
        expect(screen.getByText('Home')).toHaveFocus();
    });
});