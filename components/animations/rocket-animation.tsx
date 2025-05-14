"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, Stars, Sparkles } from "lucide-react"

interface RocketProps {
  id: number
  initialX: number
  initialY: number
  delay: number
}

const RocketComponent = ({ id, initialX, initialY, delay }: RocketProps) => {
  // Generate random path for each rocket
  const finalX = Math.random() > 0.5 ? -2000 : 2000
  const finalY = -2000 + Math.random() * 1000
  const rotation = Math.random() * 360
  const duration = 3 + Math.random() * 2

  return (
    <motion.div
      key={id}
      initial={{ x: initialX, y: initialY, rotate: rotation, scale: 0 }}
      animate={{
        x: finalX,
        y: finalY,
        rotate: rotation + 360,
        scale: [0, 1, 1, 0.8, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className="fixed z-[100] pointer-events-none"
    >
      <div className="relative">
        <Rocket
          className="h-12 w-12 text-primary filter drop-shadow-lg"
          style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" }}
        />
        {/* Rocket trail */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: [0, 0.8, 0], width: [0, 100, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -bottom-1 -right-1 h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-transparent rounded-full"
          style={{ transformOrigin: "right center", rotate: "180deg" }}
        />
      </div>
    </motion.div>
  )
}

interface StarProps {
  id: number
  x: number
  y: number
  delay: number
  size: number
}

const Star = ({ id, x, y, delay, size }: StarProps) => {
  return (
    <motion.div
      key={id}
      initial={{ x, y, scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        ease: "easeOut",
      }}
      className="fixed z-[99] pointer-events-none"
    >
      {size > 0.7 ? (
        <Sparkles className="text-yellow-300" style={{ width: `${size * 24}px`, height: `${size * 24}px` }} />
      ) : (
        <Stars className="text-yellow-300" style={{ width: `${size * 20}px`, height: `${size * 20}px` }} />
      )}
    </motion.div>
  )
}

export function RocketAnimation({ isActive, onComplete }: { isActive: boolean; onComplete: () => void }) {
  const [rockets, setRockets] = useState<RocketProps[]>([])
  const [stars, setStars] = useState<StarProps[]>([])

  useEffect(() => {
    if (isActive) {
      // Create rockets
      const newRockets = []
      for (let i = 0; i < 12; i++) {
        newRockets.push({
          id: i,
          initialX: window.innerWidth / 2 - 50 + Math.random() * 100,
          initialY: window.innerHeight - 100,
          delay: i * 0.2,
        })
      }
      setRockets(newRockets)

      // Create stars
      const newStars = []
      for (let i = 0; i < 30; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 3,
          size: 0.3 + Math.random() * 1,
        })
      }
      setStars(newStars)

      // Clean up after animation
      const timer = setTimeout(() => {
        setRockets([])
        setStars([])
        onComplete()
      }, 6000)

      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])

  if (!isActive) return null

  return (
    <>
      {/* Overlay for rocket animation */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] pointer-events-none" />

      {/* Rockets */}
      <AnimatePresence>
        {rockets.map((rocket) => (
          <RocketComponent
            key={rocket.id}
            id={rocket.id}
            initialX={rocket.initialX}
            initialY={rocket.initialY}
            delay={rocket.delay}
          />
        ))}
      </AnimatePresence>

      {/* Stars */}
      <AnimatePresence>
        {stars.map((star) => (
          <Star key={star.id} id={star.id} x={star.x} y={star.y} delay={star.delay} size={star.size} />
        ))}
      </AnimatePresence>

      {/* Celebration text */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none"
      >
        <motion.h1
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 2, repeat: 1 }}
          className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-lg"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
        >
          🎉 Surprise! 🎉
        </motion.h1>
      </motion.div>
    </>
  )
}
