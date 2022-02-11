import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Section } from '../styles/apresentationsection';

const ApresentationSection = () => {
    return (
        <Section>
            <article>
                <h1>Breno <strong>Rosado</strong></h1>
                <span>Entusiasmado desenvolvedor web</span>
            </article>
            <article>
                <a href="https://github.com/brenorosado" target="_blank"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/brenorosado/" target="_blank"><BsLinkedin /></a>
            </article>
        </Section>
    );
};

export default ApresentationSection;