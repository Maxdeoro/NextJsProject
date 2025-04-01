import { ForwardedRef, forwardRef, JSX, KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = forwardRef(({isEditable=false, rating, setRating, error, ...props}: RatingProps, 
    ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));    // initial state of rating stars

    useEffect(() => {
        constructRating(rating);
        }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)} 
                    onMouseLeave={() => changeDisplay(rating)} 
                    onClick={() => onClick(i + 1)} 
                >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1} 
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => {
                            isEditable && handleSpace(i + 1, e);
                        }}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }

    return (
        <div ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error,
        })} {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
