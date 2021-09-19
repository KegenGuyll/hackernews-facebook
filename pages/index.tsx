import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import Navigation from '../components/navigation';
import getBestStories from '../endpoints/getBestStories';
import { Stories } from '../models/hacker-news';

const Home: NextPage = () => {
  const [stories, setStories] = useState<Stories>([]);

  useEffect(() => {
    getBestStories().then(({ res }) => {
      if (res) {
        setStories(res.data);
      }
    });
  }, []);

  const [loadAmount, setLoadAmount] = useState<number>(20);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (loadAmount >= stories.length) return;
      setLoadAmount(loadAmount + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Navigation />
      <div className='flex flex-col justify-center items-center sm:mx-5'>
        <div className='max-w-2xl'>
          {stories.slice(0, loadAmount).map((id) => (
            <Card key={id} id={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
