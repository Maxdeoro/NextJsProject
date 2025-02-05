import { FC, JSX } from "react";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from './header/Header';
import { Footer } from "./footer/Footer";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>{children}</div>
            </div>
            <Footer/>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};
