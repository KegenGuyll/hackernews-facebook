import { FunctionComponent, useState } from 'react';
import { Story, Comment } from '../../models/hacker-news';
import Link from 'next/link';
import ProfileImage from '../profile/profile-image';
import DOMPurify from 'dompurify';

interface Props {
  story: Story;
  show: boolean;
}

interface CommentProps {
  comment: Comment;
}

const CommentItem: FunctionComponent<CommentProps> = ({
  comment,
}: CommentProps) => {
  const sanitizer = DOMPurify.sanitize;
  const { comments, user, content } = comment;
  const [viewReplies, setViewReplies] = useState<boolean>(false);

  return (
    <div className='flex flex-col w-full'>
      <div className='bg-dark-light p-2 rounded-lg w-full my-2'>
        <Link href={`/profile/${user}`}>
          <h2 className='text-md font-semibold cursor-pointer'>{user}</h2>
        </Link>
        <div
          className='text-white'
          dangerouslySetInnerHTML={{ __html: sanitizer(content) }}></div>
      </div>
      {!!comments.length && !viewReplies && (
        <button
          onClick={() => setViewReplies(true)}
          className='text-white text-left hover:underline'>{`${
          comments.length
        } ${comments.length > 1 ? 'Replies' : 'Reply'}`}</button>
      )}
      {!!viewReplies &&
        comments.map((value) => {
          return (
            <div key={value.id} className='ml-8 flex flex-row items-start'>
              <ProfileImage
                username={value.user || ''}
                width='32'
                height='32'
              />
              <CommentItem comment={value} />
            </div>
          );
        })}
    </div>
  );
};

const CardComments: FunctionComponent<Props> = ({ story, show }) => {
  const { comments } = story;
  const [commentLoadAmount, setCommentLoadAmount] = useState<number>(3);

  if (!show) {
    return null;
  }

  return (
    <div className='flex flex-col justify-start mx-5'>
      {comments.slice(0, commentLoadAmount).map((value) => (
        <div key={value.id} className='flex w-full  flex-row items-start'>
          <ProfileImage username={value.user || ''} width='32' height='32' />
          <div className='flex flex-col'>
            <CommentItem comment={value} />
          </div>
        </div>
      ))}
      {commentLoadAmount <= comments.length && (
        <button
          onClick={() => setCommentLoadAmount(commentLoadAmount + 5)}
          className='cursor-pointer w-auto  text-left text-white hover:underline py-3'>
          View More Comments
        </button>
      )}
    </div>
  );
};

export default CardComments;
