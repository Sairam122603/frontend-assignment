import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-contain object-center group-hover:opacity-75"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="text-sm text-gray-700 line-clamp-2">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
        <p className="mt-1 text-sm text-gray-500 capitalize">{product.category}</p>
      </div>
    </Link>
  );
}

