import { BsGithub, BsGlobe } from 'react-icons/bs';
import { ProjectContainerArticle, ButtonsContainer, ProjectContent, ProjectLink, ProjectWrapperLink } from '../styles/projectcard';
import Image from 'next/image';

const ProjectCard = ({ name, deployLink, codeLink, imagePath }) => {
    return (
        <ProjectContainerArticle>
            <ProjectContent>
                <ProjectWrapperLink>
                    <h3>{name}</h3>
                    <Image src={imagePath} alt={name} width={320} height={180} />
                </ProjectWrapperLink>
                <ButtonsContainer>
                    <ProjectLink href={deployLink} target="_blank"><BsGlobe /></ProjectLink>
                    <ProjectLink href={codeLink} target="_blank"><BsGithub /></ProjectLink>
                </ButtonsContainer>
            </ProjectContent>
        </ProjectContainerArticle>
    );
};

export default ProjectCard;