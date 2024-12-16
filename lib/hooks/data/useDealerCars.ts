import { api } from '@/lib/api/client';
import { useQuery } from '../query/useQuery';

export function useDealerCars() {
  return useQuery('dealerCars', api.dealerCars.list);
}