"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
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
  );
}
