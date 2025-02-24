"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Tag } from "lucide-react";

interface ProductMagnifierProps {
  imageUrl: string;
  title: string;
  magnifierSize?: number;
  zoomLevel?: number;
  offer: boolean;
}

export default function ProductMagnifier({
  imageUrl,
  title,
  magnifierSize = 250,
  zoomLevel = 2.5,
  offer,
}: ProductMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // Calcular la posición relativa del cursor (0-1)
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Calcular la posición del magnificador
    const magnifierX = e.clientX - left - magnifierSize / 2;
    const magnifierY = e.clientY - top - magnifierSize / 2;

    // Asegurarse que el magnificador no se salga de la imagen
    const boundedX = Math.max(0, Math.min(magnifierX, width - magnifierSize));
    const boundedY = Math.max(0, Math.min(magnifierY, height - magnifierSize));

    setCursorPosition({ x, y });
    setMagnifierPosition({ x: boundedX, y: boundedY });
  };

  return (
    <Card className="group relative hidden md:block">
      <div
        className="relative aspect-square h-full w-full overflow-hidden"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Imagen principal */}
        {/* <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="border-none object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        /> */}
        <div className="relative h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="h-full w-full object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {offer && (
            <div className="absolute right-4 top-4">
              <div className="flex items-center rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white">
                <Tag className="mr-2 h-4 w-4" />
                Oferta Especial
              </div>
            </div>
          )}
        </div>

        {/* Lupa de zoom */}
        {showMagnifier && (
          <div
            className="border-border pointer-events-none absolute overflow-hidden border bg-white shadow-xl"
            style={{
              width: magnifierSize,
              height: magnifierSize,
              left: magnifierPosition.x,
              top: magnifierPosition.y,
            }}
          >
            <div
              className="absolute"
              style={{
                width: `${100 * zoomLevel}%`,
                height: `${100 * zoomLevel}%`,
                left: `${-cursorPosition.x * (100 * zoomLevel - 100)}%`,
                top: `${-cursorPosition.y * (100 * zoomLevel - 100)}%`,
              }}
            >
              <Image
                src={imageUrl}
                alt={`Zoomed view of ${title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
