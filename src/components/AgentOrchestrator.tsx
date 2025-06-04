import React, { useState } from 'react';
import { Agent, AgentTask } from '../types';
import { createAgent, executeTask } from '../services/agentService';
import { useMCP } from '../context/MCPContext';

interface AgentOrchestratorProps {
  onAgentCreated: (agent: Agent) => void;
}

const AgentOrchestrator: React.FC<AgentOrchestratorProps> = ({ onAgentCreated }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const { context } = useMCP();

  const handleCreateAgent = async () => {
    if (!taskDescription.trim() || isCreating) return;
    
    setIsCreating(true);
    
    try {
      console.log('Creating agent for task:', taskDescription);
      
      // Create an agent by decomposing the task
      const agent = await createAgent(taskDescription);
      
      // Notify parent component
      onAgentCreated(agent);
      
      // Clear input
      setTaskDescription('');
    } catch (error) {
      console.error('Error creating agent:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        AI Agent Orchestration
      </h2>
      
      <div className="space-y-3">
        <div>
          <label 
            htmlFor="taskDescription" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Complex Task Description
          </label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Describe a complex task that requires multiple steps..."
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-colors duration-200 ease-in-out
                     min-h-[80px] resize-y"
            disabled={isCreating}
          />
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleCreateAgent}
            disabled={!taskDescription.trim() || isCreating}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                      ${!taskDescription.trim() || isCreating
                        ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg'
                      }`}
          >
            {isCreating ? 'Creating Agent...' : 'Create AI Agent'}
          </button>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          <p>
            The AI agent will decompose your complex task into smaller subtasks, select the 
            appropriate models for each step, and orchestrate the entire process using the 
            Model Context Protocol.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentOrchestrator;