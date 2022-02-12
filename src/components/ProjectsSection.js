import ProjectCard from "./ProjectCard";
import { Section, AllProjectsLink } from "../styles/projectssection";

const ProjectsSection = () => {
    return (
        <>
            <h2>Projetos</h2>
            <Section>
                <ProjectCard 
                    name="Loja de HQ's da Marvel" 
                    key="lojaMarvel"
                    deployLink="https://marvelcomics-desafio-brenorosado.vercel.app/"
                    codeLink="https://github.com/brenorosado/desafio-front-end-neoapp"
                    imagePath="https://user-images.githubusercontent.com/83065685/153672424-c1743caf-35e8-4a5a-b1f7-d7bdbb23ee35.png"
                />
                <ProjectCard 
                    name="Grade Horária - Eng. Mecatrônica"
                    key="gradeHoraria"
                    deployLink="https://gradehoraria-engenhariamecatronica.vercel.app/"
                    codeLink="https://github.com/brenorosado/gradehoraria"
                    imagePath="https://user-images.githubusercontent.com/83065685/153673178-5a81536b-4b12-4f8d-87ca-5f09fb53c3a2.png"
                />
            </Section>
            <AllProjectsLink><a href="https://github.com/brenorosado" target="_blank">Todos projetos</a></AllProjectsLink>
        </>
    );
};

export default ProjectsSection;