import React from 'react';
import { AIResponse } from '../types';

interface ResponseDisplayProps {
  response: AIResponse | null;
  enhancedPrompt: string | null;
  isLoading: boolean;
  selectedModelType: 'text' | 'image';
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  response,
  enhancedPrompt,
  isLoading,
  selectedModelType,
}) => {
  // If there's no response and we're not loading, show empty state
  if (!response && !isLoading) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Your AI response will appear here. Enter a prompt and click Send to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
      {/* Enhanced prompt section */}
      {enhancedPrompt && (
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Enhanced Prompt
            </span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
            {enhancedPrompt}
          </p>
        </div>
      )}

      {/* Response content */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Processing your request...</p>
          </div>
        ) : (
          <div className="min-h-[200px]">
            {selectedModelType === 'text' ? (
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                  {response?.content}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img 
                  src={response?.content} 
                  alt="AI generated image" 
                  className="max-w-full rounded-lg shadow-md"
                />
              </div>
            )}
            
            {response && (
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                <span>Model: {response.model}</span>
                <span>
                  {new Date(response.timestamp).toLocaleTimeString()}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;