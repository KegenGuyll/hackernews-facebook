import { AxiosResponse } from 'axios';
import { Stories } from '../models/hacker-news';

import resolve from './resolver';

interface IResponse extends AxiosResponse {
  data: Stories;
}

interface IResolvedBestStories {
  res: IResponse | null;
  err: Error | null;
}

export default function getBestStories(): Promise<IResolvedBestStories> {
  return resolve({
    url: 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty',
  });
}
