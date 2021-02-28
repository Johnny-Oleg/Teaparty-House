import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const JrpgOfTheDay = ({ users }) => {
    const [jrpg, setJrpg] = useState({});

    const jrpgListTitle = users.map(user => user.top.map(item => item.description));
    const randomJrpgTitle = random([...new Set(jrpgListTitle.flat())]);
    console.log(randomJrpgTitle);
    
    useEffect(() => {
        // const jrpgListTitle = users.map(user => user.top.map(item => item.description.title));
        // const randomJrpgTitle = random([...new Set(jrpgListTitle.flat())]);
        // console.log(randomJrpgTitle, 'wtf?');

        // window.addEventListener('DOMContentLoaded', (e) => setJrpg(randomJrpgTitle));
        console.log(jrpg, 'Component did mount (of the day)');
    }, [jrpg])

    window.addEventListener('load', () => setJrpg(randomJrpgTitle));

    return (
        <div>
            <span>JRPG of the day:</span>
            <span>{jrpg?.title}</span>
            <img
                src={process.env.PUBLIC_URL + jrpg?.art} 
                style={{width: "100px", height: "auto"}} 
                alt="jrpg" 
            />
        </div>
    )
}

JrpgOfTheDay.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

export default JrpgOfTheDay;