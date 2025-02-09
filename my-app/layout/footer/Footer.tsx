import { JSX } from "react";
import { FooterProps } from "./Footer.props";
import cn from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div className={styles.sec1}>MySite © 2024 - {format(new Date(), 'yyyy')} All rights reserved</div>
            <a href='#' target='_blank'>User Agreement</a>
            <a href='#' target='_blank'>Privecy Policy</a>
        </footer>
    );
};