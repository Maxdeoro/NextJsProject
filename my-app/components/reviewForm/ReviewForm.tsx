import { JSX, useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../input/Input';
import { Rating } from '../rating/Rating';
import { Textarea } from '../textarea/Textarea';
import { Button } from '../button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setIsError] = useState<string>();
    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {
                ...formData, productId
            });
            if (data.message) {
                setIsSuccess(true);
                reset();                // clear data in the form
            } else {
                setIsError('Something went wrong!');
            }
        
        } catch (e: unknown) {
            if (e instanceof Error) {
                setIsError(e.message);
            } else {
                setIsError('An unknown error occurred');
            }
        }
        // catch (e: any) {
        //     setIsError(e.message);
        // }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input error={errors.name} 
                {...register('name', { required: { value: true, message: 'Enter your name, please' } })}
                placeholder='Name'/>

                <Input error={errors.title} 
                {...register('title', {required: { value: true, message: 'Fill the title, please'}})} 
                placeholder='Review title' 
                className={styles.reviewTitle}/>

                <div className={styles.rating}>
                    <span>Rating</span>
                    <Controller control={control} 
                    name='rating' 
                    rules={{required: {value: true, message: 'Set the rating'}}}
                    render={(field) => 
                        <Rating error={errors.rating} 
                        isEditable 
                        rating={field.field.value} 
                        ref={field.field.ref} 
                        setRating={field.field.onChange} />}>
                    </Controller>
                </div>

                <Textarea error={errors.description} 
                {...register('description', {required: {value: true, message: "Fill this fied, please"}})} 
                className={styles.description} 
                placeholder='Write review here'/>
                <div className={styles.submit}>
                    <Button appearance='primary' className={styles.button}>Send</Button>
                    <span>Before publication, the review will undergo preliminary moderation and verification.</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)}>
                <div className={styles.successTitle}>Your review has been sent.</div>
                <div>Thank you, your review will be published after verification.</div>
                <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
            </div>}
            {error && <div className={cn(styles.error, styles.panel)}>
                Something went wrong! Try to reload page.
                <CloseIcon className={styles.close} onClick={() => setIsError(undefined)}/>
            </div>}
        </form>
    );
};