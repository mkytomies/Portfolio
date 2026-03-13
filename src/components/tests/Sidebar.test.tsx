import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import userEvent from "@testing-library/user-event";

describe('Sidebar on desktop', () => {
    beforeEach(() => {
        render(
            <Sidebar />
        );
    });

    test('render sidebar', () => {
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Contact & Socials')).toBeInTheDocument();
    });

    test('arrow should not be visible', () => {
        const arrow = screen.getByTestId('arrow');
        const styles = getComputedStyle(arrow);
        expect(styles.visibility).toBe('hidden');
    });
});

describe('Sidebar on mobile', () => {
    beforeEach(() => {
        global.innerWidth = 500;
        global.dispatchEvent(new Event('resize'));

        render(
            <Sidebar />
        );
    });

    test('render sidebar with arrow', async () => {
        const arrow = screen.getByTestId('arrow');
        const styles = getComputedStyle(arrow);
        expect(styles.visibility).toBe('visible');
    });

    test('sidebar should be closed by default on mobile', () => {
        const sidebarContainer = screen.getByTestId('sidebarContainer');
        const styles = getComputedStyle(sidebarContainer);
        expect(styles.left).toBe('-74%');
    });

    test('sidebar should open and close when user click arrow on mobile', async () => {
        await userEvent.click(screen.getByAltText('Right pointing arrow'));

        const sidebarContainer = screen.getByTestId('sidebarContainer');
        const styles = getComputedStyle(sidebarContainer);
        expect(styles.left).toBe('0px');

        await userEvent.click(screen.getByAltText('Left pointing arrow'));
        const updatedStyles = getComputedStyle(sidebarContainer);
        expect(updatedStyles.left).toBe('-74%');
    });
});