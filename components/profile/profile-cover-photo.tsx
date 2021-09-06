/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

const ProfileCoverPhoto: FunctionComponent = () => {
  return (
    <div className='w-3/4'>
      <img
        className='rounded object-cover object-center h-128 w-full'
        src='https://picsum.photos/960/960'
        alt='Profile Cover'
      />
    </div>
  );
};

export default ProfileCoverPhoto;
