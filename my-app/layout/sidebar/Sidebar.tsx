import { JSX } from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import { Menu } from "../menu/menu";
import Logo from '../logo.svg';
import cn from 'classnames';

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo}/>
            <div>SEARCH</div>
            <Menu/>
        </div>
    );
};