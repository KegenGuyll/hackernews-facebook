import { FunctionComponent } from 'react';

interface Props {
  siteName: string;
  image?: string;
  url: string;
}

const CardImg: FunctionComponent<Props> = ({ siteName, image, url }) => {
  if (!image) return null;

  return (
    <div
      onClick={() => window.open(url)}
      className='cursor-pointer w-full max-h-96 overflow-hidden'>
      <img
        className='mb-2 object-cover w-full h-full'
        src={image}
        alt={siteName}
      />
    </div>
  );
};

export default CardImg;
