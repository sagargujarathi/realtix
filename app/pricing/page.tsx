"use client";

import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "/register?plan=starter",
    price: { monthly: "$49", annually: "$470" },
    description:
      "Perfect for individual agents getting started with automation.",
    features: [
      "500 contacts",
      "Email campaigns",
      "Basic SMS messaging",
      "Standard templates",
      "Email & chat support",
      "Basic analytics",
    ],
    notIncluded: [
      "AI voice calls",
      "Advanced segmentation",
      "Custom integrations",
      "Lead scoring",
    ],
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "/register?plan=professional",
    price: { monthly: "$99", annually: "$950" },
    description: "Ideal for growing teams and experienced real estate agents.",
    mostPopular: true,
    features: [
      "2,000 contacts",
      "Advanced email campaigns",
      "Unlimited SMS messaging",
      "AI voice calls (100/mo)",
      "Custom templates",
      "Advanced analytics",
      "Priority support",
      "Basic integrations",
    ],
    notIncluded: ["Advanced segmentation", "Lead scoring", "White labeling"],
  },
  {
    name: "Agency",
    id: "tier-agency",
    href: "/register?plan=agency",
    price: { monthly: "$249", annually: "$2,390" },
    description: "Comprehensive solution for real estate brokerages and teams.",
    features: [
      "Unlimited contacts",
      "Advanced email campaigns",
      "Unlimited SMS messaging",
      "Unlimited AI voice calls",
      "Advanced segmentation",
      "Custom integrations",
      "Lead scoring",
      "White labeling",
      "Dedicated account manager",
      "API access",
    ],
    notIncluded: [],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-base font-semibold leading-7 text-primary-600">
              Pricing
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Pricing plans for teams of all sizes
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Choose the perfect plan to help you automate your real estate
              business and nurture your clients effectively.
            </p>
          </motion.div>

          {/* Toggle annual/monthly pricing */}
          <div className="mt-12 flex justify-center">
            <div className="relative flex rounded-full bg-secondary-100 p-1">
              <button
                type="button"
                className={`${
                  !annual ? "bg-white shadow-md" : "bg-transparent"
                } relative w-32 rounded-full py-2 text-sm font-semibold transition-all duration-300`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${
                  annual ? "bg-white shadow-md" : "bg-transparent"
                } relative w-32 rounded-full py-2 text-sm font-semibold transition-all duration-300`}
                onClick={() => setAnnual(true)}
              >
                Annual{" "}
                <span className="text-xs text-primary-600">(Save 20%)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              className={`flex flex-col ${
                tier.mostPopular
                  ? "relative ring-2 ring-primary-600 lg:z-10 lg:shadow-xl"
                  : "ring-1 ring-secondary-200 lg:mt-8 lg:mb-8"
              } rounded-3xl p-8 xl:p-10`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-secondary-900"
                >
                  {tier.name}
                </h2>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-secondary-900">
                  {annual ? tier.price.annually : tier.price.monthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-secondary-500">
                  {annual ? "/year" : "/month"}
                </span>
              </p>
              <p className="mt-4 text-sm leading-6 text-secondary-500">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-secondary-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <FiCheck
                      className="h-6 w-5 flex-none text-primary-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-secondary-400">
                    <FiX
                      className="h-6 w-5 flex-none text-secondary-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600"
                    : "bg-secondary-50 text-secondary-900 hover:bg-secondary-100"
                }`}
              >
                Get started today
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mx-auto max-w-4xl mt-32">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary-900 text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8">
            {[
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
              },
              {
                question: "Is there a contract or commitment?",
                answer:
                  "No long-term contracts. You can cancel your subscription anytime from your account settings.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes, we offer a 14-day free trial on all our plans. No credit card required to get started.",
              },
              {
                question: "What happens when I reach my contact limit?",
                answer:
                  "You'll receive a notification when you're approaching your limit. You can upgrade your plan at any time to increase your limit.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <dt className="text-lg font-semibold leading-7 text-secondary-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-secondary-600">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
