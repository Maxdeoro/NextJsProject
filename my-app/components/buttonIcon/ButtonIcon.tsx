import { JSX } from "react";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import cn from 'classnames';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({icon, appearance='primary', className, ...props}: 
    ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];

    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.white]: appearance == 'white',
        })} {...props}
        >
            <IconComp/>
        </button>
    );
};