"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Updated with AspireDev team information
const team = [
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

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Our Story
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              About Realtix
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              A product by{" "}
              <a
                href="https://aspiredev.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                AspireDev
              </a>
              . We're on a mission to revolutionize how real estate
              professionals nurture client relationships through automation and
              personalization.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Vision and mission */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900">
                Our Vision
              </h2>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                At AspireDev, we envision a future where technology empowers
                businesses to operate more efficiently. Through Realtix, we're
                enabling real estate professionals to provide personalized
                attention to clients at scale.
              </p>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                Our platform is designed to handle the routine follow-ups and
                nurturing communications, freeing up real estate professionals
                to focus on what they do best: building relationships and
                closing deals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                Our mission at AspireDev is to create innovative software
                solutions that solve real-world business challenges. With
                Realtix, we're empowering real estate professionals with
                intelligent automation tools.
              </p>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                We're committed to continuous innovation, leveraging the latest
                advances in AI and automation technology to deliver solutions
                that address the unique challenges faced by real estate
                professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company history */}
      <div className="bg-secondary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900">
                Our History
              </h2>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                AspireDev was founded with the vision of creating technology
                solutions that make a real difference for businesses. Realtix
                emerged from our work with real estate clients who were spending
                too much time on repetitive tasks.
              </p>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                What started as a simple automation tool has evolved into a
                comprehensive platform that now serves thousands of real estate
                professionals. Our growth has been driven by our unwavering
                commitment to our customers' success.
              </p>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                Today, we continue to innovate and expand our offerings, always
                keeping our focus on solving real problems for our users with
                intuitive, powerful solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Meet the passionate people behind AspireDev and Realtix who are
              dedicated to transforming the real estate industry through
              innovation and technology.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {team.map((person, index) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-secondary-100">
                  <Image
                    className="w-full h-full object-cover"
                    src={person.image}
                    alt={person.name}
                    fill
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-secondary-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-primary-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-secondary-600">
                  {person.bio}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-primary-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              These core principles guide everything we do at Realtix.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-x-12">
            {[
              {
                name: "Customer Success",
                description:
                  "We're committed to our customers' success. We measure our success by how much we help our customers grow their businesses.",
              },
              {
                name: "Innovation",
                description:
                  "We continuously push the boundaries of what's possible in real estate automation to deliver cutting-edge solutions.",
              },
              {
                name: "Integrity",
                description:
                  "We operate with honesty and transparency in all our interactions with customers, partners, and team members.",
              },
              {
                name: "Collaboration",
                description:
                  "We believe in the power of diverse perspectives and work together across teams to create the best solutions.",
              },
              {
                name: "Excellence",
                description:
                  "We strive for excellence in everything we do, from product design to customer support.",
              },
              {
                name: "Empathy",
                description:
                  "We deeply understand the challenges our customers face and design solutions with their needs in mind.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt className="text-xl font-semibold leading-7 text-white">
                  {value.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-primary-100">
                  {value.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
