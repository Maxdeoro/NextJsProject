import { JSX } from 'react';
import { Htag } from '../components/htag/Htag';
import { Button } from '../components/button/Button';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Text h1</Htag>
      <Htag tag='h2'>Text h2</Htag>
      <Htag tag='h3'>Text h3</Htag>
      <Button appearance='primary' className='myClass'>BTN text</Button>
      <Button appearance='ghost'>BTN text</Button>
    </div>
  )
};


