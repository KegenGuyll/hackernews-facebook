import { FunctionComponent } from 'react';

interface Props {
  pointsCount: number;
  commentsCount: number;
}

const CardFooter: FunctionComponent<Props> = ({
  pointsCount,
  commentsCount,
}) => {
  return (
    <div className='p-5 flex flex-row justify-end'>
      <p className='mr-5 cursor-pointer hover:underline'>{`${pointsCount} Points`}</p>
      <p className='cursor-pointer hover:underline'>{`${commentsCount} Comments`}</p>
    </div>
  );
};

export default CardFooter;
