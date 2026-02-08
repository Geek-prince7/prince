'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/prince' : ''

export default function ModernHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const roles = ['Backend Architect', 'System Designer', 'Data Engineer', 'Platform Engineer']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20 opacity-50"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Prince Dubey
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="h-16 md:h-20"
              >
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                >
                  {roles[currentRole]}
                </motion.h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                Building <span className="text-blue-400 font-semibold">real-time analytics platforms</span> processing{' '}
                <span className="text-cyan-400 font-semibold">50M+ events/day</span> with{' '}
                <span className="text-emerald-400 font-semibold">99.99% reliability</span>
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/50 flex items-center gap-2 hover:shadow-xl hover:shadow-blue-500/70 transition-shadow"
              >
                Let's Connect
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={`${BASE_PATH}/PRINCE_DUBEY_5YRS_DEV.pdf`}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <HiDownload className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 items-center"
            >
              <span className="text-gray-400 text-sm">Connect:</span>
              {[
                { icon: FaGithub, href: 'https://github.com/Geek-prince7', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/profile-princedubey/', label: 'LinkedIn' },
                { icon: SiLeetcode, href: 'https://leetcode.com/u/Prince__7/', label: 'LeetCode' }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                rotateY: mousePosition.x * 0.5,
                rotateX: -mousePosition.y * 0.5,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-10 blur-3xl"></div>

              {/* Main Card */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`${BASE_PATH}/Prince.png`}
                  alt="Prince Dubey - Senior Backend Engineer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Available for hire</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Years', value: '5+' },
                      { label: 'Projects', value: '20+' },
                      { label: 'Impact', value: '99.99%' }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {[
                { icon: '⚡', delay: 0, x: -20, y: -20 },
                { icon: '🚀', delay: 0.2, x: 20, y: -30 },
                { icon: '💾', delay: 0.4, x: 30, y: 20 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + item.delay, duration: 0.5 }}
                  className="absolute text-4xl"
                  style={{
                    right: `${item.x}%`,
                    top: `${50 + item.y}%`,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
