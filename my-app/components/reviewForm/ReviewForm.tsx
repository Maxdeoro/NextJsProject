import { JSX } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../input/Input';
import { Rating } from '../rating/Rating';
import { Textarea } from '../textarea/Textarea';
import { Button } from '../button/Button';
import CloseIcon from './close.svg';

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    return (
        <>
        <div className={cn(styles.reviewForm, className)} {...props}>
            <Input placeholder='Name'/>
            <Input placeholder='Review title' className={styles.reviewTitle}/>
            <div className={styles.rating}>
                <span>Rating</span>
                <Rating rating={2}/>
            </div>
            <Textarea className={styles.description} placeholder='Write review here'/>
            <div className={styles.submit}>
                <Button appearance='primary' className={styles.button}>Send</Button>
                <span>Before publication, the review will undergo preliminary moderation and verification.</span>
            </div>
        </div>
        <div className={styles.success}>
            <div className={styles.successTitle}>Your review has been sent.</div>
            <div>Thank you, your review will be published after verification.</div>
            <CloseIcon className={styles.close}/>
        </div>
        </>
    );
};