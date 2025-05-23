import { JSX, useState } from "react";
import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import SearchIcon from './search.svg';
import { useRouter } from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search,
            }
        });
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == 'Enter') {
            goToSearch();
        }
    };

    return (
        <form className={cn(className, styles.search)} {...props} role="search">
            <Input className={styles.input} 
                    placeholder="Search..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
            />
            <Button appearance="primary" 
                    className={styles.button}
                    onClick={goToSearch}
                    aria-label='Search on the site'
            >
                <SearchIcon/>
            </Button>
        </form>
    );
};