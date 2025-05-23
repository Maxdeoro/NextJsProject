import { FC, JSX, useRef, useState, KeyboardEvent } from "react";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from './header/Header';
import { Footer } from "./footer/Footer";
import styles from "./Layout.module.css";
import cn from 'classnames';
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";

const Layout = ({children}: LayoutProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);

    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };

    return (
        <div className={styles.wrapper}>
            <a onFocus={() => setIsSkipLinkDisplayed(true)} 
                onKeyDown={skipContentAction} 
                tabIndex={1} className={cn(styles.skipLink, {
                    [styles.displayed]: setIsSkipLinkDisplayed,
            })}>
                Go to content
            </a>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.body} ref={bodyRef} tabIndex={0} role="main">
                {children}
            </main>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );
    };
};
