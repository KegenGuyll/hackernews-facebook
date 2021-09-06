import { AxiosResponse } from 'axios';
import { User } from '../models/hacker-news';

import resolve from './resolver';

interface IResponse extends AxiosResponse {
  data: User;
}

interface IResolvedUser {
  res: IResponse | null;
  err: Error | null;
}

export default function getUser(username: string): Promise<IResolvedUser> {
  return resolve({
    url: `https://hacker-news.firebaseio.com/v0/user/${username}.json?print=pretty`,
  });
}
