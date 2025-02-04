import { JSX } from "react";
import { FooterProps } from "./Footer.props";

export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            FOOTER
        </div>
    );
};