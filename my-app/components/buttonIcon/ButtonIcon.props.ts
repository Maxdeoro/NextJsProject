import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from './up.svg';
import menu from './menu.svg';
import close from './close.svg';
// import { ReactComponent as Up } from './up.svg';
// import { ReactComponent as Menu } from './menu.svg';
// import { ReactComponent as Close } from './close.svg';
// import ReactComponent from "*.svg";

export const icons = {
    up,
    close,
    menu,
};

// export const icons = {
//     up: Up,
//     close: Close,
//     menu: Menu,
//   };

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement> {
                        icon: IconName;
                        appearance: 'primary' | 'white';
                };

//  const upSvg: React.ComponentProps<'svg'> = up;
//  const menuSvg: React.ComponentProps<'svg'> = menu;
//  const closeSvg: React.ComponentProps<'svg'> = close;