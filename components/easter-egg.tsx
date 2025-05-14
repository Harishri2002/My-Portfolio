"use client"

import { useEffect } from "react"

export function EasterEgg() {
  useEffect(() => {
    // Konami code sequence
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ]
    let konamiCodePosition = 0

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the key pressed matches the next key in the Konami code
      if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++

        // If the entire code has been entered correctly
        if (konamiCodePosition === konamiCode.length) {
          activateEasterEgg()
          konamiCodePosition = 0
        }
      } else {
        konamiCodePosition = 0
      }
    }

    const activateEasterEgg = () => {
      // Add a class to the body for rainbow background effect
      document.body.classList.add("konami-active")

      // Create a floating message
      const message = document.createElement("div")
      message.textContent = "🎮 Konami Code Activated! 🎮"
      message.style.position = "fixed"
      message.style.top = "50%"
      message.style.left = "50%"
      message.style.transform = "translate(-50%, -50%)"
      message.style.padding = "20px"
      message.style.background = "rgba(0, 0, 0, 0.8)"
      message.style.color = "white"
      message.style.borderRadius = "10px"
      message.style.zIndex = "9999"
      message.style.fontSize = "24px"
      message.style.fontWeight = "bold"
      message.style.textAlign = "center"
      message.style.animation = "secretPulse 2s infinite"

      document.body.appendChild(message)

      // Remove the message and class after 5 seconds
      setTimeout(() => {
        document.body.removeChild(message)
        document.body.classList.remove("konami-active")
      }, 5000)
    }

    // Add click handler for the portfolio logo
    const logoClickHandler = () => {
      const logo = document.querySelector(".rainbow-text")
      if (logo) {
        logo.addEventListener("click", (e) => {
          // Check if Shift key is pressed during click for another easter egg
          if ((e as MouseEvent).shiftKey) {
            e.preventDefault()
            alert("🎉 You found a secret! Thanks for exploring my portfolio in detail!")
          }
        })
      }
    }

    // Set up event listeners
    document.addEventListener("keydown", handleKeyDown)
    logoClickHandler()

    // Clean up event listeners
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}
