"use client";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function ProductStars({
  rating,
  className = "",
}: StarRatingProps) {
  // Calculate full and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, index) => {
        // Determine if this position should show a full, half, or empty star
        const isFull = index < fullStars;
        const isHalf = !isFull && hasHalfStar && index === fullStars;

        return (
          <div key={index} className="relative">
            {/* Base star (empty) */}
            <Star className="text-muted-foreground/20 h-4 w-4" fill="white" />

            {/* Overlay for full or half star */}
            {(isFull || isHalf) && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: isHalf ? "50%" : "100%" }}
              >
                <Star
                  className="h-4 w-4 text-neutral-900"
                  fill="currentColor"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
