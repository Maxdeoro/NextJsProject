import { JSX, useEffect, useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { Card, Htag, Paragraf, Product, Sort, Tag } from '../../components';
import { HhData } from '../../components/hhData/HhData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/advantages/Advantages';
import { SortEnum } from '../../components/sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products,
        sort: SortEnum.Rating
    });
    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);


    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' 
                                  size='medium' 
                                  aria-label={products.length + ' elements'}
                             >
                                {products.length}
                              </Tag>
                }
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div role='list'>
                {sortedProducts && sortedProducts.map(p => (
                    <Product layout product={p} key={p._id} role='listItem'/>))}
                {/* {products && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))} */}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='medium'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && 
            <>
                <Htag tag='h2'>Advantages</Htag>
                <Advantages advantages={page.advantages}/>
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            {/* {page.seoText && <Paragraf>{page.seoText}</Paragraf>} */}
            <Htag tag='h2'>Acquired skills</Htag>
            {page.tags && page.tags.map(t => {
                return <Tag key={t} color='primary'>{t}</Tag>
            })}
        </div>
    )
};