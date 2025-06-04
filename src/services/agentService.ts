import { Agent, AgentTask } from '../types';
import { generateText } from './api';

/**
 * Creates an AI agent by decomposing a complex task into smaller subtasks
 */
export async function createAgent(taskDescription: string): Promise<Agent> {
  // Generate a unique ID for the agent
  const agentId = `agent-${Date.now()}`;
  
  // For demonstration purposes, we'll create a simulated agent with predefined tasks
  // In a real implementation, we would use an AI model to decompose the task
  
  const agent: Agent = {
    id: agentId,
    name: `Agent for: ${taskDescription.slice(0, 30)}...`,
    description: taskDescription,
    tasks: [
      {
        id: `task-${Date.now()}-1`,
        description: 'Analyze and understand the main objective',
        model: 'gemini-2.0-flash',
        status: 'pending',
      },
      {
        id: `task-${Date.now()}-2`,
        description: 'Research necessary information',
        model: 'gemini-2.0-pro',
        status: 'pending',
      },
      {
        id: `task-${Date.now()}-3`,
        description: 'Generate preliminary results',
        model: 'gemini-2.0-flash',
        status: 'pending',
      },
      {
        id: `task-${Date.now()}-4`,
        description: 'Review and refine the output',
        model: 'gemini-2.0-pro',
        status: 'pending',
      },
    ],
  };
  
  return agent;
}

/**
 * Executes a specific task within an agent
 */
export async function executeTask(task: AgentTask, context: any): Promise<string> {
  // Update task status
  task.status = 'in-progress';
  
  try {
    // Construct a prompt based on the task and context
    const prompt = `Task: ${task.description}\nContext: ${JSON.stringify(context)}`;
    
    // Generate response using the specified model
    const response = await generateText(prompt, task.model);
    
    // Mark task as completed
    task.status = 'completed';
    
    return response;
  } catch (error) {
    // Mark task as failed
    task.status = 'failed';
    console.error(`Failed to execute task: ${task.description}`, error);
    throw new Error(`Failed to execute task: ${task.description}`);
  }
}