export default function Experience() {
  const experiences = [
    {
      company: 'Wingify Software Pvt Ltd',
      position: 'Senior Software Engineer',
      period: 'Current',
      location: 'Analytics & Data Infrastructure',
      achievements: [
        {
          title: 'Analytics Platform',
          description: 'Built analytics platform used by 70%+ customers, driving 17% revenue uplift and 3× faster data exploration',
          impact: '70%+ adoption, 17% revenue growth'
        },
        {
          title: 'User Journeys Graph Engine',
          description: 'Designed Neo4j-based multi-funnel visualization system used by 60%+ customers, driving 30% engagement growth',
          impact: '60%+ usage, 30% engagement boost'
        },
        {
          title: 'Deduplication Platform',
          description: 'Built Kafka Streams + BigTable deduplication engine processing 2TB/day with 99.99% accuracy',
          impact: '40% cost savings, 2TB/day scale'
        },
        {
          title: 'Real-Time Query Engine',
          description: 'Optimized ClickHouse-based query engine for 50M+ events/day, cutting latency from 300ms to 100ms',
          impact: '3× latency improvement'
        }
      ]
    },
    {
      company: 'Allorasoft Pvt Ltd',
      position: 'Software Engineer II',
      period: 'Previous',
      location: 'HRMS & Enterprise Systems',
      achievements: [
        {
          title: 'Payroll Engine',
          description: 'Automated payroll processing for 3,000+ employees with 99.9% accuracy, reducing manual effort by 60%',
          impact: '60% efficiency gain'
        },
        {
          title: 'Phoenix Uploader Platform',
          description: 'Built device management system controlling 7,000+ biometric devices, ingesting 4M punches/day via Kafka',
          impact: '4M events/day, 99.95% reliability'
        },
        {
          title: 'Mobile HRMS App',
          description: 'Developed Flutter app for 9,000+ DAU with geo-punching and real-time attendance',
          impact: '9,000+ daily users'
        },
        {
          title: 'HR Onboarding System',
          description: 'Built automated onboarding platform cutting time by 50% and boosting productivity 35%',
          impact: '50% faster onboarding'
        }
      ]
    },
    {
      company: 'IJ Bemus Pvt Ltd',
      position: 'Software Engineer I',
      period: 'Early Career',
      location: 'Mobility & Logistics Tech',
      achievements: [
        {
          title: 'Rider KYC Automation',
          description: 'Integrated Signzy APIs reducing onboarding from 2 days to 30 minutes (95% faster)',
          impact: '95% faster verification'
        },
        {
          title: 'Payout Automation',
          description: 'Built automated payout system processing 100k weekly transactions with zero delays',
          impact: '100k weekly txns'
        },
        {
          title: 'Admin Platform',
          description: 'Developed 25+ APIs handling 10k concurrent operations with 40% performance boost',
          impact: '40% performance gain'
        },
        {
          title: 'Logistics Optimization',
          description: 'Implemented rider matching and geofencing increasing engagement 25%, reducing idle time 20%',
          impact: '25% engagement boost'
        }
      ]
    }
  ]

  return (
    <section id="experience" className="relative">
      <div className="section-shell py-16 md:py-20 space-y-10">
        <div className="text-center space-y-3">
          <p className="chip mx-auto w-fit">Impact over buzzwords</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b from-blue-500/40 via-cyan-400/30 to-transparent md:before:left-1/2 before:-z-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative glass rounded-2xl p-6 md:p-8 card-hover border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-blue-200 font-semibold text-lg">{exp.position}</p>
                    <p className="text-gray-400 text-sm mt-1">{exp.location}</p>
                  </div>
                  <span className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-blue-200">
                    {exp.period}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="glass p-5 rounded-xl border border-white/10 hover:border-blue-400/40 transition-all duration-300"
                    >
                      <h4 className="text-cyan-300 font-semibold mb-2 flex items-start gap-2">
                        <span className="text-blue-400">▹</span>
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                      <span className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-xs font-medium text-blue-200">
                        {achievement.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
