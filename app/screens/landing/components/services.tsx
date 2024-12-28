import { svg } from "framer-motion/client";
import Image from "next/image";
const solutions = [
  {
    title: "Cloud Transformation & SAP Solutions",
    svg: "/sap.svg",
    description:
      "Seamlessly migrate, optimize, and manage SAP workloads on AWS, Azure, or Google Cloud.",
  },
  {
    title: "IT Managed Services",
    svg: "/it.svg",
    description:
      "Proactive monitoring, cybersecurity, and infrastructure optimization tailored to your needs.",
  },
  {
    title: "Logistics Solutions",
    svg: "/truck.svg",
    description:
      "Automate supply chain processes, enhance visibility, and optimize last-mile delivery.",
  },
  {
    title: "Staffing Services",
    svg: "/worker.svg",
    description:
      "Access top-tier IT talent with flexible staffing models for permanent, temp-to-hire, or offshore needs.",
  },
  {
    title: "Business Continuity & Disaster Recovery",
    svg: "/recovery.svg",
    description:
      "Protect your operations with real-time backups, failover systems, and rapid recovery strategies.",
    icon: "🔄",
  },
];

const Solutions = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-black mb-4">
          Unlock Your Business's Potential
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At VirtuSwift, our foundation is built on the principles of Trust,
          Transparency, Communication, and Collaboration. These values drive
          every aspect of our service offerings, ensuring exceptional results
          and a client-focused approach.
        </p>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mb-16">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="p-8 bg-indigo-50 w-[400px] flex flex-col items-center"
          >
            <Image
              src={solution.svg || "/default.svg"}
              alt={solution.title}
              width={70}
              height={70}
              className="my-6"
            />

            <h3 className="text-xl font-semibold mb-3 text-indigo-800 text-center">
              {solution.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              {solution.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-300">
          Explore Our Services
        </button>
      </div>
    </div>
  </section>
);

export default Solutions;
