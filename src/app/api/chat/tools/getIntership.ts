import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of job opportunities I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 💼 **Role**: Fullstack Developer or AI Engineer positions
- ⏰ **Availability**: Immediate - Ready to start ASAP
- 🌍 **Location**: Bengaluru, India 🇮🇳 (Open to Remote/Hybrid/Onsite)
- 🎯 **Focus**: AI-powered web applications, LLM integration, intelligent systems
- 🛠️ **Stack**: React.js, Next.js, Node.js, Python, TypeScript, LangChain, LangGraph, CrewAI
- 💡 **Specialization**: MERN stack development + AI integration (RAG, Agentic AI)
- ✅ **What I bring**: 3+ years fullstack experience, currently building AI applications at HOGR, hands-on with LangChain ecosystem and CrewAI framework
- 🚀 Fast learner, problem solver, and passionate about building intelligent applications that solve real problems

**Current Experience:**
- Software Engineer at HOGR Food Network Pvt Ltd
- Building scalable React.js/Next.js applications
- API integration and performance optimization
- Learning AI agent development and LLM integration

📬 **Contact me** via:
- Email: [suriyasingaravel710@gmail.com](mailto:suriyasingaravel710@gmail.com)
- LinkedIn: [linkedin.com/in/suriya-singaravel](https://www.linkedin.com/in/suriya-singaravel/)
- GitHub: [github.com/suriyasingaravel](https://github.com/suriyasingaravel)
- Portfolio: [suriyasingaravel.github.io](https://suriyasingaravel.github.io/)

Let's build something amazing together! 🚀
    `;
  },
});
