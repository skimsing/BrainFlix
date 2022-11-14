import logo from '../assets/images/Logo/BrainFlix-logo.svg';
import iconImg from '../assets/images/Images/Mohan-muruge.jpg';
import uploadIcon from '../assets/images/Icons/upload.svg';
import searchIcon from '../assets/images/Icons/search.svg'


import { Link } from 'react-router-dom';

function Header(props) {
    
    return (
        <header className="header">
            <div className="header__container">

                <Link to="/">
                    <div className="header__logo">
                        <img className="header__logoIcon" src={logo} alt="brain-flix logo"></img>
                    </div>
                </Link>

                <div className="header__contents">

                    <div className="header__items">
                        <div className='header__searchStyling'>
                            <img className='header__searchIcon' src={searchIcon}></img>
                            <label htmlFor="search"></label>
                            <input className="header__search" name="search" placeholder="Search..." />
                        </div>
                        <div className="header__profile">
                            <img className="header__mobileProfileImg" src={iconImg} alt="profile image"/>
                        </div>
                    </div>

                    <Link to="/upload">
                        <button className="header__uploadBtn">
                            <img className='header__uploadIcon' src={uploadIcon}></img>
                            Upload
                        </button>
                    </Link>
                    
                    <div className="header__profile">
                        <img className="header__tabletProfileImg" src={iconImg} alt="profile image"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;