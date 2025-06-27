import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, ArrowRight, Brain, Workflow, Network, Users, FileText, Image, MessageSquare, CheckCircle, ArrowDown, Bot, Settings, Cloud, Layers } from 'lucide-react';
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
              Unlock
              <br />
              <span className="gradient-text">Limitless Possibilities</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Project Zeta makes AI simple and powerful for everyone. Get better results from AI, 
              automate complex tasks, and accomplish more with intelligent assistance.
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
        </div>
      </section>

      {/* Autonomous AI Agents Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold mb-4">
              Create Your Own <span className="gradient-text">AI Workforce</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Project Zeta doesn't just help you use AI - it creates personalized AI agents that work for you 24/7. 
              These intelligent assistants learn your preferences and handle complex tasks automatically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Autonomous AI Agents</h3>
                    <p className="text-gray-400">
                      Create custom AI agents that understand your specific needs and work independently to complete tasks, 
                      from simple automation to complex multi-step projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Automation</h3>
                    <p className="text-gray-400">
                      Your AI agents learn from your behavior and preferences, becoming more effective over time. 
                      They adapt to your workflow and anticipate your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">MCP Cloud Hosting</h3>
                    <p className="text-gray-400">
                      Your AI agents run on our secure Model Context Protocol (MCP) infrastructure, 
                      ensuring they're always available and maintain context across all interactions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Visual representation */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Layers className="w-6 h-6" />
                  <span className="font-bold">Your Personal AI Agent Network</span>
                </div>
                
                {/* Agent Cards */}
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">📧 Email Assistant Agent</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-sm text-gray-300">Automatically sorts, responds, and schedules emails</p>
                  </div>

                  <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">📊 Research Agent</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-sm text-gray-300">Continuously monitors trends in your industry</p>
                  </div>

                  <div className="p-4 bg-orange-500/20 rounded-lg border border-orange-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">🎨 Content Creator Agent</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
                    </div>
                    <p className="text-sm text-gray-300">Creates social media posts and marketing content</p>
                  </div>

                  <div className="p-4 bg-gray-500/20 rounded-lg border border-gray-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">+ Create New Agent</span>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Ready</span>
                    </div>
                    <p className="text-sm text-gray-300">Design custom agents for any task</p>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Cloud className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">MCP Cloud Status</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300">All agents synchronized</span>
                    <span className="text-green-400">● Online</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Project Zeta Does */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold mb-4">What Project Zeta Does for You</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Think of Project Zeta as your smart AI assistant that knows how to get the best results from different AI tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Makes AI Easy to Use',
                description: 'Just tell us what you need in plain English. We handle all the technical stuff to get you perfect results.',
                icon: MessageSquare
              },
              {
                title: 'Chooses the Right AI for You',
                description: 'Different tasks need different AI tools. We automatically pick the best one for what you want to accomplish.',
                icon: Brain
              },
              {
                title: 'Handles Complex Projects',
                description: 'Give us a big task and we break it down into steps, using multiple AI tools to get everything done.',
                icon: CheckCircle
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
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">See Project Zeta in Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some real examples of how Project Zeta can help you accomplish tasks that would normally take hours
            </p>
          </motion.div>

          {/* Use Case 1: Content Creation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Create a Complete Marketing Campaign</h3>
              <p className="text-gray-400">
                You say: "I need a marketing campaign for my new coffee shop"
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">1</div>
                  <span>Project Zeta writes compelling ad copy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">2</div>
                  <span>Creates eye-catching images for social media</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">3</div>
                  <span>Designs a complete marketing strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-green-400">Ready-to-use marketing materials in minutes</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6" />
                  <span className="font-bold">Marketing Campaign Generator</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Writing ad copy</span>
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="flex items-center space-x-2">
                      <Image className="w-4 h-4" />
                      <span>Creating visuals</span>
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="flex items-center space-x-2">
                      <Brain className="w-4 h-4" />
                      <span>Strategy planning</span>
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 2: Research & Analysis */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Terminal className="w-6 h-6" />
                  <span className="font-bold">Research Assistant</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <span className="text-sm">Input: "Research sustainable packaging options for my business"</span>
                  </div>
                  <ArrowDown className="w-4 h-4 mx-auto text-gray-400" />
                  <div className="space-y-2">
                    <div className="p-2 bg-white/10 rounded text-sm">📊 Market analysis</div>
                    <div className="p-2 bg-white/10 rounded text-sm">💰 Cost comparisons</div>
                    <div className="p-2 bg-white/10 rounded text-sm">🌱 Environmental impact</div>
                    <div className="p-2 bg-white/10 rounded text-sm">📋 Implementation plan</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <h3 className="text-2xl font-bold">Get Comprehensive Research Done</h3>
              <p className="text-gray-400">
                You say: "Research sustainable packaging options for my business"
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold">1</div>
                  <span>Gathers information from multiple sources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold">2</div>
                  <span>Analyzes costs, benefits, and environmental impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold">3</div>
                  <span>Creates a detailed comparison report</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-green-400">Complete research report with recommendations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case 3: Learning & Education */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Learn Any Topic Effectively</h3>
              <p className="text-gray-400">
                You say: "I want to learn digital photography basics"
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold">1</div>
                  <span>Creates a personalized learning plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold">2</div>
                  <span>Generates easy-to-understand explanations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold">3</div>
                  <span>Creates practice exercises and quizzes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold">✓</div>
                  <span className="text-green-400">Complete learning curriculum tailored to you</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="w-6 h-6" />
                  <span className="font-bold">Learning Assistant</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30 text-center">
                    <div className="text-2xl mb-1">📚</div>
                    <div className="text-xs">Lesson 1: Camera Basics</div>
                  </div>
                  <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30 text-center">
                    <div className="text-2xl mb-1">🎯</div>
                    <div className="text-xs">Practice: Composition</div>
                  </div>
                  <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30 text-center">
                    <div className="text-2xl mb-1">💡</div>
                    <div className="text-xs">Tips: Lighting</div>
                  </div>
                  <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30 text-center">
                    <div className="text-2xl mb-1">✅</div>
                    <div className="text-xs">Quiz: Test Knowledge</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Powered by Advanced Technology</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on cutting-edge technology to deliver powerful AI orchestration and seamless user experiences
            </p>
          </motion.div>

          {/* Core Technologies */}
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
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Details */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-400 mb-4 md:mb-0">© 2025 Project Zeta. All rights reserved.</span>
          <div className="flex space-x-6">
            {['About', 'Documentation', 'GitHub'].map((item) => (
              <span key={item} className="hover-underline cursor-pointer text-gray-400 hover:text-white transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;