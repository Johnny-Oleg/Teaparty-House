import React from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';

import StarRating from './StarRating/StarRating';
import './Jrpg.css';

const Jrpg = ({ userId, id, description, rating }) => {
    // console.log(description);

    return (
        <li className="top__list-item nes-container is-rounded">
            <Tilt 
                className="list-item__img-wrapper"
                options={{ max : 40, perspective: 1000, easing: 'cubic-bezier(.03,.98,.52,.99)' }} 
                /* style={{ height: 250, width: 250 }} */ 
            >
                <img 
                    className="list-item__img"
                    src={process.env.PUBLIC_URL + description?.art} 
                    alt="jrpg" 
                />   
            </Tilt>
            <div className="list-item__info">
                <div className="nes-badge">
                    <span className="is-success">{`${id}`}</span>
                </div>
                <h3 className="list-item__title">
                    {`${description?.title}`}
                </h3>
                <div className="list-item__rating">
                    <span className="item__rating-text">Rating</span>
                    <StarRating userId={userId} id={id} rating={rating} />
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