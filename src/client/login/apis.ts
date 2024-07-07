import type { AxiosPromise } from 'axios';
import type { LoginDTO, LoginParams } from './types';
import myAxios from '@/utils/my-axios';

export async function login({ email, password }: LoginParams): AxiosPromise<LoginDTO> {
  const data = await myAxios.post('api/login', { email, password });

  return data;
}
