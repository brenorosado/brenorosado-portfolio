import { SiJavascript, SiNextdotjs, SiReact, SiNodedotjs, SiStyledcomponents, SiHtml5, SiCss3, SiCypress, SiMysql } from 'react-icons/si';
import { Section, StackIcon } from '../styles/stacksection';

const StackSection = () => {
    return (
        <Section>
            <h2>Stack</h2>
            <div>
                <StackIcon color="#ead41c">
                    <SiJavascript />
                    <span>Javascript</span>
                </StackIcon>
                <StackIcon color="#e54c21">
                    <SiHtml5 />
                    <span>HTML5</span>
                </StackIcon>
                <StackIcon color="#264de4">
                    <SiCss3 />
                    <span>CSS3</span>
                </StackIcon>
                <StackIcon color="#d976b2">
                    <SiStyledcomponents />
                    <span>Styled-components</span>
                </StackIcon>
                <StackIcon color="#80d8f7">
                    <SiReact />
                    <span>React</span>
                </StackIcon>
                <StackIcon color="grey">
                    <SiNextdotjs />
                    <span>Next</span>
                </StackIcon>
                <StackIcon color="#88c043">
                    <SiNodedotjs />
                    <span>Node</span>
                </StackIcon>
                <StackIcon color="grey">
                    <SiCypress />
                    <span>Cypress</span>
                </StackIcon>
                <StackIcon color="#f29111">
                    <SiMysql />
                    <span>MySQL</span>
                </StackIcon>
            </div>
        </Section>
    );
};

export default StackSection;