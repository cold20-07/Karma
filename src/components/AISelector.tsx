import React from 'react';
import { AIModel } from '../types';
import { availableModels } from '../services/api';

interface AISelectorProps {
  selectedModel: AIModel;
  onSelectModel: (model: AIModel) => void;
}

const AISelector: React.FC<AISelectorProps> = ({ selectedModel, onSelectModel }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Select AI Model
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {availableModels.map((model) => (
          <div
            key={model.id}
            onClick={() => onSelectModel(model)}
            className={`
              p-4 rounded-lg cursor-pointer transition-all duration-200
              ${selectedModel.id === model.id 
                ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 dark:border-blue-400' 
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-transparent'
              }
            `}
          >
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${model.type === 'text' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{model.name}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {model.description}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Type: {model.type === 'text' ? 'Text Generation' : 'Image Generation'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISelector;