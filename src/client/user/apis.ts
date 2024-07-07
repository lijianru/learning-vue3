import type { AxiosPromise } from 'axios';
import type { ListDTO } from '../base';
import type { UserListItemDTO } from './types';
import myAxios from '@/utils/my-axios';

export async function getUserList(page: number): AxiosPromise<ListDTO<UserListItemDTO>> {
  const data = await myAxios.get('api/users', { params: { page } });

  return data;
}
