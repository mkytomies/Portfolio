import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../Button';

const label = 'Github';
const to = 'https://github.com/mkytomies/';

describe('Button', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Button label={label} to={to} />
			</MemoryRouter>,
		);
	});

	test('render button with correct label', () => {
		const button = screen.getByText(label);
		expect(button).toBeInTheDocument();
	});

	test('link has the correct URL', () => {
		const link: HTMLAnchorElement = screen.getByRole('link');
		expect(link.href).toContain(to);
	});
});
