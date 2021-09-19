/* eslint-disable @next/next/no-img-element */
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface Props {
  user: string;
  title: string;
  description: string;
  timeAgo: string;
  time: number;
  url: string;
  text: string;
}

const CardHeader: FunctionComponent<Props> = ({
  user,
  title,
  description,
  timeAgo,
  time,
  url,
  text,
}) => {
  const router = useRouter();

  return (
    <div className='flex flex-col p-5 justify-start items-start'>
      <div className='flex flex-row place-content-center place-items-center mb-3'>
        <button
          className='h-10 w-10 mr-3 hidden sm:block'
          title={user}
          onClick={() => router.push(`/profile/${user}`)}>
          <img
            className=' h-full w-full rounded-full'
            height='40'
            width='40'
            src={`https://avatars.dicebear.com/api/big-ears-neutral/${user}.svg`}
            alt={user}
          />
        </button>
        <div className='flex flex-col'>
          <div role='button' onClick={() => window.open(url)}>
            <h1 title={title} className='cursor-pointer hover:underline'>
              {title}
            </h1>
          </div>
          <p
            className='text-xs cursor-pointer hover:underline'
            title={`${dayjs(time).format('dddd, MMMM D')} at ${dayjs(
              time
            ).format('h:mm a')}`}>
            {timeAgo}
          </p>
        </div>
      </div>
      <p className='cursor-default'>{text || description}</p>
    </div>
  );
};

export default CardHeader;
