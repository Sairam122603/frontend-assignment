import { getProductById } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import { ProductDetailSkeleton } from '@/components/LoadingSkeleton';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

async function ProductDetail({ id }: { id: string }) {
  try {
    const product = await getProductById(id);

    return (
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div className="relative h-96 rounded-lg bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
          <p className="mt-4 text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
          <p className="mt-2 text-sm text-gray-500 capitalize">{product.category}</p>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-900">{product.description}</p>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <svg
                  key={rating}
                  className={`h-5 w-5 ${
                    product.rating.rate > rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.585l-7.07 3.715 1.351-7.87-5.72-5.574 7.902-1.147L10 0l3.537 7.18 7.902 1.147-5.72 5.574 1.351 7.87z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-500">({product.rating.count} reviews)</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            ← Back to products
          </Link>
        </div>

        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductDetail id={params.id} />
        </Suspense>
      </div>
    </div>
  );
}

