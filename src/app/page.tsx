'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  // Fun: 'What’s the craziest thing you’ve ever done? What are your hobbies?',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  // { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Précharger les assets du chat en arrière-plan
    const img = new window.Image();
    img.src = '/landing-memojis.png';

    // Précharger les vidéos aussi
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload'; // Note: prefetch au lieu de preload
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1e293b] px-4 pb-10 md:pb-20">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-72 w-72 animate-pulse rounded-full bg-gradient-to-tr from-[#6366f1] to-[#f472b6] opacity-20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-[#f472b6] to-[#6366f1] opacity-10 blur-3xl" />
      </div>

      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="animate-fadein hidden bg-gradient-to-b from-[#6366f1]/40 to-[#18181b]/0 bg-clip-text text-[10rem] leading-none font-black text-transparent drop-shadow-2xl select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Suriya
        </div>
      </div>

      {/* GitHub button */}
      <div className="absolute top-6 right-8 z-20">
        <GithubButton
          animationDuration={1.5}
          label="Star"
          size={'sm'}
          repoUrl="https://github.com/suriyasingaravel"
        />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => goToChat('Are you looking for a candidate?')}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border border-[#6366f1] bg-gradient-to-r from-[#23272f]/80 to-[#18181b]/80 px-4 py-1.5 text-sm font-medium text-white shadow-lg backdrop-blur-lg transition hover:bg-[#6366f1]/40 dark:border-[#6366f1] dark:text-white dark:hover:bg-[#23272f]"
        >
          {/* Green pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Looking for a talent?
        </button>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className="animate-fadein mt-1 text-xl font-semibold text-neutral-200 md:text-2xl">
          Hey, I'm Suriya 👋
        </h2>
        <h1 className="animate-glow bg-gradient-to-r from-[#6366f1] via-[#f472b6] to-[#6366f1] bg-clip-text text-4xl font-bold text-transparent drop-shadow-[0_2px_20px_rgba(99,102,241,0.5)] sm:text-5xl md:text-6xl lg:text-7xl">
          AI Portfolio
        </h1>
      </motion.div>

      {/* centre memoji */}
      <div className="animate-float relative z-10 h-52 w-48 overflow-hidden sm:h-72 sm:w-72">
        <Image
          src="/landing-memojis.png"
          alt="Hero memoji"
          width={2000}
          height={2000}
          priority
          className="translate-y-14 scale-[2] object-cover drop-shadow-2xl"
        />
      </div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-[#23272f] bg-[#23272f]/80 py-2.5 pr-2 pl-6 shadow-lg backdrop-blur-xl transition-all hover:border-[#6366f1] dark:border-[#6366f1] dark:bg-[#18181b]/80 dark:hover:border-[#f472b6]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="w-full border-none bg-transparent text-base text-neutral-200 placeholder:text-neutral-400 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#6366f1] to-[#f472b6] p-2.5 text-white shadow-md transition-colors hover:scale-105 hover:from-[#23272f] hover:to-[#6366f1] disabled:opacity-70"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick-question grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="border-border aspect-square w-full cursor-pointer rounded-2xl border bg-[#23272f]/80 py-8 shadow-lg backdrop-blur-xl transition-all hover:bg-gradient-to-r hover:from-[#6366f1]/30 hover:to-[#f472b6]/30 active:scale-95 md:p-10"
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 text-neutral-200">
                <Icon size={26} strokeWidth={2.5} color={color} />
                <span className="text-xs font-semibold drop-shadow sm:text-sm">
                  {key}
                </span>
              </div>
            </Button>
          ))}
        </motion.div>
      </motion.div>
      <FluidCursor />

      {/* Custom styles for animation */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow:
              0 0 24px #6366f1,
              0 0 8px #f472b6;
          }
          50% {
            text-shadow:
              0 0 40px #f472b6,
              0 0 16px #a7f3d0;
          }
        }
        .animate-glow {
          animation: glow 2.5s infinite alternate;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadein {
          animation: fadein 1.2s ease-in;
        }
      `}</style>
    </div>
  );
}
