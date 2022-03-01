import ProjectCard from "./ProjectCard";
import { Section, ProjectsContainer, AllProjectsLink } from "../styles/projectssection";

const ProjectsSection = () => {
    return (
        <Section id="projects-section">
            <h2>Projetos</h2>
            <ProjectsContainer>
                <ProjectCard 
                    name="Loja de HQ's da Marvel" 
                    key="lojaMarvel"
                    deployLink="https://marvelcomics-desafio-brenorosado.vercel.app/"
                    codeLink="https://github.com/brenorosado/desafio-front-end-neoapp"
                    imagePath="https://user-images.githubusercontent.com/83065685/153672424-c1743caf-35e8-4a5a-b1f7-d7bdbb23ee35.png"
                />
                <ProjectCard 
                    name="Clone do OP.GG"
                    key="cloneOpGG"
                    deployLink=""
                    codeLink="https://github.com/brenorosado/frontend-lol-stats"
                    imagePath="https://user-images.githubusercontent.com/83065685/150190058-5aeb6baa-d087-4ce4-8992-177dc58994fd.png"
                />
                <ProjectCard 
                    name="Lista Telefônica (CRUD)"
                    key="listaTelefonica"
                    deployLink=""
                    codeLink="https://github.com/brenorosado/lista-telefonica"
                    imagePath="https://user-images.githubusercontent.com/83065685/155770502-27688d8b-020c-47d8-8743-32b29eb9163a.png"
                />
                <ProjectCard 
                    name="Grade Horária - Eng. Mecatrônica"
                    key="gradeHoraria"
                    deployLink="https://gradehoraria-engenhariamecatronica.vercel.app/"
                    codeLink="https://github.com/brenorosado/gradehoraria"
                    imagePath="https://user-images.githubusercontent.com/83065685/153673178-5a81536b-4b12-4f8d-87ca-5f09fb53c3a2.png"
                />
                <ProjectCard 
                    name="Futebol Dashboard"
                    key="futebolDashboard"
                    deployLink=""
                    codeLink="https://github.com/brenorosado/soccermatches"
                    imagePath="https://user-images.githubusercontent.com/83065685/148611797-2aad8494-cc7d-4bf6-ad17-b08170df9c23.png"
                />
                <ProjectCard 
                    name="Simulador de Investimentos"
                    key="simuladorInvestimentos"
                    deployLink=""
                    codeLink="https://github.com/brenorosado/desafio-front-end-eqi"
                    imagePath="https://user-images.githubusercontent.com/83065685/155766587-4fe181f9-d721-4b20-bddd-59a745904c28.png"
                />
            </ProjectsContainer>
            <AllProjectsLink><a href="https://github.com/brenorosado" target="_blank">Todos projetos</a></AllProjectsLink>
        </Section>
    );
};

export default ProjectsSection;