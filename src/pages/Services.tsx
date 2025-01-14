import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, Database, Clock, ArrowLeft,
  Terminal, Users, Zap, Shield,
  BarChart, Bot, Calendar,
  Mail, Twitter, Github, MapPin, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: "customer-support",
      icon: <MessageSquare className="w-12 h-12" />,
      title: "AI-Powered Customer Support",
      description: "Transform your customer service with intelligent automation.",
      benefits: [
        {
          icon: <Bot className="w-6 h-6" />,
          title: "Enhance Responsiveness",
          description: "Deliver instant, 24/7 support to your customers, ensuring their inquiries are addressed promptly, regardless of time zones."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Personalize Interactions",
          description: "Utilize intelligent algorithms to understand customer preferences and tailor responses, fostering a more engaging and satisfying experience."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Optimize Resources",
          description: "Automate routine inquiries, allowing your human agents to focus on complex issues, thereby improving overall efficiency and reducing operational costs."
        }
      ]
    },
    {
      id: "crm-integration",
      icon: <Database className="w-12 h-12" />,
      title: "Seamless CRM Integrations",
      description: "Streamline your customer relationship management with AI-powered automation.",
      benefits: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Automated Data Entry",
          description: "Eliminate manual data entry by automatically capturing and updating customer information, reducing errors and saving valuable time."
        },
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Intelligent Insights",
          description: "Analyze customer interactions to provide actionable insights, enabling you to make informed decisions that drive growth."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Enhanced Customer Engagement",
          description: "Leverage AI to identify patterns and predict customer needs, allowing for proactive engagement strategies that boost satisfaction and loyalty."
        }
      ]
    },
    {
      id: "appointment-scheduling",
      icon: <Clock className="w-12 h-12" />,
      title: "Intelligent Appointment Scheduling",
      description: "Optimize your scheduling process with AI-driven solutions.",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "24/7 Booking Availability",
          description: "Allow clients to schedule, reschedule, or cancel appointments at their convenience, without the need for human intervention."
        },
        {
          icon: <Bot className="w-6 h-6" />,
          title: "Automated Reminders",
          description: "Send timely reminders to clients, reducing no-shows and ensuring better time management for your team."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Resource Optimization",
          description: "Allocate appointments based on staff availability and expertise, maximizing productivity and enhancing the customer experience."
        }
      ]
    }
  ];

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
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">&gt; Home</Link>
              <Link to="/services" className="text-purple-400">&gt; Services</Link>
              <button className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-300">
                &gt;_START
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className={`${isVisible ? 'type-animation' : 'opacity-0'}`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${!isTypingDone ? 'cursor' : ''}`}>
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover how our AI-powered solutions can transform your business operations and drive growth through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="bg-purple-500/20 rounded-2xl p-4 w-fit mx-auto mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-xl text-gray-300">{service.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="bg-purple-500/20 rounded-lg p-3 w-fit mb-6">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <button className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300">
                      Get Started with {service.title}
                    </button>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-32 border-t border-white/10" />
                )}
              </div>
            ))}
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

export default Services;