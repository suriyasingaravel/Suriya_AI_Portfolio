import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    'This tool will show a list of all projects made by Suriya Singaravel',
  parameters: z.object({}),
  execute: async () => {
    return `Here are my key projects:

🍔 **HOGR**
- Official online presence of HOGR Food Network Limited
- Showcases brand, services, and digital ordering capabilities
- Built with modern web technologies for optimal performance

🤖 **ChocoChip.ai**
- AI-powered virtual assistant platform for restaurant industry
- Dual-interface system: Laravel-based admin dashboard for restaurant owners
- React.js + Tailwind CSS chatbot interface for customer interactions
- Enhances customer experience through intelligent automation

📱 **HOGR Ordering Web App**
- Mobile-first web application for HOGR Foods
- Designed to simplify and enhance restaurant ordering experience
- Focus on user-friendly interface and seamless functionality

🛠️ **Tech Stack Used:**
- Frontend: React.js, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, Laravel (PHP)
- Database: MongoDB, SQLite
- AI Integration: Working with LangChain, LangGraph, CrewAI

💡 **Current Learning Projects:**
- Building AI agents using CrewAI framework
- LLM integration with web applications using LangChain
- RAG (Retrieval-Augmented Generation) implementations

Feel free to ask me more details about any specific project! You can also check out my GitHub at github.com/suriyasingaravel or my portfolio at suriyasingaravel.github.io 🚀`;
  },
});
