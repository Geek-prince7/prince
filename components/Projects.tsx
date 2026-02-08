import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaRocket, 
  FaDatabase, 
  FaChartLine, 
  FaCog,
  FaServer,
  FaDollarSign
} from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'
import { SiApachekafka, SiClickhouse, SiNeo4J } from 'react-icons/si'

export default function Projects() {
  const projects = [
    {
      title: 'Log Nerve',
      subtitle: 'Polyglot Microservice Logging Platform',
      description: 'Open-source distributed logging and observability platform with Kafka-driven ingestion, multi-language SDKs, anomaly detection, and real-time dashboards. Showcases microservice orchestration and streaming architecture.',
      technologies: ['Kafka', 'React', 'Microservices', 'WebSockets', 'Docker', 'Anomaly Detection'],
      features: [
        'Kafka-based log ingestion pipeline',
        'Polyglot SDK support (Java, Python, Node.js)',
        'Real-time anomaly detection',
        'Interactive React dashboard',
        'Per-service database optimization',
        'CDN log shipping'
      ],
      impact: 'Demonstrates distributed system design, streaming data processing, and observability tooling',
      link: 'https://github.com/Geek-prince7',
      featured: true,
      icon: SiApachekafka,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Real-Time Analytics Platform',
      subtitle: 'ClickHouse-based Query Engine',
      description: 'Production analytics platform processing 50M+ events/day with sub-100ms query latency. Multi-region deployment with auto-scaling and cost optimization.',
      technologies: ['ClickHouse', 'Kafka', 'AWS', 'Multi-region', 'Auto-scaling'],
      features: [
        '50M+ events/day processing',
        '300ms → 100ms latency optimization',
        'Multi-region deployment',
        'Auto-scaling infrastructure',
        'Real-time data exploration',
        'Cost-optimized storage'
      ],
      impact: 'Used by 70%+ customers, drove 17% revenue growth',
      featured: true,
      icon: SiClickhouse,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Deduplication Engine',
      subtitle: 'Large-scale Data Processing System',
      description: 'Kafka Streams + BigTable platform for real-time deduplication at 2TB/day scale. Achieved 99.99% accuracy with 40% cost reduction.',
      technologies: ['Kafka Streams', 'BigTable', 'GCP', 'Stream Processing'],
      features: [
        '2TB/day data ingestion',
        '99.99% deduplication accuracy',
        'Real-time stream processing',
        'Scalable BigTable storage',
        '40% infrastructure cost savings',
        'Multi-stage pipeline architecture'
      ],
      impact: '40% cost savings, production-grade reliability',
      featured: true,
      icon: FaDatabase,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'User Journeys Graph Engine',
      subtitle: 'Neo4j Multi-funnel Analytics',
      description: 'Graph database system for visualizing complex user journeys across multiple funnels. Enables advanced behavioral analytics and conversion optimization.',
      technologies: ['Neo4j', 'Graph DB', 'Analytics', 'Visualization'],
      features: [
        'Multi-funnel journey mapping',
        'Graph-based analytics',
        'Real-time path visualization',
        'Conversion funnel analysis',
        'Behavioral pattern detection',
        'Interactive journey explorer'
      ],
      impact: 'Used by 60%+ customers, 30% engagement growth',
      featured: true,
      icon: SiNeo4J,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Phoenix Uploader Platform',
      subtitle: 'IoT Device Management System',
      description: 'Large-scale biometric device management platform controlling 7,000+ devices and processing 4M punches/day via Kafka batch pipelines.',
      technologies: ['Kafka', 'IoT', 'Device Management', 'Batch Processing'],
      features: [
        '7,000+ device orchestration',
        '4M events/day processing',
        'Kafka batch pipelines',
        'Remote device control',
        '70% latency reduction',
        '99.95% system reliability'
      ],
      impact: '99.95% reliability, enterprise-scale IoT platform',
      featured: false,
      icon: FaServer,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Payout Automation System',
      subtitle: 'High-volume Transaction Platform',
      description: 'Automated payout processing system handling 100k weekly transactions with zero payment delays and complete audit trails.',
      technologies: ['Spring Boot', 'MySQL', 'Payment APIs', 'Automation'],
      features: [
        '100k weekly transactions',
        'Zero payment delays',
        '80% time reduction',
        'Complete audit trails',
        'Multi-bank integration',
        'Automated reconciliation'
      ],
      impact: '80% processing time reduction, zero delays',
      featured: false,
      icon: FaDollarSign,
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Large-scale distributed systems and data infrastructure platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden group card-hover backdrop-blur-sm"
            >
              <div className="p-6 md:p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded-lg"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <HiLightningBolt className="text-yellow-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start text-sm text-gray-300 hover:text-blue-400 transition-colors group/item">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-2 group-hover/item:scale-150 transition-transform"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                    <FaChartLine className="text-green-400" />
                    <span className="text-sm font-medium text-green-400">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-xs text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
