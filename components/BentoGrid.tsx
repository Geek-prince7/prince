'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaDatabase, FaBolt, FaChartLine, FaCloud, FaCog } from 'react-icons/fa'
import { SiApachekafka, SiClickhouse, SiNeo4J, SiSpring, SiDocker, SiKubernetes } from 'react-icons/si'

export default function BentoGrid() {
  const bentoItems = [
    {
      title: '50M+',
      subtitle: 'Events/Day',
      description: 'Real-time analytics platform processing millions of events with sub-100ms latency',
      icon: FaRocket,
      gradient: 'from-blue-500 to-cyan-500',
      size: 'large',
      stat: true
    },
    {
      title: 'Apache Kafka',
      subtitle: 'Streaming Expert',
      description: 'Event-driven architectures at scale',
      icon: SiApachekafka,
      gradient: 'from-purple-500 to-pink-500',
      size: 'medium'
    },
    {
      title: '2TB/Day',
      subtitle: 'Data Ingestion',
      description: 'Scalable data pipelines with 99.99% accuracy',
      icon: FaDatabase,
      gradient: 'from-green-500 to-emerald-500',
      size: 'medium',
      stat: true
    },
    {
      title: 'ClickHouse',
      subtitle: 'OLAP Engine',
      description: '300ms → 100ms query optimization',
      icon: SiClickhouse,
      gradient: 'from-yellow-500 to-orange-500',
      size: 'small'
    },
    {
      title: 'Neo4j',
      subtitle: 'Graph DB',
      description: 'Multi-funnel analytics',
      icon: SiNeo4J,
      gradient: 'from-cyan-500 to-blue-500',
      size: 'small'
    },
    {
      title: '5+ Years',
      subtitle: 'Experience',
      description: 'Building distributed systems at scale',
      icon: FaBolt,
      gradient: 'from-orange-500 to-red-500',
      size: 'medium',
      stat: true
    },
    {
      title: 'Spring Boot',
      subtitle: 'Microservices',
      description: 'Production-grade backend systems',
      icon: SiSpring,
      gradient: 'from-green-600 to-green-400',
      size: 'small'
    },
    {
      title: 'Cloud Native',
      subtitle: 'AWS & GCP',
      description: 'Docker, Kubernetes, multi-region deployments',
      icon: FaCloud,
      gradient: 'from-blue-600 to-cyan-400',
      size: 'medium'
    },
    {
      title: '99.99%',
      subtitle: 'Reliability',
      description: 'Enterprise-grade system uptime',
      icon: FaChartLine,
      gradient: 'from-pink-500 to-rose-500',
      size: 'small',
      stat: true
    }
  ]

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-2'
      case 'small':
        return 'md:col-span-1'
      default:
        return ''
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Expertise & Impact
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building scalable systems that process billions of events and serve millions of users
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className={`${getGridClass(item.size)} group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-6 cursor-pointer`}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                <item.icon className="text-2xl text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-2xl md:text-3xl font-bold mb-1 ${item.stat ? 'bg-gradient-to-r ' + item.gradient + ' bg-clip-text text-transparent' : 'text-white'}`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 font-medium mb-2">{item.subtitle}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${item.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-3 justify-center"
        >
          {[
            { name: 'Java', icon: null },
            { name: 'Go', icon: null },
            { name: 'Python', icon: null },
            { name: 'Kafka', icon: SiApachekafka },
            { name: 'ClickHouse', icon: SiClickhouse },
            { name: 'Docker', icon: SiDocker },
            { name: 'Kubernetes', icon: SiKubernetes },
            { name: 'Spring Boot', icon: SiSpring },
            { name: 'Redis', icon: null },
            { name: 'MongoDB', icon: null },
            { name: 'AWS', icon: null },
            { name: 'GCP', icon: null }
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 font-medium hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center gap-2"
            >
              {tech.icon && <tech.icon className="text-blue-400" />}
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
