import PricingFaqs from "../../components/pricing/PricingFaqs";
import PricingTable from "../../components/pricing/PricingTable";

// Server Component
export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
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
        </div>

        {/* Pricing table component includes client-side toggle functionality */}
        <PricingTable />

        {/* FAQs */}
        <PricingFaqs />
      </div>
    </div>
  );
}
