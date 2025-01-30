import { JSX } from "react";
import { TagProps } from "./Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({children, color='ghost', size='medium', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.medium]: size == 'medium',
            [styles.small]: size == 'small',
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.red]: color == 'red',
            [styles.primary]: color == 'primary',
            [styles.grey]: color == 'grey',

        })}
        {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};