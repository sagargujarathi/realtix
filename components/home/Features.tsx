"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiMessageCircle,
  FiPhoneCall,
  FiBarChart2,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    name: "Automated Email Campaigns",
    description:
      "Create personalized email sequences that nurture leads throughout their buying journey.",
    icon: FiMail,
  },
  {
    name: "SMS Messaging",
    description:
      "Send timely, personalized text messages to increase engagement and response rates.",
    icon: FiMessageCircle,
  },
  {
    name: "AI Voice Calls",
    description:
      "Reach clients with natural-sounding AI voice calls that feel personal and professional.",
    icon: FiPhoneCall,
  },
  {
    name: "Performance Analytics",
    description:
      "Track campaign performance with detailed analytics to optimize your marketing strategy.",
    icon: FiBarChart2,
  },
  {
    name: "Custom Integrations",
    description:
      "Seamlessly integrate with your existing CRM and real estate tools for a unified workflow.",
    icon: FiSettings,
  },
  {
    name: "Client Segmentation",
    description:
      "Target specific client groups with tailored messaging based on their preferences.",
    icon: FiUsers,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Everything you need to automate your real estate business
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Our comprehensive suite of tools helps you nurture leads, stay in
            touch with clients, and close more deals without the manual work.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
