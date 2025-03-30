import { ForwardedRef, forwardRef, JSX } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from './Texarea.module.css';
import cn from 'classnames';

export const Textarea = forwardRef(({className, ...props}: TextareaProps,
    ref:ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} ref={ref} {...props}></textarea>
    );
});