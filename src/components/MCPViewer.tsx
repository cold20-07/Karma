import React from 'react';
import { useMCP } from '../context/MCPContext';

const MCPViewer: React.FC = () => {
  const { context } = useMCP();
  
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
        <span>Model Context Protocol</span>
        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          Debug View
        </span>
      </h2>
      
      <div className="overflow-x-auto">
        <pre className="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded-lg overflow-x-scroll text-gray-800 dark:text-gray-200">
          {JSON.stringify(context, null, 2)}
        </pre>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>
          The Model Context Protocol (MCP) maintains context between different AI models and agent tasks.
          This ensures consistent, coherent responses across multiple interactions.
        </p>
      </div>
    </div>
  );
};

export default MCPViewer;