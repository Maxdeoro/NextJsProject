import { JSX, useState } from 'react';
import { Htag } from '../components/htag/Htag';
import { Button } from '../components/button/Button';
import { Paragraf } from '../components/para/Para';
import { Tag } from '../components/tag/Tag';

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <Htag tag='h1'>{counter}</Htag>
      {/* <Htag tag='h1'>Text h1</Htag> */}
      <Htag tag='h2'>Text h2</Htag>
      <Htag tag='h3'>Text h3</Htag>
      <Button appearance='primary' className='myClass' onClick={() => setCounter(x => x + 1)}>Counter</Button>
      {/* <Button appearance='primary' className='myClass'>BTN text</Button> */}
      <Button appearance='ghost' arrow='down' onClick={() => setCounter(x => x / 2)}>Counter2</Button>
      {/* <Button appearance='ghost' arrow='down'>BTN text</Button> */}
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

    </div>
  )
};


