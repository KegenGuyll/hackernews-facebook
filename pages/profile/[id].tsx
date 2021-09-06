import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from 'next';
import { useEffect, useState } from 'react';
import Card from '../../components/card';
import Navigation from '../../components/navigation';
import ProfileHeader from '../../components/profile/profile-header';
import getUser from '../../endpoints/getUser';
import { User } from '../../models/hacker-news';

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) {
    return {
      props: {} as never,
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const id = context.params.id as string;

  if (!id) {
    return {
      props: {} as never,
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const user = await getUser(id);

  return {
    props: {
      user: user.res?.data,
    },
  };
};

interface Props {
  user: User;
}

const Profile: NextPage<Props> = ({ user }) => {
  const [loadAmount, setLoadAmount] = useState<number>(10);

  useEffect(() => {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (loadAmount >= user.submitted.length) return;
        setLoadAmount(loadAmount + 10);
      }
    };
  });

  return (
    <div className='overflow-y-hidden'>
      <Navigation />
      <div className='flex flex-col justify-center items-center mx-5'>
        <ProfileHeader postCount={user.submitted.length} username={user.id} />
        <div className='flex flex-col justify-center items-center mx-5'>
          <div className='max-w-2xl'>
            {user.submitted.slice(0, loadAmount).map((id) => {
              return <Card key={id} id={id} />;
            })}
          </div>
          {loadAmount >= user.submitted.length && (
            <h2 className='my-3 text-lg font-semibold'>End of the line...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
