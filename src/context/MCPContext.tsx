import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MCPContext as MCPContextType } from '../types';

const initialContext: MCPContextType = {
  conversationHistory: [],
};

const MCPContext = createContext<{
  context: MCPContextType;
  updateContext: (newContext: Partial<MCPContextType>) => void;
  addToConversation: (role: 'user' | 'assistant' | 'system', content: string) => void;
}>({
  context: initialContext,
  updateContext: () => {},
  addToConversation: () => {},
});

export const useMCP = () => useContext(MCPContext);

interface MCPProviderProps {
  children: ReactNode;
}

export const MCPProvider: React.FC<MCPProviderProps> = ({ children }) => {
  const [context, setContext] = useState<MCPContextType>(initialContext);

  const updateContext = (newContext: Partial<MCPContextType>) => {
    setContext((prevContext) => ({
      ...prevContext,
      ...newContext,
    }));
  };

  const addToConversation = (role: 'user' | 'assistant' | 'system', content: string) => {
    setContext((prevContext) => ({
      ...prevContext,
      conversationHistory: [
        ...prevContext.conversationHistory,
        {
          role,
          content,
          timestamp: Date.now(),
        },
      ],
    }));
  };

  return (
    <MCPContext.Provider value={{ context, updateContext, addToConversation }}>
      {children}
    </MCPContext.Provider>
  );
};