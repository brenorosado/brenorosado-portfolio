import { FooterContainer } from "../styles/footer";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";

const ContactSection = () => {
    return (
        <FooterContainer>
            <div>
                <a href="https://api.whatsapp.com/send?phone=5533998100776" target="_blank"><BsWhatsapp /></a>
                <a href="mailto:brenorosado.cjr@gmail.com" target="_blank"><FiAtSign /></a>
                <a href="https://github.com/brenorosado" target="_blank"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/brenorosado/" target="_blank"><BsLinkedin /></a>
            </div>
        </FooterContainer>
    );
};

export default ContactSection;