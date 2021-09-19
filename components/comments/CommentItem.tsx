import DOMPurify from 'dompurify';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { Comment } from '../../models/hacker-news';
import ProfileImage from '../profile/profile-image';

interface CommentProps {
  comment: Comment;
  dense?: boolean;
}

const CommentItem: FunctionComponent<CommentProps> = ({
  comment,
  dense,
}: CommentProps) => {
  const sanitizer = DOMPurify.sanitize;
  const { comments, user, content } = comment;
  const [viewReplies, setViewReplies] = useState<boolean>(false);

  return (
    <div className='flex flex-col w-full'>
      <div className='bg-dark-light p-2 rounded-lg w-full my-2'>
        <Link passHref href={`/profile/${user}`}>
          <h2 className='text-md font-semibold cursor-pointer'>{user}</h2>
        </Link>
        <div
          className='text-white whitespace-pre-wrap break-words break-all  block'
          dangerouslySetInnerHTML={{ __html: sanitizer(content) }}
        />
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
            <div
              key={value.id}
              className={`${
                dense ? 'ml-3' : 'ml-8 '
              } flex flex-row items-start`}>
              {!dense && (
                <ProfileImage
                  username={value.user || ''}
                  width='32'
                  height='32'
                />
              )}
              <CommentItem dense={dense} comment={value} />
            </div>
          );
        })}
    </div>
  );
};

CommentItem.defaultProps = {
  dense: false,
};

export default CommentItem;
