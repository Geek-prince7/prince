import { 
  FaCode, 
  FaCogs, 
  FaDatabase, 
  FaRocket, 
  FaCloud, 
  FaBolt, 
  FaChartLine, 
  FaCubes,
  FaJava,
  FaPython,
  FaNode,
  FaAws,
  FaDocker
} from 'react-icons/fa'
import { 
  SiGo,
  SiSpring,
  SiExpress,
  SiDjango,
  SiApachekafka,
  SiMongodb,
  SiElasticsearch,
  SiGooglecloud,
  SiKubernetes,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiNeo4J,
  SiClickhouse
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', icon: FaJava },
        { name: 'Go', icon: SiGo },
        { name: 'Python', icon: FaPython },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'C++', icon: null },
        { name: 'Dart', icon: null },
        { name: 'Shell', icon: null }
      ]
    },
    {
      category: 'Frameworks & APIs',
      icon: FaCogs,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Spring Boot', icon: SiSpring },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Django', icon: SiDjango },
        { name: 'Flask', icon: null },
        { name: 'Apache Beam', icon: null },
        { name: 'gRPC', icon: null },
        { name: 'REST', icon: null },
        { name: 'GraphQL', icon: null }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: FaDatabase,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'ClickHouse', icon: SiClickhouse },
        { name: 'BigQuery', icon: FaDatabase },
        { name: 'Neo4j', icon: SiNeo4J },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Elasticsearch', icon: SiElasticsearch },
        { name: 'MySQL', icon: null },
        { name: 'PostgreSQL', icon: null },
        { name: 'SQLite', icon: null }
      ]
    },
    {
      category: 'Streaming & Messaging',
      icon: FaRocket,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Apache Kafka', icon: SiApachekafka },
        { name: 'Kafka Streams', icon: null },
        { name: 'Google Pub/Sub', icon: null },
        { name: 'AWS SQS', icon: null },
        { name: 'Event-Driven', icon: null }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: FaCloud,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'AWS', icon: FaAws },
        { name: 'GCP', icon: SiGooglecloud },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'NGINX', icon: null },
        { name: 'Jenkins', icon: null },
        { name: 'CI/CD', icon: null }
      ]
    },
    {
      category: 'Caching & Performance',
      icon: FaBolt,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Redis', icon: SiRedis },
        { name: 'Memcached', icon: null },
        { name: 'Distributed Caching', icon: null },
        { name: 'Query Optimization', icon: null }
      ]
    },
    {
      category: 'Observability',
      icon: FaChartLine,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'OpenTelemetry', icon: null },
        { name: 'Sentry', icon: null },
        { name: 'Monitoring', icon: null },
        { name: 'Performance Profiling', icon: null }
      ]
    },
    {
      category: 'Architecture Patterns',
      icon: FaCubes,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Microservices', icon: null },
        { name: 'Event-Driven', icon: null },
        { name: 'Data Pipelines', icon: null },
        { name: 'Stream Processing', icon: null },
        { name: 'High Availability', icon: null }
      ]
    }
  ]

  return (
    <section id="skills" className="relative">
      <div className="section-shell py-16 md:py-20 space-y-12">
        <div className="text-center space-y-3">
          <p className="chip mx-auto w-fit">Performance • Reliability • Observability</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive stack to design, run, and observe high-throughput distributed systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 card-hover group"
            >
              <div className="flex items-center mb-6 gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                  >
                    {skill.icon && <skill.icon className="text-blue-300 group-hover/skill:text-cyan-300 transition-colors" />}
                    <span className="group-hover/skill:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <FaBolt className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Key Strengths</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'TB-scale Data Systems',
              'Kafka Architecture',
              'ClickHouse Mastery',
              'Graph DB Analytics',
              'Cloud Optimization',
              'Metrics-driven Impact',
              'High Availability',
              'Cost Efficiency'
            ].map((strength, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="font-medium text-sm">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
