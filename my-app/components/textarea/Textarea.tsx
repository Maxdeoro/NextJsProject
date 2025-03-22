import { JSX } from "react";
import { TextareaProps } from "./Textarea.props";
import styles from './Texarea.module.css';
import cn from 'classnames';

export const Textarea = ({className, ...props}: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props}></textarea>
    );
};