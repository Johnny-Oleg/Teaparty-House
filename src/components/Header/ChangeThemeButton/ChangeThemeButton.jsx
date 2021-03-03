import React from 'react';

import './ChangeThemeButton.css';

const ChangeThemeButton = ({ handleTheme, theme }) => {
    // const [themeDark, setThemeDark] = React.useState(false);
    // const [checked, setChecked] = React.useState(false);

    // React.useEffect(() => {
    //     const currentTheme = localStorage.getItem('theme-color');

    //     currentTheme === 'dark' ? setThemeDark(true) : setThemeDark(false);
    // }, [])

    // const handleClick = () => {
    //     if (themeDark) {
    //         localStorage.setItem('theme-color', 'light');

    //         setThemeDark(false);
    //     } else {
    //         localStorage.setItem('theme-color', 'dark');

    //         setThemeDark(true);
    //     }    
    // }

    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" for="checkbox" onClick={handleTheme}>
                <input className="checkbox" type="checkbox" checked={theme}/>
                <div className="slider round animated"></div>
            </label>
        </div>
    )
}

export default ChangeThemeButton;