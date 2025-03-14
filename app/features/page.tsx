import Image from "next/image";
import {
  FiMail,
  FiMessageCircle,
  FiPhoneCall,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiRefreshCw,
  FiDatabase,
  FiLock,
} from "react-icons/fi";

const features = [
  {
    name: "Automated Email Campaigns",
    description:
      "Create personalized email sequences that nurture leads throughout their buying journey with AI-powered content suggestions and timing optimization.",
    icon: FiMail,
  },
  {
    name: "SMS Messaging",
    description:
      "Send timely, personalized text messages to increase engagement and response rates. Schedule messages or trigger them based on client actions.",
    icon: FiMessageCircle,
  },
  {
    name: "AI Voice Calls",
    description:
      "Reach clients with natural-sounding AI voice calls that feel personal and professional. Perfect for follow-ups, appointment reminders, and check-ins.",
    icon: FiPhoneCall,
  },
  {
    name: "Performance Analytics",
    description:
      "Track campaign performance with detailed analytics to optimize your marketing strategy. Monitor open rates, response rates, and conversion metrics.",
    icon: FiBarChart2,
  },
  {
    name: "Advanced Segmentation",
    description:
      "Target specific client groups with tailored messaging based on their preferences, behavior, and position in the buying journey.",
    icon: FiUsers,
  },
  {
    name: "Custom Integrations",
    description:
      "Seamlessly integrate with your existing CRM and real estate tools for a unified workflow. Works with popular platforms like Zillow, Realtor.com, and MLS.",
    icon: FiSettings,
  },
  {
    name: "Smart Scheduling",
    description:
      "Automatically determine the optimal time to send communications based on when your contacts are most likely to engage.",
    icon: FiRefreshCw,
  },
  {
    name: "Lead Scoring & Prioritization",
    description:
      "Automatically score and prioritize leads based on engagement and behavior, so you know which prospects deserve immediate attention.",
    icon: FiDatabase,
  },
  {
    name: "Compliance & Security",
    description:
      "Stay compliant with real estate regulations and protect your client data with enterprise-grade security features.",
    icon: FiLock,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Features
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Powerful tools to automate your real estate business
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Realtix offers a comprehensive suite of features designed
              specifically for real estate professionals. From automated
              follow-ups to AI voice calls, we've got everything you need to
              nurture clients and close more deals.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Feature list */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-600">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                A complete automation solution
              </p>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                Our platform combines intelligent automation with personalized
                communication to help you build stronger client relationships
                while saving time.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-secondary-600 lg:max-w-none">
                {features.slice(0, 3).map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-secondary-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline"> {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Realtix platform screenshot"
              className="rounded-xl shadow-xl ring-1 ring-secondary-400/10"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Complete Solution
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            All the features you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Explore our full suite of powerful automation tools designed
            specifically for real estate professionals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
