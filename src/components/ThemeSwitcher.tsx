import React from 'react';
import { UserPreferences } from '../types';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitcherProps {
  preferences: UserPreferences;
  updatePreferences: (newPreferences: Partial<UserPreferences>) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  preferences, 
  updatePreferences 
}) => {
  const toggleTheme = () => {
    const newTheme = preferences.theme === 'light' ? 'dark' : 'light';
    updatePreferences({ theme: newTheme });
    
    // Apply theme to document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Apply initial theme
  React.useEffect(() => {
    if (preferences.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [preferences.theme]);

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                text-gray-700 dark:text-gray-300
                hover:bg-gray-300 dark:hover:bg-gray-600
                transition-colors duration-200"
      aria-label={`Switch to ${preferences.theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {preferences.theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;