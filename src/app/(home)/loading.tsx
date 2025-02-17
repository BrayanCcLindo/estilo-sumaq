import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="group relative h-[420px]">
          <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
            <div className="absolute right-4 top-4 z-10">
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton className="h-64 w-full" />
            <div className="p-4">
              <Skeleton className="mb-1 h-4 w-20" />
              <Skeleton className="mb-2 h-6 w-3/4" />
              <div className="flex items-center space-x-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
