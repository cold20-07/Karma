import { useState, useEffect } from 'react';
import { UserPreferences } from '../types';

const DEFAULT_PREFERENCES: UserPreferences = {
  preferredModel: 'gemini-2.0-flash',
  theme: 'dark',
};

export function usePreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);

  // Load preferences from localStorage on initial render
  useEffect(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      try {
        setPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.error('Failed to parse saved preferences:', error);
      }
    }
  }, []);

  // Save preferences to localStorage whenever they change
  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
  };

  return {
    preferences,
    updatePreferences,
  };
}