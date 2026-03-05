import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import ProjectTile from "../ProjectTile";

const name = "Test Project";
const image = "https://test.url";
const description = "This is a test project";
const gitHub = "www.github.com";
const figma = "www.figma.com";

test('Render project tile', () => {
    render(
        <MemoryRouter>
            <ProjectTile
                name={name}
                image={image}
                description={description}
                gitHub={gitHub}
                figma={figma}
            />
        </MemoryRouter>
    );

    const projectTile = screen.getByTestId("projectTile");
    const projectImage = screen.getByTestId('projectImage');
    expect(projectTile).toBeInTheDocument();
    expect(screen.getByText(name).textContent).toMatch(name);
    expect(projectImage.getAttribute('src')).toContain(image);
    expect(screen.getByText(description).textContent).toMatch(description);
});