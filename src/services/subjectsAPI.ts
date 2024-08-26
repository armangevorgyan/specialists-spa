import { Subject } from '../types/types.ts';
import { getRequest } from './service.ts';

export const fetchSubjects = async () => {
  const response: { data: Subject[] } = await getRequest(`subjects`);
  return response.data;
};
