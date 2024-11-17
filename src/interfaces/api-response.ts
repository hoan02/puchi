import { IPaging } from './paging';

//----------------------------------------------------------------------------

export interface IApiResponse<T> {
  data: T;
  paging: IPaging;
  total: number;
  filter: Record<string, any>;
}