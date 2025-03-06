import { JSX } from "react";
import { CardProps } from "./Card.props";
import styles from './Card.module.css';
import cn from 'classnames';
import classNames from "classnames";

export const Card = ({color='white', children, ...props}: CardProps): JSX.Element => {
    return (
        <div className={cn(styles.card, classNames, {
            [styles.blue]: color === 'blue',
        })} {...props}>
            {children}
        </div>
    );
};