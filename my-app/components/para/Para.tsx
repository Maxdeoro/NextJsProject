import { ParaProps } from "./Para.props";
import styles from "./Para.module.css";
import { JSX } from "react";
import cn from 'classnames';
import classNames from "classnames";

export const Paragraf = ({children, fontSize='medium', className, ...props}: ParaProps): JSX.Element => {

    return (
        <p className={cn(styles.p, className, {
            [styles.small]: fontSize == 'small',
            [styles.medium]: fontSize == 'medium',
            [styles.large]: fontSize == 'large',
        })} {...props}>
            {children}
        </p>
    );
};
