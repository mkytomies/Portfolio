import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectTile from '../ProjectTile';

const name = 'Test Project';
const image = 'https://test.url';
const imageAlt = 'Image alt';
const description = 'This is a test project';
const gitHub = 'www.github.com';
const figma = 'www.figma.com';

describe('Project tile with figma button', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<ProjectTile
					name={name}
					image={image}
					imageAlt={imageAlt}
					description={description}
					gitHub={gitHub}
					figma={figma}
				/>
			</MemoryRouter>,
		);
	});

	test('render project tile', () => {
		expect(screen.getByRole('article')).toBeInTheDocument();
	});

	test('render h2 title with the project name', () => {
		const title = screen.getByRole('heading', { level: 2 });
		expect(title).toHaveTextContent(name);
	});

	test('render image with the correct src', () => {
		const projectImage = screen.getByAltText(imageAlt);
		expect(projectImage).toHaveAttribute('src', image);
	});

	// NOTE: maybe redundant
	test('render project description', () => {
		expect(screen.getByText(description)).toHaveTextContent(description);
	});

	test('render both buttons', () => {
		const buttons = screen.getAllByRole('link');
		expect(buttons).toHaveLength(2);
	});

	test('github button has the correct url', () => {
		const githubButton: HTMLAnchorElement = screen.getByText('GitHub');
		expect(githubButton.href).toContain(gitHub);
	});

	test('figma button has the correct url', () => {
		const figmaButton: HTMLAnchorElement = screen.getByText('Figma');
		expect(figmaButton.href).toContain(figma);
	});
});

describe('Project tile without Figma button', () => {
	test('does not render Figma button', () => {
		render(
			<MemoryRouter>
				<ProjectTile
					name={name}
					image={image}
					imageAlt={imageAlt}
					description={description}
					gitHub={gitHub}
				/>
			</MemoryRouter>,
		);

		expect(screen.queryByText('Figma')).not.toBeInTheDocument();
	});
});
