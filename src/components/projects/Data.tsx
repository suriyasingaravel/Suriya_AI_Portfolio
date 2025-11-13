import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with your actual projects
const PROJECT_CONTENT = [
  {
    title: 'ChocoChip.ai',
    description:
      'AI-powered virtual assistant platform for the restaurant industry featuring a dual-interface system. Built with Laravel-based admin dashboard for restaurant owners and React.js + Tailwind CSS chatbot interface for customer interactions. This project enhances customer experience through intelligent automation and demonstrates real-world AI integration in business applications.',
    techStack: [
      'Laravel',
      'React.js',
      'Tailwind CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'OpenAI API',
      'REST APIs',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://chocochip.ai',
      },
      {
        name: 'GitLab',
        url: 'https://github.com/suriyasingaravel/chocochip-ai',
      },
    ],
    images: [
      {
        src: '/chocochip1.png',
        alt: 'ChocoChip.ai landing page',
      },
      {
        src: '/chocochip2.png',
        alt: 'ChocoChip.ai admin dashboard',
      },
      {
        src: '/chocochip3.png',
        alt: 'ChocoChip.ai chatbot interface',
      },
    ],
  },
  {
    title: 'HOGR',
    description:
      'Official online presence of HOGR Food Network Limited, showcasing brand identity, services, and digital ordering capabilities. Built with modern web technologies focusing on responsive design, performance optimization, and seamless user experience. Features comprehensive service showcase and integrated ordering system.',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Laravel',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://hogr.in',
      },
      {
        name: 'GitLab',
        url: 'https://git.masalabox.com:9999/hogr/smartwaiter',
      },
    ],
    images: [
      {
        src: '/hogr1.png',
        alt: 'HOGR landing page',
      },
      {
        src: '/hogr2.png',
        alt: 'HOGR services section',
      },
      {
        src: '/hogr3.png',
        alt: 'HOGR restaurant page',
      },
    ],
  },
  {
    title: 'HOGR Ordering Web App',
    description:
      'Mobile-first web application designed to simplify and enhance the restaurant ordering experience for HOGR Foods. Features intuitive user interface, real-time order tracking, secure payment integration, and optimized performance for both mobile and desktop platforms. Built with focus on user experience and conversion optimization.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://stage.qr.hogr.app/dinein/ChIJd16ktFwMCDsRAHB_n-rUnfo/51747/41c248b1',
      },
      {
        name: 'GitLab',
        url: 'https://git.masalabox.com:9999/hogr/hogr-website-react',
      },
    ],
    images: [
      {
        src: '/hograpp1.png',
        alt: 'HOGR Ordering App home screen',
      },
      {
        src: '/hograpp2.png',
        alt: 'HOGR Ordering App menu interface',
      },
      {
        src: '/hograpp3.png',
        alt: 'HOGR Ordering App checkout process',
      },
    ],
  },
  {
    title: 'Skillsync',
    description:
      'SkillSync is an AI-powered career advisor platform designed to help users analyze their resumes and job descriptions to provide personalized career guidance. It compares skills and experience, identifies gaps, offers tailored learning paths.',
    techStack: ['React.js', 'FastAPI', 'Python', 'Tailwind CSS'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://skill-sync-pdqt5j3r9-suriyas-projects-b4e0ecb8.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/suriyasingaravel/SkillSync',
      },
    ],
    images: [
      {
        src: '/skillsync2.png',
        alt: 'Skillsync dashboard',
      },
      {
        src: '/skillsync1.png',
        alt: 'Skillsync matchmaking interface',
      },
    ],
  },
  {
    title: 'AI Trip Planner',
    description:
      'AI Trip Planner is a personalized travel itinerary generator that leverages artificial intelligence to recommend destinations, create detailed schedules, and suggest activities based on user preferences, budget, and travel dates. The application streamlines trip planning by providing smart, real-time suggestions and comprehensive travel recommendations.',
    techStack: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Gemini API',
      'LangChain',
      'FastAPI',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://aitripplanner-jw84jux3i-suriyas-projects-b4e0ecb8.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/suriyasingaravel/AI_Trip_Planner',
      },
    ],
    images: [
      {
        src: '/aitripplanner1.png',
        alt: 'AI Trip Planner home page',
      },
      {
        src: '/aitripplanner2.png',
        alt: 'AI Trip Planner itinerary ',
      },
      {
        src: '/aitripplanner3.png',
        alt: 'AI Trip Planner Cost Split',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="font-sans text-base leading-relaxed text-black md:text-lg dark:text-white">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="w-4 text-neutral-500 dark:text-neutral-400" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light text-black capitalize dark:text-white">
                  {link.name}
                </span>
                <ChevronRight className="h-4 w-4 text-black transition-transform group-hover:translate-x-1 dark:text-white" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with your updated projects
export const data = [
  {
    category: 'Production Level Project',
    title: 'ChocoChip.ai',
    src: '/chocochip-preview.png',
    content: <ProjectContent project={{ title: 'ChocoChip.ai' }} />,
  },
  {
    category: 'Company Project',
    title: 'HOGR',
    src: '/hogr.png',
    content: <ProjectContent project={{ title: 'HOGR' }} />,
  },
  {
    category: 'Mobile Application',
    title: 'HOGR Ordering Web App',
    src: '/hograpp.png',
    content: <ProjectContent project={{ title: 'HOGR Ordering Web App' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Skillsync',
    src: '/skillsync.png',
    content: <ProjectContent project={{ title: 'Skillsync' }} />,
  },
  {
    category: 'Personal Project',
    title: 'AI Trip Planner',
    src: '/aitripplanner.png',
    content: <ProjectContent project={{ title: 'AI Trip Planner' }} />,
  },
];
