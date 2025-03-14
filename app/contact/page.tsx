import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import ContactForm from "../../components/contact/ContactForm";

// Server Component
export default function ContactPage() {
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "hello@realtix.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+1 (555) 123-4567",
    },
    {
      icon: FiMapPin,
      title: "Office",
      description: "Come say hello at our office HQ.",
      contact: "100 Main Street, San Francisco, CA 94103",
    },
    {
      icon: FiClock,
      title: "Working hours",
      description: "We work for your convenience.",
      contact: "Monday - Friday, 8am to 5pm PST",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate bg-gradient-to-b from-primary-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Have questions about Realtix? We're here to help you automate your
              real estate business.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Contact info */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-secondary-900/5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <item.icon
                  className="h-6 w-6 text-primary-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-secondary-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-secondary-500">
                {item.description}
              </p>
              <p className="mt-1 text-base font-medium text-secondary-900">
                {item.contact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form - now a client component */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-secondary-200">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-16 md:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900">
                Send us a message
              </h2>
              <p className="mt-4 leading-7 text-secondary-600">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25292.42390428431!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a379575d%3A0x6cf7a313d6a53ec7!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1651278101037!5m2!1sen!2sus"
          className="absolute left-0 top-0 h-full w-full border-0"
          loading="lazy"
          title="Realtix office location"
        ></iframe>
      </div>
    </div>
  );
}
