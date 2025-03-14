import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary-800 to-secondary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="font-bold text-2xl flex items-center">
              <div className="bg-white text-primary-600 p-1.5 rounded-lg mr-2">
                R
              </div>
              <span>Realtix</span>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed max-w-xs">
              Automating real estate nurturing through personalized emails,
              messages, and AI voice calls to help you close more deals. A
              product by{" "}
              <a
                href="https://aspiredev.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300"
              >
                AspireDev
              </a>
              .
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors p-2 hover:bg-secondary-700/50 rounded-full"
              >
                <FiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors p-2 hover:bg-secondary-700/50 rounded-full"
              >
                <FiTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors p-2 hover:bg-secondary-700/50 rounded-full"
              >
                <FiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors p-2 hover:bg-secondary-700/50 rounded-full"
              >
                <FiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiMail className="h-4 w-4 mr-2 text-primary-400" />
                <span className="text-sm text-secondary-300">
                  hello@aspiredev.in
                </span>
              </div>
              <div className="flex items-center">
                <FiPhone className="h-4 w-4 mr-2 text-primary-400" />
                <span className="text-sm text-secondary-300">
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 flex items-center">
              <span className="w-6 h-0.5 bg-primary-500 mr-2"></span>
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About", url: "/about" },
                { name: "Team", url: "/team" },
                { name: "Careers", url: "/careers" },
                { name: "Contact", url: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-secondary-300 hover:text-white transition-all hover:translate-x-1 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 flex items-center">
              <span className="w-6 h-0.5 bg-primary-500 mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Features", url: "/features" },
                { name: "Pricing", url: "/pricing" },
                { name: "Documentation", url: "/documentation" },
                { name: "Help Center", url: "/help" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-secondary-300 hover:text-white transition-all hover:translate-x-1 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 flex items-center">
              <span className="w-6 h-0.5 bg-primary-500 mr-2"></span>
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Terms of Service", url: "/terms" },
                { name: "Privacy Policy", url: "/privacy" },
                { name: "Cookie Policy", url: "/cookies" },
                { name: "GDPR Compliance", url: "/gdpr" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-secondary-300 hover:text-white transition-all hover:translate-x-1 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700/50 py-8 flex flex-col sm:flex-row justify-between items-center text-secondary-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Realtix by{" "}
            <a
              href="https://aspiredev.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              AspireDev
            </a>
            . All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Made with ❤️ for real estate professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
