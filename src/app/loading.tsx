import { Loader2 } from "lucide-react";

function ProductLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950">
      <Loader2 className="h-16 w-16 animate-spin text-gray-400" />
    </div>
  );
}

export default ProductLoader;
