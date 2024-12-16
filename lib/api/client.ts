import { fetchFromTable } from './base';
import type { 
  Accessory,
  Brand,
  DealerCar,
  NewsArticle,
  Service 
} from '@/types';

export const api = {
  accessories: {
    list: () => fetchFromTable<Accessory>('accessories'),
  },
  brands: {
    list: () => fetchFromTable<Brand>('brands', { 
      eq: { is_active: true },
      order: { column: 'order_index' }
    }),
  },
  dealerCars: {
    list: () => fetchFromTable<DealerCar>('dealer_cars', { 
      eq: { status: 'approved' },
      order: { column: 'created_at', ascending: false }
    }),
  },
  news: {
    list: () => fetchFromTable<NewsArticle>('news_articles', {
      order: { column: 'published_at', ascending: false }
    }),
  },
  services: {
    list: () => fetchFromTable<Service>('services'),
  },
};