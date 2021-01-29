import React, { useEffect, useState, useContext} from 'react';
import './styles.css';
import '../../bootstrap-4.5.3-dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import HomePage from '../HomePage';
import Potions from '../Potions';
import History from '../History';

import PotionsContext from '../../contexts/potions';

const Home: React.FC = () => {
    const [component, setComponent] = useState<JSX.Element>();
    const { getPotions } = useContext(PotionsContext);

    useEffect(() => {
        setComponent(<HomePage />);
    }, []);

    async function handleSelectedField(componentName: string) {
        switch(componentName) {
            case 'Home':
                setComponent(<HomePage />);
                break;
            case 'Potions':
                setComponent(<Potions props={{content: (await getPotions()).content}} />);
                break;
            case 'History':
                setComponent(<History />);
        }
    }
    const[click,setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div id="home-page">
            <div className="content">
                <header className="header">
                    <div className="header-logo">
                        <h1 className="header-text">Poções e Soluções</h1>
                        <img src={logo} alt="logo" className="img-logo"/>
                    </div>
                </header>
                    <div className="navbar">
                        <div className="navbar-container container">
                            <div className="menu-icon" onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}   
                            </div>
                            <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
                                <li className='nav-item' onClick={() => handleSelectedField("Home")}>
                                    Início
                                </li>
                                <li className='nav-item' onClick={() => handleSelectedField("Potions")}>
                                    Poções e Soluções
                                </li>
                                <li className='nav-item' onClick={() => handleSelectedField("History")}>
                                    Nossa História
                                </li>
                            </ul>
                        </div>
                    </div>
                <form>
                    {
                        component
                    }
                </form>
                <footer>
                    <div className="footer-information">
                        <div>
                            <a className="link" href="mailto:pocoesolucoes@outlook.com">pocoesolucoes@outlook.com</a>
                            <p>Beco Vertical, número 789<br/>Desenvolvido por: Hiago Indalécio</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;