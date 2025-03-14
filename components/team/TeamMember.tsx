"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    socials: {
      github: string;
      twitter: string;
      linkedin: string;
    };
  };
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-50 to-primary-50 p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-xl">
          <Image
            src={member.image}
            alt={member.name}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
        </div>

        <h3 className="text-2xl font-bold text-secondary-900 mb-1">
          {member.name}
        </h3>
        <p className="text-primary-600 font-medium mb-3">{member.role}</p>
        <p className="text-secondary-600 mb-5 line-clamp-3">{member.bio}</p>

        <div className="flex gap-4 items-center">
          {member.socials.github && (
            <a
              href={member.socials.github}
              className="text-secondary-500 hover:text-primary-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              className="text-secondary-500 hover:text-primary-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              className="text-secondary-500 hover:text-primary-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
