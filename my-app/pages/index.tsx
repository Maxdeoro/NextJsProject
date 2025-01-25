import { JSX } from 'react';
import { Htag } from '../components/htag/Htag';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Text h1</Htag>
      <Htag tag='h2'>Text h2</Htag>
      <Htag tag='h3'>Text h3</Htag>
    </div>
  )
};


