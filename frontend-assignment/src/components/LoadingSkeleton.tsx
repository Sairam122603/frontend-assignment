export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-64 w-full"></div>
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="animate-pulse mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div className="bg-gray-300 rounded-lg h-96"></div>
        <div className="space-y-6">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

