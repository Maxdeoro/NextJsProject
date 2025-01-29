import { JSX } from 'react';
import { Htag } from '../components/htag/Htag';
import { Button } from '../components/button/Button';
import { Paragraf } from '../components/para/Para';

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  )
};


