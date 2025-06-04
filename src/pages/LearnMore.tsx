import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex justify-between items-center"
        >
          <Link to="/" className="flex items-center text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <span className="text-xl font-bold gradient-text">KARMA</span>
        </motion.nav>
      </header>

      {/* Content */}
      <div className="pt-24 px-6 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto prose prose-invert"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">
            The Intelligent AI Orchestrator: Your Personalized AI Powerhouse
          </h1>

          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4"
            >
              Our Vision
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-gray-400"
            >
              To make the vast potential of artificial intelligence universally accessible and 
              effortlessly powerful, transforming complex tasks into intuitive experiences 
              tailored just for you.
            </motion.p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What the App Can Do</h2>
            <div className="grid gap-8">
              {[
                {
                  title: "Access a Universe of AI Models",
                  description: "Instead of being limited to a single AI, you can seamlessly tap into a diverse collection of the world's leading AI models – from advanced language generators to sophisticated image creators and specialized problem-solvers – all from one intuitive platform."
                },
                {
                  title: "Get Perfect AI Responses, Every Time",
                  description: "You no longer need to be an expert in crafting complex AI prompts. Simply tell the app what you need, and its intelligence will automatically refine, clarify, and enhance your request, ensuring the AI models receive optimal instructions for the best possible outcome."
                },
                {
                  title: "Automate Complex Projects with Intelligent Agents",
                  description: "For ambitious or multi-faceted tasks, the app can take your high-level request and break it down into a series of smaller, manageable steps. It then dynamically creates specialized AI \"agents\" that work together, leveraging different models, to get the entire job done for you, from start to finish."
                },
                {
                  title: "Experience AI That Understands You",
                  description: "Over time, the app learns your unique needs, preferences, and working style. It remembers what kind of results you like, which models you prefer for certain tasks, and how you typically interact, continuously adapting to provide a truly personalized and proactive AI experience."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid gap-6">
              {[
                {
                  title: "Multi-AI Model Selection",
                  description: "Directly choose from a curated library of various AI models for text generation, image creation, data analysis, and more, all within a unified interface."
                },
                {
                  title: "Smart Prompt Enhancement",
                  description: "An intelligent layer that automatically analyzes your input, clarifies ambiguities, adds necessary context, and rephrases your prompt for the best possible AI understanding and output."
                },
                {
                  title: "Personalized Experience Engine",
                  description: "An integrated machine learning system that adapts to your behavior, preferences, and recurring needs, offering tailored suggestions and optimizing workflows specifically for you."
                },
                {
                  title: "Dynamic AI Agent Creation",
                  description: "Define a high-level goal, and the app will autonomously design, deploy, and manage a series of interconnected AI sub-tasks and agents to execute the entire workflow."
                },
                {
                  title: "Seamless Context Management (MCP)",
                  description: "Ensures that the \"memory\" and vital information from one AI interaction or step are seamlessly passed to the next, maintaining coherence and enabling complex, continuous projects without losing track."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-linear from-white to-gray-500" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;