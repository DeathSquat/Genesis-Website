import React, { useState, useEffect } from "react"
import Header from "./components/header"
import InteractiveBackground from "./components/interactive-background"
import Hero from "./components/hero"
import Events from "./components/events"
import Community from "./components/community"
import Highlights from "./components/highlights"
import Partners from "./components/partners"
import Footer from "./components/footer"
import LoadingScreen from "./components/loading-screen"

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen bg-background relative overflow-hidden">
        <InteractiveBackground />
        <Header />
        <Hero />
        <Events />
        <Community />
        <Highlights />
        <Partners />
        <Footer />
      </main>
    </>
  )
}
