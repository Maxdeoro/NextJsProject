import { JSX } from "react";
import { SortProps, SortEnum } from "./Sort.props";
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import cn from 'classnames';

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id="sort">Sorting</div>
            <button
                onClick={() => setSort(SortEnum.Rating)} 
                className={cn({
                    [styles.active]: sort == SortEnum.Rating,
                })}
                id="rating"
                aria-selected={sort == SortEnum.Rating} 
                aria-labelledby="sort rating"
            >
                <SortIcon className={styles.sortIcon}/>By rating
            </button>
            <button onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price,
                })}
                id="price"
                aria-selected={sort == SortEnum.Price}
                aria-labelledby="sort price"
            >
                <SortIcon className={styles.sortIcon}/>By price
            </button>
        </div>
    );
};