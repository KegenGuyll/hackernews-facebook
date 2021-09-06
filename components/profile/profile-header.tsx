import { FunctionComponent } from 'react';
import ProfileCoverPhoto from './profile-cover-photo';
import ProfileImage from './profile-image';

interface Props {
  username: string;
  postCount: number;
}

const ProfileHeader: FunctionComponent<Props> = ({ username, postCount }) => {
  return (
    <div className='mt- w-screen rounded bg-gradient-to-t to-dark-light from-dark-default pb-10'>
      <div className='relative flex flex-col justify-center items-center mx-5'>
        <ProfileCoverPhoto />
        <div className='absolute -bottom-12 text-center'>
          <ProfileImage height='168' width='168' username={username} />
          <h1 className=' text-2xl'>{username}</h1>
        </div>
      </div>

      <div className='mt-20 mx-5 flex justify-center items-center'>
        <p>{`${postCount} Posts`}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
