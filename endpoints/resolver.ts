import { AxiosRequestConfig, AxiosResponse } from 'axios';

import fetch from '../utils/fetch';

interface IResolve {
  res: AxiosResponse | null;
  err: Error | null;
}

export default async function resolve(
  config: AxiosRequestConfig
): Promise<IResolve> {
  const resolved = {
    err: null,
    res: null,
  } as IResolve;

  try {
    const res = await fetch(config);

    if (!res.data) {
      resolved.err = new Error(`${config.url}: No data was returned`);
    } else {
      resolved.res = res;
    }
  } catch (err: any) {
    resolved.err = err;
  }

  return resolved;
}
