import { BsGithub, BsGlobe } from 'react-icons/bs';
import { ProjectContainerArticle, ButtonsContainer, ProjectLink, ProjectWrapperLink } from '../styles/projectcard';
import Image from 'next/image';

const ProjectCard = ({ name, deployLink, codeLink, imagePath }) => {
    return (
        <ProjectContainerArticle>
                <ProjectWrapperLink>
                    <h4>{name}</h4>
                    <Image src={imagePath} alt={name} width={288} height={162} />
                </ProjectWrapperLink>
                <ButtonsContainer>
                    <ProjectLink href={deployLink} target="_blank"><BsGlobe /></ProjectLink>
                    <ProjectLink href={codeLink} target="_blank"><BsGithub /></ProjectLink>
                </ButtonsContainer>
        </ProjectContainerArticle>
    );
};

export default ProjectCard;