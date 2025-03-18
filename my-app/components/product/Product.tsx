import { JSX } from "react";
import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from "../card/Card";
import { Rating } from "../rating/Rating";
import { Tag } from "../tag/Tag";
import { Button } from "../button/Button";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            {/* <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div> */}
            <div className={styles.logo}><img src={product.image} alt={product.title}/></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map((c) => {
                return <Tag key={c} color="ghost">{c}</Tag>
            })}</div>
            <div className={styles.priceTitle}>Price</div>
            <div className={styles.creditTitle}>Credit</div>
            <div className={styles.reviewTitle}>{product.reviewCount}Reviews</div>
            <div className={styles.hr}><hr/></div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>FEATURES</div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                    <div>Advantages</div>
                    <div>{product.advantages}</div>
                </div>
                <div className={styles.disadvantages}>
                    <div>Disadvantages</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>
            <div className={styles.hr}><hr/></div>
            <div className={styles.actions}>
                <Button appearance="primary">Learn more</Button>
                <Button appearance="ghost" arrow={"right"} className={styles.reviewButton}>
                    Read reviews
                </Button>
            </div>
        </Card>
    );
};