"use client";

import { motion, useInView, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const categories = [
  {
    id: "mochilas",
    title: "Bolsos y Mochilas",
    image: "/portada/portada-bags.jpeg",
    href: "/categoria/bolsos",
    className: "rounded-br-[80px]",
  },
  {
    id: "accesorios",
    title: "Accesorios para llevar",
    image: "/portada/portada-monedero.jpeg",
    href: "/categoria/accesorios",
    className: "rounded-bl-[80px]",
  },
  {
    id: "joyeria",
    title: "Joyeria y complementos",
    image: "/portada/portada-joyas.jpeg",
    href: "/categoria/joyeria",
    className: "rounded-tr-[80px]",
  },
  {
    id: "organizacion",
    title: "Organización Personal",
    image: "/portada/portada-organizacion.jpeg",
    href: "/categoria/organizacion",
    className: "rounded-tl-[80px]",
  },
];

export default function CategoryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="container mx-auto py-16" ref={ref}>
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {categories.map((category) => (
          <Link key={category.id} href={category.href}>
            <div
              className={twMerge(
                `group relative h-[350px] cursor-pointer overflow-hidden ${category.className}`,
              )}
            >
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
              <Image
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover object-top"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white">
                <h2 className="mb-4 text-center text-2xl font-bold">
                  {category.title}
                </h2>
                <button className="flex items-center space-x-2 rounded-full bg-indigo-600 px-6 py-2 text-white transition-colors duration-300 group-hover:bg-indigo-700">
                  <span>Ver productos</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
