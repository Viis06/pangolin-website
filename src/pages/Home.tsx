import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, ArrowRight, MessageSquare, Database, Clock, Shield,
  Users, Zap, Mail, Twitter, Github, Send, MapPin, Phone,
  Bot, BarChart, Calendar, FileText, Scale, Cpu
} from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <Terminal className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-semibold tracking-tight">Pangolin AI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-purple-400">&gt; Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">&gt; Services</Link>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">&gt; Contact</a>
              <button className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-300">
                &gt;_START
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${!isTypingDone ? 'cursor' : ''}`}>
                Supercharge your business with AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Enhancing Customer Support, CRM Integrations, and Appointment Scheduling through Intelligent Automation
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl text-lg font-medium transition-colors duration-300 flex items-center justify-center group">
                  Schedule a Free Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Pangolin AI?</h2>
            <p className="text-lg text-gray-300">
              We design custom AI automation solutions that optimize your workflows, so that you can focus on what truly matters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Personalized Solutions",
                description: "Tailored AI strategies designed to meet your unique business needs and objectives."
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Scalable Integration",
                description: "Flexible solutions that seamlessly grow and adapt with your business requirements."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "Access to a dedicated team of AI specialists committed to your success."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-purple-500/20 rounded-lg p-3 w-fit mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 relative bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-gray-300">
              Harness the power of AI to streamline operations, enhance customer experiences, and drive business growth through our comprehensive suite of automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Customer Support Automation",
                description: "Deliver exceptional 24/7 customer support with AI-powered chatbots that learn and adapt to your customers' needs.",
                link: "/services#customer-support"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "CRM Integrations",
                description: "Seamlessly integrate AI with your existing CRM systems to enhance data management and customer insights.",
                link: "/services#crm-integration"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Smart Scheduling",
                description: "Optimize appointment management with AI-driven scheduling that reduces no-shows and maximizes efficiency.",
                link: "/services#appointment-scheduling"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="relative">
                  <div className="bg-purple-500/20 rounded-2xl p-4 w-fit mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Get Your Free AI Consultation
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={4}
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-xl text-lg font-medium transition-colors duration-300 flex items-center justify-center">
                  Request Consultation
                  <Send className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-gray-400 text-center">
                  We respect your privacy and will not share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="w-6 h-6 text-purple-500" />
                <span className="text-xl font-semibold tracking-tight">Pangolin AI</span>
              </div>
              <p className="text-gray-400">
                Empowering businesses through intelligent automation solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">&gt; Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">&gt; Services</Link></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">&gt; Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  123 AI Street, Tech City, TC 12345
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@pangolinai.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-400">© 2025 Pangolin AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;