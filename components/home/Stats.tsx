"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Increase in response rates", value: "250%" },
  { id: 2, name: "Time saved on follow-ups", value: "15+ hrs/week" },
  { id: 3, name: "More deals closed", value: "32%" },
  { id: 4, name: "Happy real estate agents", value: "10,000+" },
];

export default function Stats() {
  return (
    <div className="bg-primary-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-200">
            Proven Results
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real estate agents achieve more with Realtix
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt className="text-sm font-semibold leading-6 text-primary-200 text-center">
                  {stat.name}
                </dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
