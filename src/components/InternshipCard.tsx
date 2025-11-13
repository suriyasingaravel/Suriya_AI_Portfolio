'use client';
import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:suriyasingaravel710@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-8 w-full max-w-4xl rounded-3xl bg-white px-6 py-8 font-sans text-black sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-100 shadow-md">
            <img
              src="/avatar-suriya.png"
              alt="Suriya's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-black">
              Suriya Singaravel
            </h2>
            <p className="text-sm text-gray-600">
              Fullstack Developer & AI Engineer
            </p>
          </div>
        </div>
        {/* Available badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available
          </span>
        </div>
      </div>

      {/* Job Search Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm font-medium text-black">Availability</p>
            <p className="text-sm text-gray-600">30 days notice period</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-sm font-medium text-black">Location</p>
            <p className="text-sm text-gray-600">
              Bengaluru, India 🇮🇳 (Remote/Hybrid/Onsite)
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-sm font-medium text-black">Tech Stack</p>
            <div className="grid grid-cols-1 gap-y-1 text-sm text-gray-600 sm:grid-cols-2">
              <ul className="list-disc pl-4">
                <li>React.js, Next.js, TypeScript, JavaScript</li>
                <li>Node.js, Express.js, MongoDB, SQLite</li>
                <li>Tailwind CSS, Bootstrap, Material UI</li>
                <li>Git, CI/CD, AWS/GCP, Agile</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Python, LangChain, LangGraph</li>
                <li>CrewAI, RAG, Agentic AI</li>
                <li>API Integration, JWT, OAuth</li>
                <li>Performance Optimization</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="mb-2 text-lg font-semibold text-black">What I Bring</p>
        <p className="text-sm text-black">
          3+ years of fullstack development experience with real-world AI
          integration projects. <br />
          Currently building AI-powered applications at HOGR, experienced with
          LangChain ecosystem and CrewAI. <br />
          Proven track record of delivering scalable web applications and
          learning new technologies quickly.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="mb-2 text-lg font-semibold text-black">Goal</p>
        <p className="text-sm text-black">
          Looking for Fullstack Developer or AI Engineer roles where I can build
          intelligent applications that solve real problems. Ready to contribute
          to innovative teams working on AI-powered products and eager to grow
          in the AI/ML space. 🚀
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Let's Connect
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
