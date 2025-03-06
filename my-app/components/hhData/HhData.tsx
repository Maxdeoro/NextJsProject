import { JSX } from "react";
import { HhDataProps } from "./HhData.props";
import styles from './HhData.module.css';
import cn from 'classnames';
import { Card } from "../card/Card";

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div></div>
                <div></div>
            </Card>
            <Card className={styles.salary}>
                <div></div>
                <div></div>
                <div></div>
            </Card>
        </div>
    );
};