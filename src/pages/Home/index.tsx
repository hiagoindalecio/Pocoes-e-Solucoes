import React, { useEffect, useState} from 'react';
import './styles.css';
import '../../bootstrap-4.5.3-dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import Home_page from '../Home_page';
import Potions from '../Potions';
import History from '../History';

const Home = () => {
    const [component, setComponent] = useState<JSX.Element>();
    useEffect(() => {
        setComponent(Home_page);
    }, [])
    function handleSelectedField(componentName: string) {
        switch(componentName) {
            case 'Home':
                setComponent(Home_page);
                break;
            case 'Potions':
                setComponent(Potions);
                break;
            case 'History':
                setComponent(History);
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
                        <p>
                            <a href="mailto:pocoesolucoes@outlook.com">pocoesolucoes@outlook.com</a>
                            <p>Beco Vertical, número 789<br/>Desenvolvido por: Hiago Indalécio</p>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;