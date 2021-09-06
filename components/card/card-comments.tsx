import { FunctionComponent, useState } from 'react';
import { Story } from '../../models/hacker-news';
import Link from 'next/link';
import ProfileImage from '../profile/profile-image';
import DOMPurify from 'dompurify';

interface Props {
  story: Story;
}

interface CommentProps {
  user: string;
  content: string;
}

const Comment: FunctionComponent<CommentProps> = ({
  user,
  content,
}: CommentProps) => {
  const sanitizer = DOMPurify.sanitize;

  return (
    <div className='bg-dark-light p-2 rounded-lg w-full my-2'>
      <Link href={`/profile/${user}`}>
        <h2 className='text-md font-semibold cursor-pointer'>{user}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: sanitizer(content) }}></div>
    </div>
  );
};

const CardComments: FunctionComponent<Props> = ({ story }) => {
  const { comments } = story;
  const [commentLoadAmount, setCommentLoadAmount] = useState<number>(1);

  console.log(comments);

  return (
    <div className='flex flex-col justify-start mx-5'>
      {comments.slice(0, commentLoadAmount).map((value) => (
        <div
          className='flex flex-row place-content-center items-start'
          key={value.id}>
          <ProfileImage username={value.user || ''} width='32' height='32' />
          <Comment user={value.user || ''} content={value.content} />
        </div>
      ))}
    </div>
  );
};

export default CardComments;
