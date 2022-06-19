import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addStarRating } from '../../../../../../reducers/users/usersSlice';
import './StarRating.css';

const StarRating = ({ id, rating }) => {
	const [starRating, setStarRating] = useState(rating);
    const [hover, setHover] = useState(0);
    const [clicked, setClicked] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setStarRating(rating)
		console.log(rating);
	}, [rating])

	const handleRating = stars => {
		if (clicked) return;

		setStarRating(stars);
		setClicked(true);
		dispatch(addStarRating({ id, stars }));
	}
	
	return (
		<div>
			{			
				[...Array(5)].map((star, index) => {
					star = 'nes-icon star';
					index += 1;
			
					return (
						<button
							key={index}
							onClick={() => handleRating(index)}
							onMouseEnter={() => !clicked && setHover(index)}
							onMouseLeave={() => !clicked && setHover(starRating)}
							onDoubleClick={() => {
								setStarRating(0);
								setHover(0);
								setClicked(false);
							}}
						>
							<i
								className={index <= (hover || starRating) ? star : `${star} is-empty`}
							/>
						</button>
					)
				})
			}
		</div>
	)
}

StarRating.propTypes = {
	id: PropTypes.number,
	rating: PropTypes.number
}

export default StarRating;