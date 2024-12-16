import { api } from '@/lib/api/client';
import { useQuery } from '../query/useQuery';

export function useBrands() {
  return useQuery('brands', api.brands.list);
}