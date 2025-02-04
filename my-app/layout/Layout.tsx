import { JSX } from "react";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from './header/Header';
import { Footer } from "./footer/Footer";

export const Layout = ({children}: LayoutProps): JSX.Element => {
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
