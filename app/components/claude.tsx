"use client";
import Link from "next/link";
import Solutions from "../screens/landing/components/services";
import WhyChooseUs from "../screens/landing/components/whychooseus";
import Logo from "./logo";
import { motion } from "framer-motion";

// components/Solutions.jsx
const solutions = [
  { title: "Cloud Transformation", icon: "☁️" },
  { title: "SAP Modernization", icon: "🔄" },
  { title: "Data Innovation", icon: "📊" },
  { title: "IT Infrastructure", icon: "🖥️" },
];

const insights = [
  {
    title: "The Future of Cloud Computing",
    excerpt: "Discover the latest trends in cloud technology...",
    date: "2024-03-15",
  },
  {
    title: "Maximizing SAP Performance",
    excerpt: "Learn how to optimize your SAP systems...",
    date: "2024-03-10",
  },
];

const LatestInsights = () => (
  <section className="relative py-36 bg-indigo-50 h-screen overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-black to-black/50 bg-clip-text text-transparent"
      >
        Latest Insights
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {insights.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <span className="text-orange-400 text-sm font-medium mb-4">
                {post.date}
              </span>
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {post.title}
              </h3>
              <p className="text-gray-900 mb-6 flex-grow">{post.excerpt}</p>
              <Link
                href="#"
                className="inline-flex items-center text-black hover:text-orange-400 font-medium transition-colors duration-200"
              >
                <span>Read More</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// components/Footer.jsx
const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">VirtuSwift</h3>
          <Logo isHovered={false} isScrolled={false} />
          <p className="text-gray-400">
            Transforming businesses through technology
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            {solutions.map((solution) => (
              <li key={solution.title}>
                <Link href="#" className="hover:text-white">
                  {solution.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">VirtuSwift</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2024 VirtuSwift. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// pages/index.js
export default function Claude() {
  return (
    <main>
      <Solutions />
      <WhyChooseUs />
      <LatestInsights />
      <Footer />
    </main>
  );
}
