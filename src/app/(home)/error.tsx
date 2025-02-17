"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 lg:px-8">
      <motion.div
        className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <AlertCircle className="h-16 w-16 text-red-600" />
          </motion.div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Oops! Algo salió mal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            No te preocupes, estamos trabajando en ello.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={reset}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Intentar de nuevo
            </button>
            <Link
              href="/"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </motion.div>
        </div>
        {process.env.NODE_ENV === "development" && (
          <motion.div
            className="mt-6 border-t border-gray-200 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-sm font-medium text-gray-900">
              Detalles del error:
            </h3>
            <p className="mt-2 break-words text-sm text-gray-500">
              {error.message || "Un error desconocido ha ocurrido."}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
