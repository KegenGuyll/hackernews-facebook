import { AxiosResponse } from 'axios';
import { Stories } from '../models/hacker-news';

import resolve from './resolver';

interface IResponse extends AxiosResponse {
  data: Stories;
}

interface IResolvedTopStories {
  res: IResponse | null;
  err: Error | null;
}

export default function getTopStories(): Promise<IResolvedTopStories> {
  return resolve({
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
  });
}
