import Navigation from '../Navigation';
import { renderWithRouter } from '../../test-utils';
import { useLocation } from 'react-router';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

function LocationDisplay() {
	const location = useLocation();
	return <div data-testid="location">{location.pathname}</div>;
}

describe('Navigation', () => {
	test('from home to projects page', async () => {
		renderWithRouter(
			<>
				<Navigation />
				<LocationDisplay />
			</>,
		);

		await userEvent.click(screen.getByText('Projects'));
		expect(screen.getByTestId('location')).toHaveTextContent('/projects');
	});

	test('from projects to home page', async () => {
		renderWithRouter(
			<>
				<Navigation />
				<LocationDisplay />
			</>,
			{ route: '/projects' },
		);

		await userEvent.click(screen.getByText('Home'));
		expect(screen.getByTestId('location')).toHaveTextContent('/');
	});

	test('active home link has bottom border', () => {
		renderWithRouter(
			<>
				<Navigation />
				<LocationDisplay />
			</>,
		);

		expect(screen.getByTestId('location')).toHaveTextContent('/');

		const homeLink = screen.getByText('Home');
		const homeLinkStyles = getComputedStyle(homeLink);
		expect(homeLinkStyles.borderBottom).toContain('4px solid');

		const portfolioLink = screen.getByText('Projects');
		const portfolioLikStyles = getComputedStyle(portfolioLink);
		expect(portfolioLikStyles.borderBottom).not.toContain('4px solid');
	});

	test('close mobile menu after navigating to a different page', async () => {
		global.innerWidth = 500;
		global.dispatchEvent(new Event('resize'));

		renderWithRouter(
			<>
				<Navigation />
				<LocationDisplay />
			</>,
		);

		await userEvent.click(screen.getByAltText('hamburger icon'));
		await userEvent.click(screen.getByText('Projects'));
		expect(screen.getByTestId('location')).toHaveTextContent('/projects');

		const mobileNav = screen.getByRole('navigation', { hidden: true });
		const styles = getComputedStyle(mobileNav);
		expect(styles.visibility).toBe('hidden');
	});
});
