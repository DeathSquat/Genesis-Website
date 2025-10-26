"use client"

import { useState } from "react"

interface HoverableTextProps {
  text: string
  className?: string
  highlightWords?: string[]
}

export default function HoverableText({ text, className = "", highlightWords = [] }: HoverableTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()))

        return (
          <span
            key={index}
            className={`inline-block transition-all duration-300 cursor-pointer mx-1 ${
              hoveredIndex === index
                ? "text-primary scale-110 font-semibold drop-shadow-lg"
                : hoveredIndex !== null
                  ? "opacity-50"
                  : isHighlighted
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                    : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === index ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {word}
          </span>
        )
      })}
    </span>
  )
}
