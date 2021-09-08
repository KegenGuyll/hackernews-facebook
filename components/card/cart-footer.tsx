import { Dispatch, FunctionComponent, SetStateAction } from 'react';

interface Props {
  pointsCount: number;
  commentsCount: number;
  setShowComments: Dispatch<SetStateAction<boolean>>;
}

const CardFooter: FunctionComponent<Props> = ({
  pointsCount,
  commentsCount,
  setShowComments,
}) => {
  return (
    <div className='p-5 flex flex-row justify-end'>
      <p className='mr-5 cursor-pointer hover:underline'>{`${pointsCount} Points`}</p>
      <p
        onClick={() => setShowComments(true)}
        className='cursor-pointer hover:underline'>{`${commentsCount} Comments`}</p>
    </div>
  );
};

export default CardFooter;
