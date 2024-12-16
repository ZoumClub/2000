import { api } from '@/lib/api/client';
import { useQuery } from '../query/useQuery';

export function useNews() {
  return useQuery('news', api.news.list);
}