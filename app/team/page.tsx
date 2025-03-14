"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const teamMembers = [
  {
    name: "Sagar Gujarathi",
    role: "Founder & Full Stack Developer",
    image: "/images/team/sagar.webp", // Use external URL until local images are set up
    bio: "Full-stack developer with expertise in web applications and AI solutions. Passionate about creating technology that solves real business problems.",
    socials: {
      github: "https://github.com/sagargujarathi",
      twitter: "https://x.com/SagarGujarathi9",
      linkedin: "https://www.linkedin.com/in/gujarathisagar/",
    },
  },
  {
    name: "Sampath Gujarathi",
    role: "Co-Founder & Lead Developer",
    image: "/images/team/sampath.webp", // Use external URL until local images are set up
    bio: "Expert in cloud infrastructure and DevOps practices. Leads the technical vision and architecture for all company projects.",
    socials: {
      github: "https://github.com/gujarathisampath",
      twitter: "https://x.com/GSampath__",
      linkedin: "https://www.linkedin.com/in/sampathgujarathi/",
    },
  },
  {
    name: "Abhi Jai Kategari",
    role: "Chief Marketing Officer",
    image: "/images/team/abhi-jai.webp",
    bio: "Marketing specialist with a knack for building brand presence and driving customer acquisition strategies.",
    socials: {
      github: "",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/abhijai-kategari-7968b5263/",
    },
  },
  {
    name: "PSLV Datta Manas",
    role: "Lead Engineer",
    image: "/images/team/datta-manas.webp",
    bio: "Specialized in backend development and database architecture. Creates robust systems that scale effectively.",
    socials: {
      github: "https://github.com/dattamanas09",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/p-v-l-s-datta-manas-ab7ab3273/",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl font-serif">
              Meet Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              A passionate group of tech experts dedicated to transforming the
              real estate industry through innovation
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Team members grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
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
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 mb-5 line-clamp-3">
                    {member.bio}
                  </p>

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
            ))}
          </div>
        </div>
      </section>

      {/* Join our team section */}
      <section className="py-16 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 font-serif sm:text-4xl">
              Join Our Team
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              We're always looking for talented people to join us. Check out our
              open positions and apply today.
            </p>
            <div className="mt-10">
              <a
                href="/careers"
                className="rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                View open positions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
