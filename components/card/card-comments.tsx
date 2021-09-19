import { FunctionComponent, useState } from 'react';
import { Story } from '../../models/hacker-news';
import ProfileImage from '../profile/profile-image';
import CommentItem from '../comments/CommentItem';
interface Props {
  story: Story;
  show: boolean;
}

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
