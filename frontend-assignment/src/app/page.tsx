import { getProducts } from '@/utils/api';
import ProductCard from '@/components/ProductCard';
import { ProductGridSkeleton } from '@/components/LoadingSkeleton';
import { Suspense } from 'react';

async function ProductsGrid() {
  try {
    const products = await getProducts();

    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-red-600">Error loading products</h2>
        <p className="mt-2">Please try again later</p>
      </div>
    );
  }
}

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
        
        <div className="mt-6">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

