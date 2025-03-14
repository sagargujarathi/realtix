"use client";

import { motion } from "framer-motion";

const faqs = [
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
];

export default function PricingFaqs() {
  return (
    <div className="mx-auto max-w-4xl mt-32">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary-900 text-center">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-8">
        {faqs.map((faq, index) => (
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
  );
}
