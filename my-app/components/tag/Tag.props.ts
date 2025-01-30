import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, 
    HTMLDivElement> {
        children: ReactNode;
        color?: 'green' | 'red' | 'primary' | 'grey' | 'ghost';
        size?: 'small' | 'medium';
        href?: 'string';
    };