<<<<<<< HEAD
// export type Root = MenuItem[]

// export interface MenuItem {
//   _id: Id;
//   pages: PageItem[];
// }

// export interface Id {
//   secondCategory: string;
// }

// export interface PageItem {
//   alias: string;
//   title: string;
//   _id: string;
//   category: string;
// }
=======
import { JSX } from "react";
import { TopLevelCategory } from "./page.interface";
>>>>>>> b7a020afd55c60abd5561eedff1231e4e74670c9

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
<<<<<<< HEAD
	pages: PageItem[];
}
=======
	isOpened?: boolean;
	pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
};
>>>>>>> b7a020afd55c60abd5561eedff1231e4e74670c9
