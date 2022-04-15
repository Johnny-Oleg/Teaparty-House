import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import usersReducer from '../../reducers/users/usersReducer';
import './JrpgOfTheDay.css';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const JrpgOfTheDay = ({ users }) => {
    const [jrpg, setJrpg] = useState(null);
    
    // useEffect(() => {
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

JrpgOfTheDay.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({ users: state.usersReducer.users });
// const mapDispatchToProps = { usersReducer };

export default connect(mapStateToProps)(JrpgOfTheDay);