import React from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';

import './Jrpg.css';

const Jrpg = ({ id, description }) => {
    console.log(description);

    return (
        <li className="top__list-item nes-container is-rounded">
            <Tilt 
                className="list-item__img-wrapper"
                options={{max : 40, perspective: 1000, easing: "cubic-bezier(.03,.98,.52,.99)"}} 
                /* style={{ height: 250, width: 250 }} */ 
            >
                <img 
                    className="list-item__img"
                    src={process.env.PUBLIC_URL + description?.art} 
                    alt="jrpg" 
                />   
            </Tilt>
            <div className="list-item__info">
                <h3 className="list-item__title">
                    <span>{`${id}) `}</span>
                    {`${description?.title}`}
                </h3>
                <div className="list-item__rating">
                    <i class="nes-icon star"></i>
                    <i class="nes-icon star"></i>
                    <i class="nes-icon star"></i>
                    <i class="nes-icon star"></i>
                    <i class="nes-icon star is-empty"></i>
                </div>
            </div>
        </li>
    )
}

Jrpg.propTypes = {
    id: PropTypes.number || PropTypes.string,
    description: PropTypes.objectOf(PropTypes.string),
}

export default Jrpg;