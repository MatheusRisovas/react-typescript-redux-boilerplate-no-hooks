import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => ({ type: RepositoriesTypes.LOAD_REQUEST });

export const loadSuccess = (data: Array<Repository>) => ({
  type: RepositoriesTypes.LOAD_SUCCESS,
  payload: { data },
});

export const loadFailure = () => ({ type: RepositoriesTypes.LOAD_FAILURE });
