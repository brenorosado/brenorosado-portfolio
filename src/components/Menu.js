import { Header, Logo, MenuButton } from '../styles/menu';
import { FiMenu } from 'react-icons/fi';

const Menu = ({ ref }) => {
    return (
        <Header>
            <nav>
                <Logo href="/">Breno <strong>Rosado</strong></Logo>
                <MenuButton htmlFor='showMenu'>
                    <FiMenu/>
                </MenuButton>
                <input type="checkbox" id='showMenu' name='showMenu'/>
                <ul>
                    <li><a onClick={() => document.getElementById("projects-section").scrollIntoView()}>Projetos</a></li>
                    <li><a onClick={() => document.getElementById("curriculum-section").scrollIntoView()}>Currículo</a></li>
                    <li><a onClick={() => document.getElementById("contact-section").scrollIntoView()}>Contato</a></li>
                </ul>
            </nav>
        </Header>
    );
};

export default Menu;