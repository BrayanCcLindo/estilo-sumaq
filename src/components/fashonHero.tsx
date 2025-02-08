"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths() {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M${-380 + i * 20} ${-189 + i * 8}C${-380 + i * 20} ${-189 + i * 8} ${
      -312 + i * 20
    } ${216 + i * 8} ${152 + i * 20} ${343 + i * 8}C${616 + i * 20} ${
      470 + i * 8
    } ${684 + i * 20} ${875 + i * 8} ${684 + i * 20} ${875 + i * 8}`,
    color: `rgba(255,255,255,${0.05 + i * 0.01})`,
    width: 0.5 + i * 0.02,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full" viewBox="0 0 696 316" fill="none">
        <title>Fashion Background</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function FashionBackground({
  title = "Estilo Sumaq",
  sectionRef,
}: {
  title?: string;
  sectionRef?: React.RefObject<HTMLElement | null>;
}) {
  const words = title.split(" ");
  const scrollToSection = () => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 py-32">
      <FloatingPaths />

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="mr-4 inline-block last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-white/20 to-white/10 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl">
            <Button
              variant="ghost"
              onClick={scrollToSection}
              className="rounded-[1.15rem] border border-white/20 bg-white/20 px-8 py-6 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:shadow-md group-hover:-translate-y-0.5"
            >
              <span className="opacity-90 transition-opacity group-hover:opacity-100">
                Explorar Colleción
              </span>
              <span className="ml-3 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
