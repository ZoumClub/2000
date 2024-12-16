import { api } from '@/lib/api/client';
import { useQuery } from '../query/useQuery';

export function useServices() {
  return useQuery('services', api.services.list);
}