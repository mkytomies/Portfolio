import './styles/ProjectTile.css';
import Button from './Button';

type ProjectTileProps = {
    name: string;
    image: string;
    imageAlt: string;
    description: string;
    gitHub: string;
    figma?: string;
};

const ProjectTile = ({name, image, imageAlt, description, gitHub, figma}: ProjectTileProps) => {

    return(
        <>
            <div className="projectTile" role='article' data-testid="projectTile" data-cy="projectTile">
                <img className='projectImage' src={image} alt={imageAlt}  data-testid="projectImage" data-cy="projectImage" />
                <div className='projectDetails'>
                    <h2 className='projectName' data-cy="projectName">{name}</h2>
                    <p className='projectDescription' data-cy="projectDescription">{description}</p>
                    <div className='buttons' data-testid='buttons' data-cy="buttons">
                        <Button label='GitHub' to={gitHub} />
                        {figma ? <Button label='Figma' to={figma} />: null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectTile;