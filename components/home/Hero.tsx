"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // Add your email collection logic here
    setEmail("");
  };

  return (
    <div className="relative bg-white pt-24 md:pt-32 lg:pt-40">
      {/* Background gradient decoration */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-50 to-transparent -z-10"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_30%_at_50%_20%,rgba(14,165,233,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>

      <div className="mx-auto max-w-7xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left column - Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 lg:py-16 xl:pr-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 mb-6 ring-1 ring-inset ring-primary-200 gap-x-1.5"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500"></span>
              Real Estate Automation Platform
            </motion.div>

            <motion.h1
              className="text-4xl font-extrabold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block">Supercharge Your</span>
              <span className="block text-primary-600">
                Real Estate Business
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base text-secondary-600 sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Automate your client nurturing with personalized emails, messages,
              and AI voice calls. Close more deals while spending less time on
              manual follow-ups.
            </motion.p>

            <motion.div
              className="mt-10 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="sm:flex w-full max-w-md">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-l-lg border border-secondary-300 px-5 py-3.5 text-secondary-900 placeholder-secondary-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-px">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-r-lg border border-transparent bg-primary-600 px-5 py-3.5 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md group"
                  >
                    Get started
                    <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>

              <motion.div
                className="mt-5 text-sm text-secondary-500 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="flex items-center">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-50 text-primary-600 mr-2">
                    <FiCheck className="h-3.5 w-3.5" />
                  </span>
                  14-day free trial
                </p>
                <p className="flex items-center">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-50 text-primary-600 mr-2">
                    <FiCheck className="h-3.5 w-3.5" />
                  </span>
                  No credit card required
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <div className="relative mt-12 lg:mt-0">
            <div className="hidden lg:block absolute -top-16 -right-16 h-96 w-96 rounded-full bg-primary-100/30 blur-3xl"></div>
            <div className="relative lg:absolute lg:inset-0 lg:left-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:h-full lg:w-auto shadow-xl ring-1 ring-secondary-200"
              >
                <Image
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
                  alt="Real estate professional using laptop"
                  width={1920}
                  height={1080}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 116V51.2791C1440 49.0023 1439.05 46.8465 1437.42 45.2902L1431.77 39.9386C1429.47 37.7511 1426.06 37.1341 1423.16 38.3935L1419.85 39.8402C1416.57 41.2637 1412.78 40.6341 1410.05 38.1753L1405.64 34.2449C1402.7 31.5915 1398.47 31.0926 1394.92 33.0294L1390.98 35.1233C1387.36 37.1 1383.01 36.7803 1379.72 34.2887L1372.19 28.8114C1369.24 26.5839 1365.35 26.1728 1361.97 27.7249L1335.27 39.9921C1332.71 41.1418 1329.83 41.3826 1327.12 40.6753L1323.7 39.7749C1317.64 38.0931 1311.19 41.2738 1308.58 47.0004L1303.53 57.9902C1301.96 61.0436 1298.83 63.0005 1295.36 63.0005H1290.18C1286.46 63.0005 1283.08 60.7648 1281.62 57.3095L1277.04 45.4464C1275.63 42.1339 1272.41 39.9726 1268.85 39.8046L1260.09 39.4122C1256.33 39.2371 1252.69 40.6345 1250.29 43.3834L1234.79 61.0193C1231.92 64.3179 1227.34 65.3865 1223.36 63.6872L1214.13 59.5755C1210.15 57.8762 1205.57 58.9448 1202.7 62.2434L1197.02 68.7074C1194.15 72.006 1189.56 73.0746 1185.58 71.3753L1174.34 66.4179C1169.43 64.295 1163.83 66.3024 1161.26 71.0071C1158.91 75.2694 1154.16 77.1161 1149.6 75.3552L1137.42 70.5855C1132.02 68.5062 1126.01 70.6373 1123.42 75.8401L1121.16 80.3743C1118.58 85.5771 1112.57 87.7082 1107.17 85.6289L1097.63 81.7767C1092.39 79.7575 1086.55 81.7523 1083.85 86.7055L1083.11 88.1818C1080.41 93.1346 1074.58 95.1297 1069.34 93.1105L1037.19 79.2875C1033.21 77.5883 1028.63 78.6568 1025.76 81.9554L1017.83 91.0924C1014.95 94.391 1010.37 95.4595 1006.39 93.7602L983.993 83.3221C980.014 81.6229 975.43 82.6914 972.56 85.99L962.493 97.5246C959.623 100.823 955.039 101.892 951.06 100.192L940.125 95.3025C936.146 93.6032 931.562 94.6718 928.692 97.9704L923.551 103.883C920.681 107.182 916.097 108.25 912.118 106.551L908.102 104.834C904.512 103.278 900.406 103.69 897.19 106.057L883.926 115.391L0 115.492V116H1440Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
