"use client"

import { useState, useEffect } from "react"
import styles from "./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contacts } from "./components/Contacts/Contacts"
import { Connect } from "./components/Mail/Connect"

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderText}>Welcome to My World</div>
      <div className={styles.spinner}></div>
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating asset loading
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate 3 seconds loading time
      setIsLoading(false)
    }
    loadAssets()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader /> // Show loader while loading
      ) : (
        <div className={styles.App}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Connect />
          <Contacts />
        </div>
      )}
    </>
  )
}

export default App
