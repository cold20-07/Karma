import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, ArrowRight, Brain, Workflow, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaitlistModal from './components/WaitlistModal';

const App = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex justify-between items-center"
        >
          <span className="text-xl font-bold gradient-text">PROJECT ZETA</span>
          <div className="px-4 py-2 border border-white/20 rounded-full text-sm">
            Coming Soon
          </div>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Intelligent
              <br />
              <span className="gradient-text">AI Orchestration</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Project Zeta revolutionizes AI workflows by intelligently orchestrating multiple models, 
              optimizing prompts, and automating complex tasks through a unified protocol.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="px-8 py-4 bg-gradient-linear from-white via-gray-300 to-gray-500 text-black rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Join Waitlist
              </button>
              <Link 
                to="/learn-more"
                className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Key Features */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Intelligent Prompt Enhancement',
                description: 'Advanced algorithms analyze and optimize your prompts for maximum effectiveness across different AI models.',
                icon: Brain
              },
              {
                title: 'Multi-Model Orchestration',
                description: 'Seamlessly coordinate multiple AI models to tackle complex tasks with optimal efficiency.',
                icon: Network
              },
              {
                title: 'Automated Workflows',
                description: 'Create sophisticated AI pipelines that automatically break down and execute complex tasks.',
                icon: Workflow
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
              >
                <feature.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <span className="inline-flex items-center text-sm">
                  <span>Coming Soon</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Details */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Technical Capabilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Built on cutting-edge technology to deliver powerful AI orchestration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Model Context Protocol (MCP)',
                  description: 'A sophisticated protocol that maintains context and ensures coherent communication between different AI models and tasks.',
                  details: ['Context preservation across models', 'Intelligent state management', 'Optimized data flow']
                },
                {
                  title: 'Dynamic Task Decomposition',
                  description: 'Automatically breaks down complex tasks into optimized subtasks for efficient processing.',
                  details: ['Intelligent task analysis', 'Optimal model selection', 'Parallel processing']
                },
                {
                  title: 'Advanced Prompt Engineering',
                  description: 'Sophisticated algorithms that enhance prompts for better AI model performance.',
                  details: ['Context-aware optimization', 'Model-specific formatting', 'Dynamic adaptation']
                },
                {
                  title: 'Real-time Orchestration',
                  description: 'Seamlessly coordinates multiple AI models and tasks in real-time.',
                  details: ['Load balancing', 'Priority queuing', 'Failure recovery']
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-400 mb-4 md:mb-0">© 2025 Project Zeta. All rights reserved.</span>
          <div className="flex space-x-6">
            {['About', 'Documentation', 'GitHub'].map((item) => (
              <span key={item} className="hover-underline cursor-not-allowed">
                Coming Soon
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;