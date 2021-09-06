/* eslint-disable @next/next/no-img-element */
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface Props {
  user: string;
  title: string;
  description: string;
  timeAgo: number;
  url: string;
}

const CardHeader: FunctionComponent<Props> = ({
  user,
  title,
  description,
  timeAgo,
  url,
}) => {
  const router = useRouter();

  return (
    <div className='flex flex-col p-5 justify-start items-start'>
      <div className='flex flex-row place-content-center place-items-center mb-3'>
        <button title={user} onClick={() => router.push(`/profile/${user}`)}>
          <img
            className='mr-3 bg-dark-light hover:bg-dark-lighter rounded-full'
            height='40'
            width='40'
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${user}.svg`}
            alt={user}
          />
        </button>
        <div className='flex flex-col'>
          <a href={url}>
            <h1
              title={title}
              className='w-96 whitespace-nowrap overflow-hidden overflow-ellipsis cursor-pointer hover:underline'>
              {title}
            </h1>
          </a>

          <p
            className='text-xs cursor-pointer hover:underline'
            title={`${dayjs(timeAgo).format('dddd, MMMM D')} at ${dayjs(
              timeAgo
            ).format('h:mm a')}`}>{`${dayjs(timeAgo).format('H')}h`}</p>
        </div>
      </div>
      <p className='cursor-default'>{description}</p>
    </div>
  );
};

export default CardHeader;
