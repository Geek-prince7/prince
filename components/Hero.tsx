'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const roles = [
    'Senior Backend Engineer',
    'Distributed Systems Expert',
    'Data Infrastructure Specialist',
    'Microservices Architect'
  ]

  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 animate-pulse-slow"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-2">
              <p className="text-blue-400 text-lg font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Prince Dubey
              </h1>
              <div className="h-12 md:h-16">
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500">
                  {roles[currentRole]}
                </h2>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Senior Backend Engineer with <span className="text-blue-400 font-semibold">5+ years</span> of experience 
              building <span className="text-cyan-400 font-semibold">real-time analytics</span> and{' '}
              <span className="text-cyan-400 font-semibold">data infrastructure</span> at scale. 
              I design Kafka-driven distributed systems, low-latency OLAP platforms with ClickHouse, 
              and cloud-native pipelines processing{' '}
              <span className="text-blue-400 font-semibold">tens of millions of events daily</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/PRINCE_DUBEY_5YRS_DEV.pdf"
                download
                className="group relative px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold overflow-hidden hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-cyan-400 transition-colors">Download Resume</span>
                <div className="absolute inset-0 border-2 border-cyan-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/Geek-prince7"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/profile-princedubey/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/Prince__7/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LeetCode"
              >
                <svg className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {/* Multiple gradient layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full animate-spin-slow opacity-75">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 p-1 blur-sm"></div>
              </div>
              
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 hover:scale-105 transition-transform duration-500 hover:border-cyan-500/50">
                <Image
                  src="/Prince.png"
                  alt="Prince Dubey - Senior Backend Engineer, Distributed Systems Expert, Kafka Specialist, ClickHouse Developer"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-8 border border-blue-500/20 rounded-full animate-ping-slow"></div>
              <div className="absolute -inset-12 border border-cyan-500/10 rounded-full animate-ping-slower"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
