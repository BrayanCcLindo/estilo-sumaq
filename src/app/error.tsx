"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md space-y-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mx-auto h-40 w-40">
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-indigo-600"
            >
              <path
                d="M3.5 7.5C3.5 7.5 3.5 3.5 12 3.5C20.5 3.5 20.5 7.5 20.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 16.5C20.5 16.5 20.5 20.5 12 20.5C3.5 20.5 3.5 16.5 3.5 16.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 7.5V16.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 7.5V16.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.5V16.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 11C9.05228 11 9.5 10.5523 9.5 10C9.5 9.44772 9.05228 9 8.5 9C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11Z"
                fill="currentColor"
              />
              <path
                d="M15.5 11C16.0523 11 16.5 10.5523 16.5 10C16.5 9.44772 16.0523 9 15.5 9C14.9477 9 14.5 9.44772 14.5 10C14.5 10.5523 14.9477 11 15.5 11Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Oops! Algo no salió como esperábamos
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Estamos trabajando para solucionarlo. Mientras tanto, ¿por qué no
          exploras nuestra colección?
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Volver a la tienda
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
