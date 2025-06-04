export interface AIModel {
  id: string;
  name: string;
  type: 'text' | 'image';
  description: string;
}

export interface AIResponse {
  content: string;
  model: string;
  timestamp: number;
}

export interface MCPContext {
  lastPrompt?: string;
  enhancedPrompt?: string;
  lastResponse?: string;
  selectedModel?: string;
  conversationHistory: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
  }>;
}

export interface UserPreferences {
  preferredModel: string;
  theme: 'light' | 'dark';
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  tasks: AgentTask[];
}

export interface AgentTask {
  id: string;
  description: string;
  model: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
}