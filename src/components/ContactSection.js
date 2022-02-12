import { Section } from "../styles/contactsection";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";

const ContactSection = () => {
    return (
        <Section>
            <h2>Contato</h2>
            <div>
                <a><BsWhatsapp /></a>
                <a><FiAtSign /></a>
                <a><BsGithub /></a>
                <a><BsLinkedin /></a>
            </div>
        </Section>
    );
};

export default ContactSection;