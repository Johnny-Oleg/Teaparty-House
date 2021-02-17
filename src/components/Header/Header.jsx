import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./images/teaparty-house-logo.png" alt="logo"/>
            </div>
            <span>Teaparty House | ティーパーティーハウス</span>
            <br/>
            <span>Welcome, gentlemen! | ようこそ、殿方！</span>
      </header>
    )
}

export default Header;