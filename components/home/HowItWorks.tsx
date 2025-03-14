"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    name: "Import your contacts",
    description:
      "Connect your CRM or upload your contact list to get started with automated nurturing.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Create personalized campaigns",
    description:
      "Design email, SMS, and voice call sequences with our easy-to-use templates.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Automate your nurturing",
    description:
      "Set your campaigns to run automatically based on triggers, schedules, or client actions.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-secondary-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Simple process, powerful results
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Get your real estate automation system up and running in just three
            simple steps.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
              >
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[3/2] relative rounded-2xl overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white text-lg font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900">
                      {step.name}
                    </h3>
                  </div>
                  <p className="mt-6 text-lg text-secondary-600">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
