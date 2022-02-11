import { BsGithub, BsGlobe } from 'react-icons/bs';
import { ProjectContainerArticle, ButtonsContainer } from '../styles/projectcard';
import Image from 'next/image';

const ProjectCard = ({ name, deployLink, codeLink, imagePath }) => {
    return (
        <ProjectContainerArticle>
            <a>
                    <h3>{name}</h3>
                    <Image src={imagePath} alt={name} width={320} height={180}/>
            </a>
            <ButtonsContainer>
                <a href={deployLink} target="_blank"><BsGlobe /></a>
                <a href={codeLink} target="_blank"><BsGithub /></a>
            </ButtonsContainer>
        </ProjectContainerArticle>
    );
};

export default ProjectCard;