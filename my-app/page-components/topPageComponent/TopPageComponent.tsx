import { JSX } from 'react';
import TopPageComponentProps from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <>
            {products && products.lenght}
        </>
    );
};