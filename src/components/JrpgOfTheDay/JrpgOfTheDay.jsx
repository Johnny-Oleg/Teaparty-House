import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const JrpgOfTheDay = ({ users }) => {
    const [jrpg, setJrpg] = useState('');
    const jrpgListTitle = users.map(user => user.top.map(item => item.description.title));
    const randomJrpgTitle = random([...new Set(jrpgListTitle.flat())]);
    
    //console.log(randomJrpgTitle, 'wtf?');
    // setJrpg(randomJrpgTitle);
    useEffect(() => {
        // const jrpgListTitle = users.map(user => user.top.map(item => item.description.title));
        // const randomJrpgTitle = random([...new Set(jrpgListTitle.flat())]);
        // console.log(randomJrpgTitle, 'wtf?');

        // window.addEventListener('DOMContentLoaded', (e) => setJrpg(randomJrpgTitle));
        console.log('Component did mount (of the day)');
    }, [])

    window.addEventListener('load', () => setJrpg(randomJrpgTitle));
    // const jrpgListTitle = users.map(user => user.top.map(item => item.description.title));
    // const jrpgListArt = users.map(user => user.top.map(item => item.description.art));
    // console.log(jrpgListTitle, 'wtf?');
    // const randomJrpg = random([...new Set(jrpgListTitle.flat(), jrpgListArt.flat())]); //! title + art

    return (
        <div>
            <span>JRPG of the day: {jrpg}</span>
            {/* <span>JRPG of the day: {jrpgListTitle.map(item => item.description.title)}</span> */}
            {/* <img className="Tilt-inner"
                src={process.env.PUBLIC_URL + randomJrpgArt} 
                style={{width: "150px", height: "auto"}} 
                alt="jrpg" 
            />   */}
        </div>
    )
}

JrpgOfTheDay.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

export default JrpgOfTheDay;