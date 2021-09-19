import { FunctionComponent, useEffect, useRef, useState } from 'react';
import getMetaData from '../../endpoints/getMetaData';
import getStory from '../../endpoints/getStory';
import useOnScreen from '../../hooks/useOnScreen';
import { Story } from '../../models/hacker-news';
import { MetaData } from '../../models/metaData';
import Spinner from '../Spinner';
import CardComments from './card-comments';
import CardHeader from './card-header';
import CardImg from './card-img';
import CardSkeleton from './card-skeleton';
import CardFooter from './cart-footer';

interface Props {
  id: number;
}

const Card: FunctionComponent<Props> = ({ id }) => {
  const [story, setStory] = useState<Story>();
  const [metaData, setMetaData] = useState<MetaData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showComments, setShowComments] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getStory(id).then(({ res, err }) => {
      if (res) {
        setStory(res.data);
        if (!res.data.url) return;
        getMetaData(res.data.url).then(
          ({ res: metaDataRes, err: metaDataErr }) => {
            if (metaDataRes) {
              setMetaData(metaDataRes.data);
              setIsLoading(false);
            }
            if (metaDataErr) {
              setIsLoading(false);
            }
          }
        );
      }

      if (err) {
        setIsLoading(false);
      }
    });
  }, [id]);

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (story?.type !== 'link') {
    return null;
  }

  return (
    <div className='bg-dark-default rounded flex flex-col my-5 w-full overflow-hidden'>
      {story && metaData && (
        <>
          <CardHeader
            text={story.content}
            url={story.url || ''}
            user={story.user || ''}
            title={story.title}
            description={metaData.description || ''}
            timeAgo={story.time_ago}
            time={story.time}
          />
          <CardImg
            url={story.url}
            siteName={metaData.siteName || ''}
            image={metaData.image || ''}
          />
          <CardFooter
            setShowComments={setShowComments}
            commentsCount={story.comments_count}
            pointsCount={story.points || 0}
          />
          <CardComments show={showComments} story={story} />
        </>
      )}
    </div>
  );
};

export default Card;
