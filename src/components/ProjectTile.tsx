import './styles/ProjectTile.css';
import Button from './Button';

type ProjectTileProps = {
    name: string;
    image: string;
    description: string;
    gitHub: string;
    figma?: string;
};

const ProjectTile = ({name, image, description, gitHub, figma}: ProjectTileProps) => {

    return(
        <>
            <div className="projectTile" data-testid="projectTile">
                <img className='projectImage' src={image} data-testid="projectImage" />
                <div className='projectDetails'>
                    <h2 className='projectName'>{name}</h2>
                    <p className='projectDescription'>{description}</p>
                    <div className='buttons'>
                        <Button label='GitHub' to={gitHub} />
                        {figma ? <Button label='Figma' to={figma} />: null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectTile;