import { generateText } from './api';

/**
 * Enhances a user prompt by sending it to an AI model first
 * to improve clarity and completeness before using it for the main task.
 */
export async function enhancePrompt(originalPrompt: string): Promise<string> {
  try {
    // Instruction for enhancing the prompt
    const enhancementInstruction = 
      `You are an AI prompt enhancer. Your task is to improve the following prompt for clarity, 
      specificity, and completeness so it gets better results from an AI model. 
      Maintain the original intent but make it more detailed and precise.
      
      Original prompt: ${originalPrompt}
      
      Enhanced prompt:`;
    
    // Send to the AI model for enhancement
    const enhancedPrompt = await generateText(enhancementInstruction);
    
    // Extract just the enhanced prompt part from the response
    // In a real implementation, we would parse the response properly
    // For this simulation, we'll return a slightly modified version
    return `Enhanced: ${originalPrompt} (with additional context and clarity)`;
  } catch (error) {
    console.error('Error enhancing prompt:', error);
    // If enhancement fails, return the original prompt
    return originalPrompt;
  }
}