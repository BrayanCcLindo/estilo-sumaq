"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FashionBackground() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToNextSection = () => {
    const nextSection = currentSection + 1;
    const yOffset = window.innerHeight * nextSection;

    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });

    setCurrentSection(nextSection);
  };

  // Resetear la sección cuando se scrollea manualmente
  useEffect(() => {
    const handleScroll = () => {
      const section = Math.floor(window.scrollY / window.innerHeight);
      setCurrentSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/portada1.jpeg"
          alt="Elegant background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          Diseños que inspiran, raíces que perduran{" "}
        </h1>
        <p className="mb-8 text-center text-xl sm:text-2xl md:text-3xl">
          Explora la belleza artesanal con un toque contemporáneo
        </p>
        <button
          onClick={scrollToNextSection}
          className="transform rounded-full bg-white px-6 py-3 text-lg font-semibold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
        >
          Explorar Categorias
        </button>
      </div>
    </main>
  );
}
