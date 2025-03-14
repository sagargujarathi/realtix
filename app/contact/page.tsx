"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your backend or API
    // Simulating a successful form submission
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 5000);
  };

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
            <motion.h1
              className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in touch
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-secondary-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions about Realtix? We're here to help you automate your
              real estate business.
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Contact info */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-secondary-900/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact form */}
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-secondary-900"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-secondary-900"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-secondary-900"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-secondary-900"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary-900"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Send message
                  </button>
                </div>

                {formStatus === "success" && (
                  <div className="mt-4 rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Message sent! We'll be in touch shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="mt-4 rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
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
