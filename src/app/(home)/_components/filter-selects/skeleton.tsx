import { Skeleton } from "@/components/ui/skeleton";

export function FilterSelectsSkeleton() {
  return (
    <div className="mb-8 flex w-full flex-col items-center gap-8 rounded-[10px] bg-white p-4 shadow-md dark:bg-gray-800 md:flex-row">
      <div className="w-full md:w-auto md:grow-[2]">
        <Skeleton className="mb-2 h-4 w-24" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="w-full md:w-auto md:grow-[1]">
        <Skeleton className="mb-2 h-4 w-36" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}
