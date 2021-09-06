/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import Link from 'next/link';

interface Props {
  username: string;
  height: string;
  width: string;
}

const ProfileImage: FunctionComponent<Props> = ({
  username,
  height,
  width,
}) => {
  return (
    <Link href={`/profile/${username}`}>
      <img
        title={username}
        className='mr-3 bg-dark-light border-2 border-dark-dark hover:bg-dark-lighter rounded-full'
        height={height}
        width={width}
        src={`https://avatars.dicebear.com/api/pixel-art-neutral/${username}.svg`}
        alt={username}
      />
    </Link>
  );
};

export default ProfileImage;
