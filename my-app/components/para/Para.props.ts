import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParaProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, 
    HTMLParagraphElement> {
        children: ReactNode;
        fontSize?: 'small' | 'medium' | 'large';
    };