import { api } from '@/lib/api/client';
import { useQuery } from '../query/useQuery';

export function useAccessories() {
  return useQuery('accessories', api.accessories.list);
}