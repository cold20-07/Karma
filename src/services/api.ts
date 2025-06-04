import { AIModel } from '../types';

const apiKey = "";

// Available AI models
export const availableModels: AIModel[] = [
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini Flash',
    type: 'text',
    description: 'Fast text generation model for quick responses',
  },
  {
    id: 'gemini-2.0-pro',
    name: 'Gemini Pro',
    type: 'text',
    description: 'Advanced text model for complex tasks',
  },
  {
    id: 'imagen-3.0-generate-002',
    name: 'Imagen',
    type: 'image',
    description: 'Image generation model for creating visuals',
  },
];

// Function to generate text using Gemini model
export async function generateText(prompt: string, model = 'gemini-2.0-flash') {
  try {
    // Simulate API call to Gemini
    console.log(`Sending prompt to ${model}:`, prompt);
    
    // In a real implementation, this would be an actual API call
    // For now, we'll simulate a response after a delay
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Response from ${model}: This is a simulated response to your prompt: "${prompt}"`);
      }, 1500);
    });
  } catch (error) {
    console.error('Error generating text:', error);
    throw new Error('Failed to generate text. Please try again.');
  }
}

// Function to generate images
export async function generateImage(prompt: string) {
  try {
    console.log('Generating image for prompt:', prompt);
    
    // Simulate image generation
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Return a placeholder image URL
        resolve('https://via.placeholder.com/512x512?text=AI+Generated+Image');
      }, 2000);
    });
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image. Please try again.');
  }
}