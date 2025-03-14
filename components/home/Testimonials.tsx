"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Since implementing Realtix, my client response rates have tripled. The automated follow-ups ensure no lead falls through the cracks, and the personalized AI voice calls feel so natural that clients think I'm personally reaching out.",
    author: {
      name: "Sarah Johnson",
      role: "Real Estate Broker, Johnson Properties",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    content:
      "What impressed me most about Realtix is how it saves me 15+ hours each week on follow-ups while actually improving my client relationships. The automated nurturing sequences are perfectly timed and always relevant.",
    author: {
      name: "Michael Patel",
      role: "Senior Agent, Luxury Homes Realty",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    content:
      "I was struggling to keep up with all my leads until I found Realtix. Now my business practically runs itself while I focus on closing deals. The ROI has been incredible - I've seen a 40% increase in my commissions this year alone.",
    author: {
      name: "Jennifer Lopez",
      role: "Independent Real Estate Agent",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Hear from our satisfied clients
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Real estate professionals across the country are transforming their
            businesses with Realtix.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-secondary-200 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <p className="text-lg leading-7 text-secondary-700">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-secondary-900">
                    {testimonial.author.name}
                  </h3>
                  <p className="text-sm text-secondary-500">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
