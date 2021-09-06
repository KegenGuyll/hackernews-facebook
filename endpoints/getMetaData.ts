import { AxiosResponse } from 'axios';
import { MetaData } from '../models/metaData';

import resolve from './resolver';

interface IResponse extends AxiosResponse {
  data: MetaData;
}

interface IResolvedMetaData {
  res: IResponse | null;
  err: Error | null;
}

export default function getMetaData(url: string): Promise<IResolvedMetaData> {
  return resolve({
    url: `http://localhost:8080/page/meta/?url=${url}`,
  });
}
