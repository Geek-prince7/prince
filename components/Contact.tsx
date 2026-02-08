'use client'

import { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaCode,
  FaFileDownload,
  FaPaperPlane
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'princedby729@gmail.com',
      link: 'mailto:princedby729@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HiMail,
      label: 'Alt Email',
      value: 'vibpri729@gmail.com',
      link: 'mailto:vibpri729@gmail.com',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9311663050',
      link: 'tel:+919311663050',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'profile-princedubey',
      link: 'https://www.linkedin.com/in/profile-princedubey/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@Geek-prince7',
      link: 'https://github.com/Geek-prince7',
      color: 'from-gray-700 to-gray-500'
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      value: '@Prince__7',
      link: 'https://leetcode.com/u/Prince__7/',
      color: 'from-yellow-600 to-orange-500'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:princedby729@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative">
      <div className="section-shell py-16 md:py-20 space-y-12">
        <div className="text-center space-y-3">
          <p className="chip mx-auto w-fit">Let&apos;s talk reliability</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Open to senior backend roles, platform leadership, or collaboration on resilient data products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center space-x-4 p-4 glass rounded-xl hover:border-blue-400/50 transition-all duration-300 card-hover"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-300 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <FaCode className="text-lg text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="/PRINCE_DUBEY_5YRS_DEV.pdf"
                  download
                  className="group flex items-center gap-3 text-blue-300 hover:text-white transition-all hover:translate-x-2 duration-300"
                >
                  <FaFileDownload className="text-lg group-hover:scale-110 transition-transform" />
                  <span>Download Resume</span>
                </a>
                <a
                  href="https://github.com/Geek-prince7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-blue-300 hover:text-white transition-all hover:translate-x-2 duration-300"
                >
                  <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                  <span>View GitHub Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/profile-princedubey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-blue-300 hover:text-white transition-all hover:translate-x-2 duration-300"
                >
                  <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <FaPaperPlane className="text-xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
