"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/80 py-5 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="sr-only">Realtix</span>
              <div className="relative mr-6">
                <div className="flex items-center gap-1.5">
                  <div className="bg-primary-600 text-white font-bold rounded-md w-8 h-8 flex items-center justify-center">
                    R
                  </div>
                  <div className="font-bold text-xl text-primary-800 group-hover:text-primary-700 transition-colors">
                    Realtix
                  </div>
                </div>
              </div>
            </Link>
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-base font-medium transition-colors relative group",
                    pathname === link.href
                      ? "text-primary-700 bg-primary-50"
                      : "text-secondary-600 hover:text-primary-700 hover:bg-primary-50/50"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-primary-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-md transition-all duration-200"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-all duration-200 shadow-sm hover:shadow"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="fixed inset-0 bg-secondary-900/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <Link
                  href="/"
                  className="flex items-center gap-1.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="bg-primary-600 text-white font-bold rounded-md w-8 h-8 flex items-center justify-center">
                    R
                  </div>
                  <div className="font-bold text-xl text-primary-800">
                    Realtix
                  </div>
                </Link>
                <button
                  type="button"
                  className="rounded-full p-2 text-secondary-700 hover:bg-secondary-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <FiX className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="p-4 h-[calc(100vh-73px)] overflow-y-auto flex flex-col">
                <nav className="flex-1 space-y-1 mt-4">
                  {navigation.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="overflow-hidden"
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-3 px-4 text-lg font-medium transition-colors rounded-lg",
                          pathname === link.href
                            ? "text-primary-700 bg-primary-50"
                            : "text-secondary-600 hover:text-primary-700 hover:bg-primary-50/50"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pt-6 space-y-3 border-t border-secondary-100">
                  <Link
                    href="/login"
                    className="block w-full py-3 px-4 text-center text-primary-700 hover:text-primary-800 border border-primary-600 rounded-lg transition-colors hover:bg-primary-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    href="/register"
                    className="block w-full py-3 px-4 text-center text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>

                  <div className="pt-6 text-center text-sm text-secondary-500">
                    <p>© {new Date().getFullYear()} Realtix</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
