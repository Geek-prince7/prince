'use client'

import { useState, useEffect } from 'react'
import { FaBriefcase, FaRocket, FaDatabase, FaBullseye, FaCode, FaUser } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function About() {
  const [counters, setCounters] = useState({ years: 0, events: 0, data: 0, reliability: 0 })

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setCounters({
        years: Math.min(Math.floor(progress * 5), 5),
        events: Math.min(Math.floor(progress * 50), 50),
        data: Math.min(Math.floor(progress * 2), 2),
        reliability: Math.min((progress * 99.99).toFixed(2) as any, 99.99)
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const highlights = [
    {
      metric: '5+',
      label: 'Years Experience',
      icon: FaBriefcase,
      counter: counters.years,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      metric: '50M+',
      label: 'Events/Day Processed',
      icon: FaRocket,
      counter: counters.events + 'M+',
      color: 'from-purple-400 to-pink-400'
    },
    {
      metric: '2TB+',
      label: 'Data Ingested Daily',
      icon: FaDatabase,
      counter: counters.data + 'TB+',
      color: 'from-green-400 to-emerald-400'
    },
    {
      metric: '99.99%',
      label: 'System Reliability',
      icon: FaBullseye,
      counter: counters.reliability + '%',
      color: 'from-orange-400 to-red-400'
    }
  ]

  const expertise = [
    'Distributed Systems Architecture',
    'Real-time Analytics Platforms',
    'Event-driven Microservices',
    'High-throughput Data Pipelines',
    'Cloud-scale Infrastructure',
    'Cost Optimization & Performance'
  ]

  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none blur-3xl" />

      <div className="section-shell relative z-10 py-16 md:py-20 space-y-12">
        <div className="text-center space-y-3">
          <p className="chip mx-auto w-fit">Backend • Data • Reliability</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Senior Backend Engineer designing resilient analytics platforms, Kafka-centric pipelines, and low-latency query engines at TB/day scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="glass p-8 rounded-2xl card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40">
                <FaUser className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I operate at the intersection of distributed systems and developer experience—shipping trustworthy services that stay fast under load and observable in production.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Wingify: built deduplication engines and graph analytics that powered 70%+ customers and unlocked double-digit revenue growth.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Specialties: Kafka-first architectures, ClickHouse performance tuning, cost-aware infra, and incident-ready observability.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/40">
                <HiSparkles className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Core Expertise</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 group/item hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover/item:scale-150 transition-transform" />
                  <span className="text-sm group-hover/item:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="glass p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 text-center card-hover h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10 space-y-2">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="text-2xl text-white" />
                    </div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.counter || item.metric}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{item.label}</div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 blur-sm opacity-40 animate-gradient" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
