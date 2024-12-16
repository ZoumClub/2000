import { Suspense } from 'react';
import { LoadingScreen } from '@/components/ui/loading-screen';
import dynamic from 'next/dynamic';

// Import the client-side HomePage component
const HomePage = dynamic(() => import('@/components/pages/HomePage'), {
  loading: () => <LoadingScreen />
});

export default function Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomePage />
    </Suspense>
  );
}