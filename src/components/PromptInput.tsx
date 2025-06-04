import React, { useState } from 'react';
import { enhancePrompt } from '../services/promptEnhancer';
import { useMCP } from '../context/MCPContext';

interface PromptInputProps {
  onSubmit: (originalPrompt: string, enhancedPrompt: string) => void;
  isProcessing: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ onSubmit, isProcessing }) => {
  const [prompt, setPrompt] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);
  const { addToConversation } = useMCP();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim() || isProcessing || isEnhancing) return;
    
    try {
      // Add the original prompt to the conversation
      addToConversation('user', prompt);
      
      // Set enhancing state
      setIsEnhancing(true);
      
      // Enhance the prompt
      const enhanced = await enhancePrompt(prompt);
      
      // Call the onSubmit callback with both prompts
      onSubmit(prompt, enhanced);
      
      // Clear the input
      setPrompt('');
    } catch (error) {
      console.error('Error submitting prompt:', error);
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-colors duration-200 ease-in-out
                     min-h-[120px] resize-y"
            disabled={isProcessing || isEnhancing}
          />
          
          {(isProcessing || isEnhancing) && (
            <div className="absolute right-3 bottom-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!prompt.trim() || isProcessing || isEnhancing}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200
                      ${!prompt.trim() || isProcessing || isEnhancing
                        ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                      }`}
          >
            {isEnhancing ? 'Enhancing...' : isProcessing ? 'Processing...' : 'Send'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptInput;