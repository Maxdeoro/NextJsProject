import { JSX } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { Card, Htag, Tag } from '../../components';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='green' size='medium'>{products.length}</Tag>}   {/* if products exist... */}
                <span>Here's sorting</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Jobs - {page.category}</Htag>
                <Tag color='red'>Jobs</Tag>
            </div>
            <div className={styles.hh}>
                <Card className={styles.hhCount}>
                    <div className={styles.hhStatTitle}>Total vacancies</div>
                    <div className={styles.hhStatCount}>{page.hh.count}</div>
                </Card>
            </div>
        </div>
    );
};