// components/Header.jsx
import Link from "next/link";
import Solutions from "../screens/landing/components/services";
import WhyChooseUs from "../screens/landing/components/whychooseus";

const Header = () => (
  <header className="bg-indigo-800 text-white py-6">
    <nav className="container mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        YourCompany
      </Link>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
        Get a Free Consultation
      </button>
    </nav>
  </header>
);

// components/TrustedBy.jsx
const TrustedBy = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Trusted By</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Replace with actual client logos */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-20 bg-gray-100 rounded flex items-center justify-center"
          >
            <span className="text-gray-400">Logo {i}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// components/Solutions.jsx
const solutions = [
  { title: "Cloud Transformation", icon: "☁️" },
  { title: "SAP Modernization", icon: "🔄" },
  { title: "Data Innovation", icon: "📊" },
  { title: "IT Infrastructure", icon: "🖥️" },
];

// components/WhyChooseUs.jsx
const reasons = [
  {
    title: "Proven Track Record",
    description: "Years of successful implementations",
  },
  {
    title: "Customer-Centric Approach",
    description: "Your success is our priority",
  },
  {
    title: "Cutting-Edge Technology",
    description: "Latest innovations at your service",
  },
  { title: "24/7 Support", description: "Always here when you need us" },
];

// components/Testimonials.jsx
const testimonials = [
  {
    quote: "Their expertise transformed our business operations.",
    author: "John Doe",
    position: "CEO, Tech Corp",
  },
  {
    quote: "Outstanding service and support throughout the project.",
    author: "Jane Smith",
    position: "CTO, Innovation Inc",
  },
];

const Testimonials = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">
        Client Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-600">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// components/LatestInsights.jsx
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
          <h3 className="text-xl font-bold mb-4">YourCompany</h3>
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
          <h4 className="font-semibold mb-4">Company</h4>
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
        <p>© 2024 YourCompany. All rights reserved.</p>
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
