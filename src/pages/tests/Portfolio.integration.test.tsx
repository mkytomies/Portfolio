import { render, screen, within } from '@testing-library/react';
import Portfolio from '../Portfolio';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Portfolio page', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Portfolio />
			</MemoryRouter>,
		);
	});

	test('renders correct number of tiles', () => {
		expect(screen.getAllByRole('article')).toHaveLength(4);
	});

	test('renders correct titles', () => {
		const projects = screen.getAllByRole('article');

		expect(projects[0].textContent).toContain('Portfolio');
		expect(projects[1].textContent).toContain('ReactDine');
		expect(projects[2].textContent).toContain('LockBox');
		expect(projects[3].textContent).toContain('Training Tracker');
	});

	test('renders images with alt text', () => {
		const pImage = screen.getByAltText('Picture of Portfolio');
		const rdImage = screen.getByAltText('Picture of ReactDine');
		const lbImage = screen.getByAltText('Picture of Lockbox');
		const ttImage = screen.getByAltText('Picture of Training Tracker');

		expect(pImage).toBeInTheDocument();
		expect(rdImage).toBeInTheDocument();
		expect(lbImage).toBeInTheDocument();
		expect(ttImage).toBeInTheDocument();
	});

	/*test('renders descriptions', () => {
        const projects = screen.getAllByRole('article');

        //TO DO: after adding descriptions test for the correct rendering
        [0,1,2,3].map(x => expect(projects[x].textContent).toContain('Description here, Description here, Description here,')); 
    });*/

	test('render github links', () => {
		const projects = screen.getAllByRole('article');

		projects.forEach((project) => {
			expect(project).toHaveTextContent('GitHub');
		});
	});

	test('github links point to correct URL', () => {
		const projects = screen.getAllByRole('article');

		const portfolioProject = projects[0];
		const reactDineProject = projects[1];
		const lockBoxProject = projects[2];
		const trainingTrackerProject = projects[3];

		const pGithhubLink = within(portfolioProject).getByRole('link', {
			name: /github/i,
		});
		const rdGithubLink = within(reactDineProject).getByRole('link', {
			name: /github/i,
		});
		const lbGithubLink = within(lockBoxProject).getByRole('link', {
			name: /github/i,
		});
		const ttGithubLink = within(trainingTrackerProject).getByRole('link', {
			name: /github/i,
		});

		expect(pGithhubLink).toHaveAttribute(
			'href',
			'https://github.com/mkytomies/Portfolio',
		);
		expect(rdGithubLink).toHaveAttribute(
			'href',
			'https://github.com/mkytomies/reactdine',
		);
		expect(lbGithubLink).toHaveAttribute(
			'href',
			'https://github.com/rassehub/lockbox-messenger',
		);
		expect(ttGithubLink).toHaveAttribute(
			'href',
			'https://github.com/Masuxd/TrainingTracker',
		);
	});

	test('only renders Figma button when link is provided', () => {
		const projects = screen.getAllByRole('article');

		expect(projects[0].textContent).toContain('Figma');
		expect(projects[1].textContent).toContain('Figma');
		expect(projects[2].textContent).toContain('Figma');
		expect(projects[3].textContent).not.toContain('Figma');
	});

	test('figma links point to correct URL', () => {
		const projects = screen.getAllByRole('article');

		const portfolioProject = projects[0];
		const reactDineProject = projects[1];
		const lockBoxProject = projects[2];

		const pFigmaLink = within(portfolioProject).getByRole('link', {
			name: /figma/i,
		});
		const rdFigmaLink = within(reactDineProject).getByRole('link', {
			name: /figma/i,
		});
		const lbFigmaLink = within(lockBoxProject).getByRole('link', {
			name: /figma/i,
		});

		expect(pFigmaLink).toHaveAttribute(
			'href',
			'https://www.figma.com/community/file/1623305769059810923/portfolio',
		);
		expect(rdFigmaLink).toHaveAttribute(
			'href',
			'https://www.figma.com/community/file/1549140004070639607/reactdine',
		);
		expect(lbFigmaLink).toHaveAttribute(
			'href',
			'https://www.figma.com/community/file/1549142127375815676/lockbox',
		);
	});

	test('user can navigate project tile buttons with keyboard', async () => {
		const projects = screen.getAllByRole('article');
		const portfolioProject = projects[0];
		const reactDineProject = projects[1];
		const lockBoxProject = projects[2];

		within(portfolioProject)
			.getByRole('link', { name: /github/i })
			.focus();
		await userEvent.tab();
		within(reactDineProject)
			.getByRole('link', { name: /github/i })
			.focus();
		await userEvent.tab();
		expect(
			within(reactDineProject).getByRole('link', { name: /figma/i }),
		).toHaveFocus();
		await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
		expect(
			within(reactDineProject).getByRole('link', { name: /github/i }),
		).toHaveFocus();
		await userEvent.keyboard('{Tab}{Tab}');
		expect(
			within(lockBoxProject).getByRole('link', { name: /github/i }),
		).toHaveFocus();
	});
});
