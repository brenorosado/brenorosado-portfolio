import { Section } from "../styles/contactsection";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <Section>
            <h2>Contato</h2>
            <div>
                <a><BsWhatsapp /></a>
                <a><BsGithub /></a>
                <a><BsLinkedin /></a>
                <a><MdEmail /></a>
            </div>
        </Section>
    );
};

export default ContactSection;