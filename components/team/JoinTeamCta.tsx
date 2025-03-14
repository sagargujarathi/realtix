"use client";

import { motion } from "framer-motion";

export default function JoinTeamCta() {
  return (
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
  );
}
