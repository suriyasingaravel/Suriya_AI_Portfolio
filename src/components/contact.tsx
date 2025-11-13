'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Contact() {
  // Contact information
  const contactInfo = {
    name: 'Suriya Singaravel',
    email: 'suriyasingaravel710@gmail.com',
    handle: '@Suriya.Singaravel',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/suriya-singaravel/',
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/@SURIYASINGARAVEL-lm6en',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/suriya_singaravel/',
      },
      // {
      //   name: 'Discord',
      //   url: 'https://discord.com/users/toukoum',
      // },
      {
        name: 'Github',
        url: 'https://github.com/suriyasingaravel',
      },
      // {
      //   name: 'X',
      //   url: 'https://x.com/toukoumcode',
      // },
    ],
  };

  // Function to handle opening links
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="w-full overflow-hidden rounded-3xl border border-[#23272f] bg-gradient-to-br from-[#23272f] via-[#18181b] to-[#23272f] px-6 py-8 font-sans shadow-xl sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold text-neutral-100 md:text-4xl">
            Contacts
          </h2>
          <span className="mt-2 text-neutral-400 sm:mt-0">
            {contactInfo.handle}
          </span>
        </div>

        {/* Email Section */}
        <div className="mt-8 flex flex-col md:mt-10">
          <div
            className="group mb-5 cursor-pointer"
            onClick={() => openLink(`mailto:${contactInfo.email}`)}
          >
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-[#6366f1] hover:underline sm:text-lg">
                {contactInfo.email}
              </span>
              <ChevronRight className="h-5 w-5 text-[#6366f1] transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-4 sm:gap-x-6">
            {contactInfo.socials.map((social) => (
              <button
                key={social.name}
                className="flex items-center gap-2 rounded-lg border border-[#23272f] bg-[#18181b] px-4 py-2 text-sm text-neutral-300 shadow-sm transition-all hover:bg-[#23272f] hover:text-[#f472b6] focus:ring-2 focus:ring-[#6366f1] focus:outline-none"
                onClick={() => openLink(social.url)}
                title={social.name}
              >
                {/* Social icon could be added here for more style */}
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
