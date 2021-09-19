/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import ContextNav from '../../components/navigation/ContextNav';
import getMetaData from '../../endpoints/getMetaData';
import getStory from '../../endpoints/getStory';
import { Story } from '../../models/hacker-news';
import { MetaData } from '../../models/metaData';
import CommentItem from '../../components/comments/CommentItem';

const PostComments: NextPage = () => {
  const [story, setStory] = useState<Story | null>(null);
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const router = useRouter();

  const [loadAmount, setLoadAmount] = useState<number>(20);

  const handleScroll = () => {
    if (!story) return;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (loadAmount >= story?.comments.length) return;
      setLoadAmount(loadAmount + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const postId = useMemo(() => router.query.postId, [router]);

  useEffect(() => {
    if (!postId) return;

    if (typeof postId === 'string') {
      getStory(Number(postId)).then(({ res }) => {
        if (res) {
          getMetaData(res.data.url).then(({ res: metaRes }) => {
            if (metaRes) {
              setMetaData(metaRes.data);
            }
          });
          setStory(res.data);
        }
      });
    }
  }, [postId]);

  return (
    <>
      <Head>
        <title>{`${story?.title} | Comments`}</title>
      </Head>
      <ContextNav
        author={story?.user || ''}
        title={story?.title || ''}
        timeAgo={story?.time_ago || ''}
      />
      <div className=' bg-dark-default rounded'>
        <p className='p-5 text-white'>
          {story?.content || metaData?.description}
        </p>
        <div className='w-full'>
          {metaData?.url && (
            <img
              className='object-cover w-full'
              src={metaData.image || ''}
              alt={metaData.title || ''}
            />
          )}
        </div>
        <div className='w-full'>
          {story?.comments.slice(0, loadAmount).map((value) => (
            <div key={value.id} className='flex w-full flex-row items-start'>
              <div className='flex flex-col'>
                <CommentItem dense={true} comment={value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostComments;
