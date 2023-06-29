import { RatingProps } from './Rating.props';
import StarIcon from './star.svg'
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';


export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i:number)=>{

	return ( 
		<StarIcon
		className={cn(styles.star, {
			[styles.filled]: i < currentRating,
			[styles.editable]: isEditable
		})}
		 />
	);
	});
	setRatingArray(updatedArray);
};
return (
	<div {...props}>
		{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
	</div>
);
};