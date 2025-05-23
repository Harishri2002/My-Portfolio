"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Stars, Sparkles } from "lucide-react";

interface RocketProps {
  id: number;
  initialX: number;
  initialY: number;
  delay: number;
}

const RocketComponent = ({ id, initialX, initialY, delay }: RocketProps) => {
  // Generate random path for each rocket
  const finalX = Math.random() > 0.5 ? -2000 : 2000;
  const finalY = -2000 + Math.random() * 1000;
  const rotation = Math.random() * 360;
  const duration = 3 + Math.random() * 2;

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
  );
};

interface StarProps {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
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
        <Sparkles
          className="text-yellow-300"
          style={{ width: `${size * 24}px`, height: `${size * 24}px` }}
        />
      ) : (
        <Stars
          className="text-yellow-300"
          style={{ width: `${size * 20}px`, height: `${size * 20}px` }}
        />
      )}
    </motion.div>
  );
};

// Luffy G5 Component
const LuffyG5Component = () => {
  return (
    <>
      {/* Main Luffy Image Container - Fixed positioning to float over your page */}
      <div className="fixed inset-0 pointer-events-none z-[95] flex items-center justify-center">
        <div className="luffy-main-container animate-float-main">
          <div className="luffy-image-wrapper animate-laugh-bounce">
            <img
              src="/assets/luffy/luffy.png" // Replace with your image path
              alt="Gear 5 Luffy"
              className="w-80 h-80 object-contain animate-subtle-wiggle filter drop-shadow-2xl"
              style={{
                imageRendering: "crisp-edges",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating laugh effects */}
      <div className="fixed inset-0 pointer-events-none z-[94]">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-yellow-300 font-bold text-6xl animate-laugh-text-1 opacity-90 font-mono">
          HA!
        </div>
        <div className="absolute top-1/3 left-1/3 text-pink-300 font-bold text-4xl animate-laugh-text-2 opacity-80 font-mono">
          HA!
        </div>
        <div className="absolute top-1/5 right-1/3 text-cyan-300 font-bold text-5xl animate-laugh-text-3 opacity-85 font-mono">
          HA!
        </div>
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-orange-300 font-bold text-7xl animate-laugh-text-4 opacity-90 font-mono">
          HAHA!
        </div>
      </div>

      <style jsx>{`
        /* Main floating animation */
        @keyframes float-main {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(5px) rotate(1deg);
          }
          50% {
            transform: translateY(-8px) translateX(-3px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) translateX(8px) rotate(-1deg);
          }
        }

        /* Subtler Laughing Bounce Effect */
        @keyframes laugh-bounce {
          0%,
          100% {
            transform: scale(1) rotateZ(0deg);
          }
          10% {
            transform: scale(1.01) rotateZ(0.5deg);
          }
          20% {
            transform: scale(0.99) rotateZ(-0.5deg);
          }
          30% {
            transform: scale(1.015) rotateZ(0.3deg);
          }
          40% {
            transform: scale(0.985) rotateZ(-0.3deg);
          }
          50% {
            transform: scale(1.02) rotateZ(0.7deg);
          }
          60% {
            transform: scale(0.98) rotateZ(-0.7deg);
          }
          70% {
            transform: scale(1.01) rotateZ(0.4deg);
          }
          80% {
            transform: scale(0.99) rotateZ(-0.4deg);
          }
          90% {
            transform: scale(1.005) rotateZ(0.2deg);
          }
        }

        /* Even More Subtle Wiggle for the Image */
        @keyframes subtle-wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.3deg);
          }
          75% {
            transform: rotate(-0.3deg);
          }
        }

        /* Laugh text animations */
        @keyframes laugh-text-1 {
          0% {
            transform: translateX(-50%) translateY(0px) scale(0.8);
            opacity: 0;
          }
          15% {
            transform: translateX(-50%) translateY(-10px) scale(1.2);
            opacity: 1;
          }
          30% {
            transform: translateX(-50%) translateY(-20px) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateX(-50%) translateY(-80px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes laugh-text-2 {
          0% {
            transform: translateY(0px) scale(0.6);
            opacity: 0;
          }
          20% {
            transform: translateY(-8px) scale(1.1);
            opacity: 1;
          }
          40% {
            transform: translateY(-15px) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-60px) scale(0.4);
            opacity: 0;
          }
        }

        @keyframes laugh-text-3 {
          0% {
            transform: translateY(0px) scale(0.7);
            opacity: 0;
          }
          25% {
            transform: translateY(-12px) scale(1.3);
            opacity: 1;
          }
          50% {
            transform: translateY(-25px) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-90px) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes laugh-text-4 {
          0% {
            transform: translateX(-50%) translateY(0px) scale(0.5);
            opacity: 0;
          }
          10% {
            transform: translateX(-50%) translateY(-5px) scale(1.4);
            opacity: 1;
          }
          20% {
            transform: translateX(-50%) translateY(-12px) scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: translateX(-50%) translateY(-100px) scale(0.2);
            opacity: 0;
          }
        }

        /* Animation classes */
        .animate-float-main {
          animation: float-main 4s ease-in-out infinite;
        }

        .animate-laugh-bounce {
          animation: laugh-bounce 0.6s ease-in-out infinite;
        }

        .animate-subtle-wiggle {
          animation: subtle-wiggle 2s ease-in-out infinite;
        }

        .animate-laugh-text-1 {
          animation: laugh-text-1 2s ease-out infinite 0.2s;
        }

        .animate-laugh-text-2 {
          animation: laugh-text-2 2.5s ease-out infinite 0.8s;
        }

        .animate-laugh-text-3 {
          animation: laugh-text-3 2.2s ease-out infinite 1.2s;
        }

        .animate-laugh-text-4 {
          animation: laugh-text-4 3s ease-out infinite 0.5s;
        }
      `}</style>
    </>
  );
};

export function RocketAnimation({
  isActive,
  onComplete,
}: {
  isActive: boolean;
  onComplete: () => void;
}) {
  const [rockets, setRockets] = useState<RocketProps[]>([]);
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    if (isActive) {
      // Create rockets
      const newRockets = [];
      for (let i = 0; i < 12; i++) {
        newRockets.push({
          id: i,
          initialX: window.innerWidth / 2 - 50 + Math.random() * 100,
          initialY: window.innerHeight - 100,
          delay: i * 0.2,
        });
      }
      setRockets(newRockets);

      // Create stars
      const newStars = [];
      for (let i = 0; i < 30; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 3,
          size: 0.3 + Math.random() * 1,
        });
      }
      setStars(newStars);

      // Clean up after animation
      const timer = setTimeout(() => {
        setRockets([]);
        setStars([]);
        onComplete();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <>
      {/* Overlay for rocket animation */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] pointer-events-none" />

      {/* Luffy G5 Animation - Always visible when rocket animation is active */}
      <LuffyG5Component />

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
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            delay={star.delay}
            size={star.size}
          />
        ))}
      </AnimatePresence>

      {/* Celebration text */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none"
      >
      </motion.div>
    </>
  );
}
