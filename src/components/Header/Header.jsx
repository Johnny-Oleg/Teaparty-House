import React from 'react';

import ChangeThemeButton from './ChangeThemeButton/ChangeThemeButton';
import './Header.css';

const Header = ({ handleTheme, theme }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="logo">
                        <img className="logo__img" src="./images/teaparty-house-logo.png" alt="logo"/>
                    </div>
                    <ChangeThemeButton handleTheme={handleTheme} theme={theme} />
                    <p className="header__name">
                        Teaparty House&nbsp;
                        <span>ティーパーティーハウス</span>
                    </p>
                    <p className="header__greetings">
                        Welcome, gentlemen!&nbsp;        
                        <span>ようこそ、殿方！</span>
                    </p>
                </div> 
            </div>
        </header>
    )
}

export default Header;