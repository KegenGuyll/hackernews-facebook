import { FunctionComponent } from 'react';

const CardSkeleton: FunctionComponent = () => {
  return (
    <div className='bg-dark-default shadow my-5 rounded py-5 h-128 w-full '>
      <div className='animate-pulse px-5 flex space-x-4'>
        <div className='rounded-full bg-dark-light  h-12 w-12'></div>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 bg-dark-light p  rounded w-3/4'></div>
          <div className='space-y-2'>
            <div className='h-4 bg-dark-light  rounded'></div>
            <div className='h-4 bg-dark-light  rounded w-5/6'></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className='h-96 w-full  bg-dark-light rounded'></div>
    </div>
  );
};

export default CardSkeleton;
