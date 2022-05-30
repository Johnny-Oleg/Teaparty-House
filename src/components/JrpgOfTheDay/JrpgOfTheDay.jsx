import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './JrpgOfTheDay.css';

const JrpgOfTheDay = () => {
    const [jrpg, setJrpg] = useState(null);
    const users = useSelector(state => state.usersReducer.users);
    
    const random = arr => arr[Math.floor(Math.random() * arr.length)];

    // useLayoutEffect(() => {
    //     // window.addEventListener('load', () => setJrpg(randomJrpg));

    //     console.log(jrpg, 'Component did mount (of the day)');
    // }, [jrpg, randomJrpg]);

    // const jrpgList = users.map(user => user.top.map(item => item.description));
    // const randomJrpg = useMemo(() => random([...new Set(jrpgList.flat())]), []);
    // const { title, art } = randomJrpg ?? '';

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
        <div className="day__container">
            <span>JRPG of the day:</span>
            <span>{title}</span>
            <img
                src={process.env.PUBLIC_URL + art} 
                alt="jrpg" 
            />
        </div>
    )
}

export default JrpgOfTheDay;