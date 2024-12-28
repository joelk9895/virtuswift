// components/Header.jsx
import Link from "next/link";
import Solutions from "../screens/landing/components/services";
import WhyChooseUs from "../screens/landing/components/whychooseus";
import Logo from "./logo";

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
  <section className="py-36 bg-gray-50 h-screen">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">
        Latest Insights
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {insights.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href="#"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Read More →
            </Link>
          </div>
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
          <Logo isHovered />
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
