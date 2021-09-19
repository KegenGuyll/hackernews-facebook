import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Link from 'next/link';

interface Props {
  pointsCount: number;
  commentsCount: number;
  postId: number;
  setShowComments: Dispatch<SetStateAction<boolean>>;
}

const CardFooter: FunctionComponent<Props> = ({
  pointsCount,
  commentsCount,
  setShowComments,
  postId,
}) => {
  return (
    <div className='p-5 flex flex-row justify-end'>
      <p className='mr-5 cursor-pointer hover:underline'>{`${pointsCount} Points`}</p>
      <p
        onClick={() => setShowComments(true)}
        className='cursor-pointer hover:underline hidden lg:block'>{`${commentsCount} Comments`}</p>
      <Link passHref href={`/${postId}/comments`}>
        <p className='cursor-pointer hover:underline block lg:hidden'>{`${commentsCount} Comments`}</p>
      </Link>
    </div>
  );
};

export default CardFooter;
