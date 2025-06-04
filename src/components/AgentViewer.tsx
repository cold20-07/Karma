import React, { useState } from 'react';
import { Agent, AgentTask } from '../types';
import { executeTask } from '../services/agentService';
import { useMCP } from '../context/MCPContext';

interface AgentViewerProps {
  agent: Agent | null;
}

const AgentViewer: React.FC<AgentViewerProps> = ({ agent }) => {
  const [runningTaskId, setRunningTaskId] = useState<string | null>(null);
  const { context } = useMCP();
  
  if (!agent) return null;

  const handleRunTask = async (task: AgentTask) => {
    if (runningTaskId) return;
    
    setRunningTaskId(task.id);
    
    try {
      console.log(`Running task: ${task.description}`);
      const response = await executeTask(task, context);
      console.log(`Task completed with response:`, response);
      
      // Here you would update the agent state with the new task status
      // For simplicity, we're just logging the response
    } catch (error) {
      console.error(`Error running task:`, error);
    } finally {
      setRunningTaskId(null);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Agent: {agent.name}
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {agent.description}
      </p>
      
      <div className="space-y-3">
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">
          Task Breakdown
        </h3>
        
        <div className="space-y-2">
          {agent.tasks.map((task) => (
            <div 
              key={task.id}
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div 
                    className={`w-3 h-3 rounded-full mr-2 ${
                      task.status === 'completed' ? 'bg-green-500' :
                      task.status === 'failed' ? 'bg-red-500' :
                      task.status === 'in-progress' ? 'bg-yellow-500' : 
                      'bg-gray-400'
                    }`}
                  ></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {task.description}
                  </span>
                </div>
                
                <button
                  onClick={() => handleRunTask(task)}
                  disabled={runningTaskId !== null || task.status === 'completed'}
                  className={`px-3 py-1 text-xs rounded font-medium ${
                    runningTaskId === task.id ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    task.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    runningTaskId !== null ? 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800'
                  }`}
                >
                  {runningTaskId === task.id ? 'Running...' :
                   task.status === 'completed' ? 'Completed' :
                   'Run Task'}
                </button>
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Model: {task.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentViewer;