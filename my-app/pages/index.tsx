import { JSX, useEffect, useState } from 'react';
import { Htag } from '../components/htag/Htag';
import { Button } from '../components/button/Button';
import { Paragraf } from '../components/para/Para';
import { Tag } from '../components/tag/Tag';
import { Rating, Textarea } from '../components';
import { Input } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import axios from 'axios';
import { GetStaticProps } from 'next';

function Home({menu}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Text h1</Htag>
      <Htag tag='h2'>Text h2</Htag>
      <Htag tag='h3'>Text h3</Htag>
      <Button appearance='primary' className='myClass'>BTN text</Button>
      <Button appearance='ghost' arrow='down'>BTN text</Button>
      <Paragraf fontSize='large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraf>
      <Paragraf fontSize='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat.
      </Paragraf>
      <Paragraf>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraf>
      <Tag color='grey' size='medium'>15</Tag>
      <Tag color='green' size='small'>Hello!</Tag>
      <Tag color='ghost' size='medium'>How are you?</Tag>
      <Tag color='red' size='medium'>MySite</Tag>
      <Tag color='primary' size='small'>consectetur adipiscing elit,</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
      <Input placeholder='TEXT'/>
      <Textarea placeholder='Write message here'/>
    </>
  )
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 
    '/api/top-page/find', {firstCategory});

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}


