import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import './JrpgOfTheDay.css';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const JrpgOfTheDay = ({ users }) => {
    const [jrpg, setJrpg] = useState({});

    const jrpgListTitle = users.map(user => user.top.map(item => item.description));
    const randomJrpgTitle = useMemo(() => random([...new Set(jrpgListTitle.flat())]), []); //? jrpgListTitle
    console.log(randomJrpgTitle);
    
    useEffect(() => {
        // const jrpgListTitle = users.map(user => user.top.map(item => item.description.title));
        // const randomJrpgTitle = random([...new Set(jrpgListTitle.flat())]);
        // console.log(randomJrpgTitle, 'wtf?');
        // window.addEventListener('DOMContentLoaded', (e) => setJrpg(randomJrpgTitle));

        window.addEventListener('load', () => setJrpg(randomJrpgTitle)); //?
        console.log(jrpg, 'Component did mount (of the day)');
    }, [jrpg, randomJrpgTitle]);

    // window.addEventListener('load', () => setJrpg(randomJrpgTitle)); //?

    return (
        <div className="day__container">
            <span>JRPG of the day:</span>
            <span>{jrpg?.title}</span>
            <img
                src={process.env.PUBLIC_URL + jrpg?.art} 
                alt="jrpg" 
            />
        </div>
    )
}

JrpgOfTheDay.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

export default JrpgOfTheDay;