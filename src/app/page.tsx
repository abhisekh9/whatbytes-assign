import { Suspense } from 'react';
import HomeClient from './HomeClient';

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading products...</div>}>
      <HomeClient />
    </Suspense>
  );
}
