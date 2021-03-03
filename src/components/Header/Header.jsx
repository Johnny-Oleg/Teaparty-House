import React from 'react';

import ChangeThemeButton from './ChangeThemeButton/ChangeThemeButton';
import './Header.css';

const Header = ({ handleTheme, theme }) => {
    return (
        <header className={`header ${theme ? 'dark' : ''}`}>
            <div className="logo">
                <img src="./images/teaparty-house-logo.png" alt="logo"/>
            </div>
            <ChangeThemeButton handleTheme={handleTheme} theme={theme} />
            <span>Teaparty House | ティーパーティーハウス</span>
            <span>Welcome, gentlemen! | ようこそ、殿方！</span>
      </header>
    )
}

export default Header;