import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// export interface ButtonProps extends DetailedHTMLProps <ButtonHTMLAttributes<HTMLButtonElement>,
// HTMLButtonElement> {

export interface ButtonProps extends Omit<DetailedHTMLProps <ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';  // ? - optional parameter
};