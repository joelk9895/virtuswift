"use client";
import Link from "next/link";
import Logo from "./logo";

const solutions = [
  { title: "Cloud Transformation", icon: "☁️" },
  { title: "SAP Modernization", icon: "🔄" },
  { title: "Data Innovation", icon: "📊" },
  { title: "IT Infrastructure", icon: "🖥️" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 min-w-full">
      <div className="px-10">
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
}
