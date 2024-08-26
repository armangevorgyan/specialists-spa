import { getRequest } from './service.ts';
import { Filters, Specialist, Subject } from '../types/types.ts';
import { objectToQueryString } from '../utils/queryParamsParser.ts';

export const fetchSpecialists = async (filters: Filters, limit: number, offset: number) => {
  const params = objectToQueryString({
    ...filters,
    limit,
    offset
  });
  const response: { data: { items: Specialist[], totalCount: number } } = await getRequest(`search/specialists${params}`);
  return response.data;
};

export const fetchSubjects = async () => {
  const response: { data: Subject[] } = await getRequest(`subjects`);
  return response.data;
};
