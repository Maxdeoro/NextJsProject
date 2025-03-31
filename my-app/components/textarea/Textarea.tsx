import { ForwardedRef, forwardRef, JSX } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from './Texarea.module.css';
import cn from 'classnames';

export const Textarea = forwardRef(({className, error, ...props}: TextareaProps,
    ref:ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.textareaWrapper)}>
            <textarea className={cn( styles.textarea, {
                [styles.error]: error,
            })} ref={ref} {...props}/>
            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});