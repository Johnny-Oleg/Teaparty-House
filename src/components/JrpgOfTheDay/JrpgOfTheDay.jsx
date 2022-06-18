import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './JrpgOfTheDay.css';

const JrpgOfTheDay = () => {
    const [jrpg, setJrpg] = useState(null);
    const users = useSelector(state => state.users.users);
    
    const random = arr => arr[Math.floor(Math.random() * arr.length)];

    useEffect(() => {
        const fetchRandomJrpg = async () => {
            const jrpgList = await users.map(user => user.top.map(item => item.description));
            const randomJrpg = await random([...new Set(jrpgList.flat())]);
            console.log(randomJrpg, 'Component did mount (of the day)');
            
            setJrpg(randomJrpg);
        }
        
        jrpg ?? fetchRandomJrpg();
    }, [jrpg, users]);

    const { title, art } = jrpg ?? '';

    return (
        <div className="selection nes-container is-rounded">
            <div className="selection__wrapper">
                <h4 className="selection__title">JRPG of the day:</h4>
                <img
                    className="selection__img"
                    src={process.env.PUBLIC_URL + art} 
                    alt="jrpg" 
                />
            </div>
            <p className="selection__subtitle">{title}</p>
        </div>
    )
}

export default JrpgOfTheDay;