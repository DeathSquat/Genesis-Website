"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeInUp({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function ScaleIn({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`scale-95 opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function SlideInLeft({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in-left")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`translate-x-[-40px] opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function SlideInRight({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in-right")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`translate-x-[40px] opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
