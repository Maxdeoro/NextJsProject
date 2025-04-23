import { ForwardedRef, forwardRef, JSX, KeyboardEvent, useEffect, useRef, useState, createRef } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = forwardRef(({isEditable=false, rating, setRating, error,
    tabIndex, ...props}: RatingProps, 
    ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>([]);
    const ratingArrayRef = Array.from({length: 5}, () => createRef<HTMLSpanElement>());
    const computeFocus = (r: number, i: number): number => {
        if(!isEditable) {
            return -1;
        }
        if(!rating && i == 0) {
            return tabIndex ?? 0;
        }
        if(r == i + 1) {
            return tabIndex ?? 0;
        }
        return -1;
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating, tabIndex]);

    const constructRating = (currentRating: number) => {
        const updatedArray = Array.from({length: 5}, (_, i) => {
            return (
                <span key={i} className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)} 
                    onMouseLeave={() => changeDisplay(rating)} 
                    onClick={() => onClick(i + 1)} 
                    tabIndex={isEditable ? computeFocus(rating, i) : -1} 
                    onKeyDown={handleKey}
                    ref={ratingArrayRef[i]} 
                    role={isEditable ?'slider' : ""}
                    aria-invalid={error ? true : false}
                    aria-valuenow={rating} 
                    aria-valuemin={1} 
                    aria-valuemax={5} 
                    aria-label={isEditable ? 'Set rating' : ('Rating' + rating)} 
                >
                    <StarIcon />
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

    const handleKey = ( e: KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }
        if(e.code == 'ArrowRight' || e.code == 'ArrowUp') {
            if(!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
            }
            ratingArrayRef[rating]?.current?.focus();
        }
        if(e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 1);
            ratingArrayRef[rating - 2]?.current?.focus();
        }
    }

    return (
        <div ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error,
        })} {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {/* {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>} */}
            {error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
