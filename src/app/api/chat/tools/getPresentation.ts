import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Suriya Singaravel. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Suriya Singaravel, a Fullstack Developer with 3+ years of experience building scalable web applications. Currently working as Software Engineer at HOGR Food Network Pvt Ltd in Bengaluru. I specialize in the MERN stack and I'm passionate about AI integration - actively learning LangChain, LangGraph, and CrewAI to build intelligent applications. Made a successful career transition from textile engineering to software development and now looking for Fullstack Developer and AI Engineer opportunities.",
    };
  },
});
