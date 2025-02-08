import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="container mx-auto animate-pulse px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image skeleton */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
          <Skeleton className="h-full w-full" />
        </div>

        {/* Product details skeleton */}
        <div className="flex flex-col justify-between space-y-4">
          {/* Title */}
          <Skeleton className="h-8 w-3/4" />

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-16" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          {/* Price */}
          <Skeleton className="h-10 w-32" />

          {/* Quantity selector */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-10 w-10" />
          </div>

          {/* Add to cart button */}
          <Skeleton className="h-12 w-full" />

          {/* Additional buttons */}
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="mt-12">
        <div className="mb-4 flex space-x-4">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-4 w-3/6" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
