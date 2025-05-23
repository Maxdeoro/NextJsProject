import {JSX} from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { GetStaticProps,GetStaticPaths,GetStaticPropsContext } from 'next';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'node:querystring';
import { API } from '../../helpers/api';

function Type ({firstCategory}: TypeProps): JSX.Element {
    return (
        <>
            TYPE: {firstCategory}
        </>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(m => '/' + m.route),
		fallback: false,
		// fallback: true
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory: firstCategoryItem.id
	});
	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id
		}
	};
};

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
};