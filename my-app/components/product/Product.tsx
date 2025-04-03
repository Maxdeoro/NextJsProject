import { JSX, useRef, useState } from "react";
import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from "../card/Card";
import { Rating } from "../rating/Rating";
import { Tag } from "../tag/Tag";
import { Button } from "../button/Button";
import { priceRu } from "../../helpers/helpers";
import { Divider } from "../divider/Divider";
import { Review } from '../review/Review';
import { ReviewForm } from '../reviewForm/ReviewForm';
import Image from 'next/image';

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    const [isReviewOpend, setIsReviewOpend] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const scrollToReview = () => {
        setIsReviewOpend(true);
        reviewRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
    <div className={className} {...props}>
        <Card className={styles.product}>
            <div className={styles.logo}>
                {/* <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70}/> */}
                <img src={product.image} alt={product.title}/>
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag color="green" className={styles.oldPrice}>
                    {priceRu(product.price - product.oldPrice)}
                    </Tag>}
            </div>
            <div className={styles.credit}>{priceRu(product.credit)}
                /<span className={styles.month}>Month</span></div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map((c) => {
                return <Tag className={styles.category} key={c} color="ghost">{c}</Tag>
            })}</div>
            <div className={styles.priceTitle}>Price</div>
            <div className={styles.creditTitle}>Credit</div>
            <div className={styles.reviewTitle}>
                <a href='#ref' onClick={scrollToReview}>{product.reviewCount}Reviews</a>
            </div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName} key={c.name}></span>
                        <span className={styles.characteristicsDots}/>
                        <span className={styles.characteristicsValue} key={c.value}></span>
                    </div>
                    )
                )}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Advantages</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Disadvantages</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)}/>
            <div className={styles.actions}>
                <Button appearance="primary">Learn more</Button>
                <Button appearance="ghost" 
                        arrow={isReviewOpend ? 'down' : 'right'} 
                        className={styles.reviewButton}
                        onClick={() => setIsReviewOpend(!isReviewOpend)}
                >
                    Read reviews
                </Button>
            </div>
        </Card>
        <Card color='blue' className={cn(styles.reviews, {
            [styles.opened]: isReviewOpend,
            [styles.closed]: !isReviewOpend,
        })} ref={reviewRef}>
            {product.reviews.map(r => (
                <div key={r._id}>
                    <Review review={r}/>;
                    <Divider/>
                </div>
            ))}
            <ReviewForm productId={product._id}/>
        </Card>
    </div>
    );
};