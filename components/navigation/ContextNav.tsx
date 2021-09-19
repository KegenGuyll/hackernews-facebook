import { FunctionComponent } from 'react';
import Link from 'next/link';
import ProfileImage from '../profile/profile-image';

interface Props {
  author: string;
  title: string;
  timeAgo: string;
}

const ContextNav: FunctionComponent<Props> = ({ author, title, timeAgo }) => {
  return (
    <nav className='w-full px-3 p-5 text-white bg-dark-default sticky top-0 z-50'>
      <Link passHref href='/'>
        <div className='flex flex-row place-content-start place-items-center space-x-3'>
          <span className='material-icons-outlined'>arrow_back_ios_new</span>
          <ProfileImage username={author} height='40' width='40' />
          <div className='flex flex-col w-full overflow-hidden'>
            <h1 className='w-full whitespace-nowrap overflow-ellipsis overflow-hidden'>{`${title}`}</h1>
            <p className='text-xs'>{timeAgo}</p>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default ContextNav;
