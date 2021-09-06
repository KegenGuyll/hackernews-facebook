import { AxiosResponse } from 'axios';
import { Story } from '../models/hacker-news';

import resolve from './resolver';

interface IResponse extends AxiosResponse {
  data: Story;
}

interface IResolvedStory {
  res: IResponse | null;
  err: Error | null;
}

export default function getStory(id: number): Promise<IResolvedStory> {
  return resolve({
    url: `https://api.hnpwa.com/v0/item/${id}.json`,
  });
}
