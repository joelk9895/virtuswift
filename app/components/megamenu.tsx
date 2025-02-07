"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import Logo from "./logo";

export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  style: "italic",
});

// Define types for navigation structure
type NavigationItem = {
  name: string;
  href: string;
};

type NavigationColumn = {
  title: string;
  items: NavigationItem[];
};

type NavigationMenu = {
  title: string;
  description?: string;
  image?: string;
  columns: NavigationColumn[];
};

const navigationData: NavigationMenu[] = [
  {
    title: "Products",
    description:
      "Explore our latest products and tools, including cutting-edge logistics automation, real-time tracking solutions, and advanced SAP integration tools designed to optimize your business operations.",
    image:
      "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    columns: [
      {
        title: "Latest",
        items: [
          {
            name: "End-to-End Logistics and Warehouse Automation",
            href: "/services/logistics-automation",
          },
          {
            name: "Real-Time Freight Tracking Solutions",
            href: "/services/freight-tracking",
          },
          {
            name: "Cross-Border Logistics Compliance",
            href: "/services/logistics-compliance",
          },
        ],
      },
      {
        title: "Cloud Platforms & Tools",
        items: [
          { name: "SAP on AWS", href: "/products/sap-on-aws" },
          { name: "SAP on Azure", href: "/products/sap-on-azure" },
          {
            name: "SAP on Google Cloud",
            href: "/products/sap-on-google-cloud",
          },
          {
            name: "SAP RISE Enablement Suite",
            href: "/products/sap-rise-enablement",
          },
          {
            name: "AI-Powered SAP Data Analytics Tools",
            href: "/products/sap-data-analytics",
          },
        ],
      },
      {
        title: "SAP Solutions Suite",
        items: [
          {
            name: "S/4HANA Migration Accelerator",
            href: "/services/s4hana-migration",
          },
          {
            name: "SAP BW/4HANA Transformation Tools",
            href: "/products/bw4hana-tools",
          },
          {
            name: "SAP Integration for Logistics Modules (TM, EWM)",
            href: "/products/sap-logistics-integration",
          },
          {
            name: "Business Process Automation for SAP",
            href: "/products/sap-process-automation",
          },
        ],
      },
      {
        title: "Advanced IT Products",
        items: [
          {
            name: "Multi-Cloud Automation Toolkit",
            href: "/products/multi-cloud-automation",
          },
          {
            name: "Security Intelligence for SAP",
            href: "/products/sap-security-intelligence",
          },
          {
            name: "Virtualized IT Infrastructure Modules",
            href: "/products/it-infrastructure-modules",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    description:
      "Discover our comprehensive solutions tailored to meet the unique needs of various industries, from cloud transformation to workforce optimization.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    columns: [
      {
        title: "Latest",
        items: [
          {
            name: "End-to-End Logistics and Warehouse Automation",
            href: "/services/logistics-automation",
          },
          {
            name: "Real-Time Freight Tracking Solutions",
            href: "/services/freight-tracking",
          },
          {
            name: "Cross-Border Logistics Compliance",
            href: "/services/logistics-compliance",
          },
        ],
      },
      {
        title: "Cloud Transformation Solutions",
        items: [
          {
            name: "Intelligent SAP Cloud Migration (AWS, Azure, Google Cloud)",
            href: "/solutions/intelligent-sap-migration",
          },
          {
            name: "End-to-End Data Center Transformation",
            href: "/solutions/data-center-transformation",
          },
          {
            name: "AI-Driven Cloud Cost Optimization",
            href: "/solutions/cloud-cost-optimization",
          },
        ],
      },
      {
        title: "Business Continuity & Disaster Recovery",
        items: [
          {
            name: "High-Availability SAP Solutions",
            href: "/solutions/high-availability-sap",
          },
          {
            name: "Multi-Cloud Backup and Disaster Recovery Plans",
            href: "/solutions/disaster-recovery-plans",
          },
          {
            name: "Real-Time Monitoring & Proactive Support",
            href: "/solutions/real-time-monitoring",
          },
        ],
      },
      {
        title: "Logistics & Supply Chain Innovation",
        items: [
          {
            name: "Route Optimization and Delivery Tracking",
            href: "/solutions/route-optimization",
          },
          {
            name: "Predictive Inventory Management Solutions",
            href: "/solutions/inventory-management",
          },
          {
            name: "AI-Enhanced Order Fulfillment",
            href: "/solutions/order-fulfillment",
          },
        ],
      },
      {
        title: "Workforce Optimization Solutions",
        items: [
          {
            name: "Flexible Staffing for IT and SAP Projects",
            href: "/solutions/flexible-staffing",
          },
          {
            name: "Onboarding and Retention Programs",
            href: "/solutions/onboarding-programs",
          },
          {
            name: "Payroll and Workforce Management",
            href: "/solutions/payroll-management",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    description:
      "Our range of services are designed to help you achieve your business goals with efficiency and precision.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    columns: [
      {
        title: "Latest",
        items: [
          {
            name: "End-to-End Logistics and Warehouse Automation",
            href: "/services/logistics-automation",
          },
          {
            name: "Real-Time Freight Tracking Solutions",
            href: "/services/freight-tracking",
          },
          {
            name: "Cross-Border Logistics Compliance",
            href: "/services/logistics-compliance",
          },
        ],
      },
      {
        title: "Cloud & SAP Transformation Services",
        items: [
          {
            name: "Seamless SAP-to-Cloud Migrations",
            href: "/services/sap-cloud-migrations",
          },
          {
            name: "S/4HANA Implementation and Optimization",
            href: "/services/s4hana-implementation",
          },
          {
            name: "RISE with SAP Deployment",
            href: "/services/rise-with-sap",
          },
        ],
      },
      {
        title: "Managed IT Services",
        items: [
          {
            name: "Proactive Monitoring for IT Infrastructure",
            href: "/services/it-monitoring",
          },
          {
            name: "Compute, Storage, and Network Management for SAP",
            href: "/services/sap-infrastructure-management",
          },
          {
            name: "Cybersecurity Services for Cloud Workloads",
            href: "/services/cloud-cybersecurity",
          },
        ],
      },
      {
        title: "Logistics Management Services",
        items: [
          {
            name: "End-to-End Logistics and Warehouse Automation",
            href: "/services/logistics-automation",
          },
          {
            name: "Real-Time Freight Tracking Solutions",
            href: "/services/freight-tracking",
          },
          {
            name: "Cross-Border Logistics Compliance",
            href: "/services/logistics-compliance",
          },
        ],
      },
      {
        title: "Staffing & Workforce Services",
        items: [
          {
            name: "Expert IT Talent Acquisition",
            href: "/services/it-talent-acquisition",
          },
          {
            name: "Contract, Temp-to-Hire, and Permanent Staffing",
            href: "/services/staffing-solutions",
          },
          {
            name: "Offshore and On-Site Teams",
            href: "/services/offshore-teams",
          },
        ],
      },
    ],
  },
  {
    title: "Industries",
    description:
      "We cater to a wide range of industries, providing specialized solutions to meet the unique challenges of each sector.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    columns: [
      {
        title: "Latest",
        items: [
          {
            name: "End-to-End Logistics and Warehouse Automation",
            href: "/services/logistics-automation",
          },
          {
            name: "Real-Time Freight Tracking Solutions",
            href: "/services/freight-tracking",
          },
          {
            name: "Cross-Border Logistics Compliance",
            href: "/services/logistics-compliance",
          },
        ],
      },
      {
        title: "Manufacturing & Supply Chain",
        items: [
          {
            name: "Smart Factory Integration with SAP Modules",
            href: "/industries/smart-factory-integration",
          },
          {
            name: "Warehouse Robotics & Automation",
            href: "/industries/warehouse-automation",
          },
        ],
      },
      {
        title: "Retail & eCommerce",
        items: [
          {
            name: "Inventory Management & Demand Forecasting",
            href: "/industries/inventory-management",
          },
          {
            name: "Customer Experience Automation Solutions",
            href: "/industries/customer-automation",
          },
        ],
      },
      {
        title: "Healthcare & Pharmaceuticals",
        items: [
          {
            name: "SAP Compliance for Healthcare Regulations",
            href: "/industries/healthcare-compliance",
          },
          {
            name: "Real-Time Analytics for Supply Chain Visibility",
            href: "/industries/supply-chain-analytics",
          },
        ],
      },
      {
        title: "Transportation & Logistics",
        items: [
          {
            name: "Fleet Management and Tracking Systems",
            href: "/industries/fleet-management",
          },
          {
            name: "Cross-Border Logistics Solutions",
            href: "/industries/logistics-solutions",
          },
        ],
      },
      {
        title: "Financial Services",
        items: [
          {
            name: "Secure Cloud Solutions for Banking & Finance",
            href: "/industries/cloud-banking",
          },
          {
            name: "AI-Powered Fraud Detection Tools",
            href: "/industries/fraud-detection",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    description:
      "Access a wealth of resources including webinars, case studies, and expert insights to stay ahead in your industry.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    columns: [
      {
        title: "Latest",
        items: [
          {
            name: "End-to-End Logistics and Warehouse Automation",
            href: "/services/logistics-automation",
          },
          {
            name: "Real-Time Freight Tracking Solutions",
            href: "/services/freight-tracking",
          },
          {
            name: "Cross-Border Logistics Compliance",
            href: "/services/logistics-compliance",
          },
        ],
      },
      {
        title: "Learning Hub",
        items: [
          {
            name: "Webinars, Tutorials, and Whitepapers",
            href: "/resources/learning-hub",
          },
          {
            name: "SAP, Cloud, and Logistics Knowledge Base",
            href: "/resources/knowledge-base",
          },
        ],
      },
      {
        title: "Success Stories",
        items: [
          {
            name: "Client Case Studies & Testimonials",
            href: "/resources/case-studies",
          },
          {
            name: "Industry-Leading Best Practices",
            href: "/resources/best-practices",
          },
        ],
      },
      {
        title: "Insights & Innovations",
        items: [
          {
            name: "Blogs, Market Trends, and News",
            href: "/resources/blogs",
          },
          {
            name: "AI and Emerging Tech Trends for SAP",
            href: "/resources/tech-trends",
          },
        ],
      },
      {
        title: "Support Hub",
        items: [
          {
            name: "Client Support Portal",
            href: "/resources/support-portal",
          },
          {
            name: "24/7 Expert Assistance",
            href: "/resources/expert-assistance",
          },
        ],
      },
    ],
  },
];

const MegaMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname !== "/") {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 0);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (window.location.pathname !== "/") {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsHovered(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnterTab = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeaveTab = () => {
    if (activeMenu === null) {
      setIsHovered(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveMobileSection(null);
    }
  };

  const toggleMobileSection = (index: number) => {
    setActiveMobileSection(activeMobileSection === index ? null : index);
  };

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 w-screen bg-transparent z-50 border-y-[0.5px] transition-colors duration-300 ${
        isHovered || isScrolled || activeMenu != null
          ? "border-grey"
          : "border-[#ffffff]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="mx-auto flex items-center justify-between h-[72px]"
        animate={{
          backgroundColor:
            isHovered || activeMenu !== null || isScrolled || isMobileMenuOpen
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 0.1)",
          backdropFilter:
            isHovered || activeMenu !== null ? "none" : "blur(10px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Link
          href="/"
          className={`text-2xl font-bold text-white flex h-full items-center px-6 border-r transition-colors duration-300 ${
            isHovered || isScrolled || activeMenu != null
              ? "border-grey"
              : "border-[#ffffff30]"
          }`}
        >
          <Logo isHovered={isHovered} isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex h-full">
          {navigationData.map((menu, index) => (
            <div
              key={index}
              className={`flex flex-col items-center h-full transition-colors duration-300 ${
                isHovered || isScrolled || activeMenu != null
                  ? "border-grey"
                  : "border-[#ffffff30]"
              } border-r ${
                index === 0
                  ? isHovered || isScrolled || activeMenu !== null
                    ? "border-l border-grey"
                    : "border-l border-[#ffffff30]"
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnterTab(index)}
              onMouseLeave={handleMouseLeaveTab}
            >
              <button
                className={`flex items-center px-6 h-full relative ${
                  isHovered || activeMenu !== null || isScrolled
                    ? "text-black"
                    : "text-white"
                } hover:text-indigo-800 transition-colors`}
              >
                {menu.title}
                <ChevronDown className="ml-2 w-4 h-4" />
                {activeMenu === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeMenu === index && (
                  <motion.div
                    initial={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                    }}
                    animate={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      transition: {
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    style={{
                      position: "absolute",
                      minWidth: "100vw",
                      minHeight: "100vh",
                      maxWidth: "100vw",
                      top: "100%",
                      left: 0,
                      zIndex: 50,
                    }}
                    className="bg-[#000000cc] shadow-2xl border-b border-gray-100 overflow-hidden flex justify-center"
                    onClick={() => {
                      setIsHovered(false);
                      setActiveMenu(null);
                    }}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: -40,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        y: -20,
                        transition: {
                          duration: 0.01,
                          ease: "easeIn",
                        },
                      }}
                      className="min-w-[80vw] max-w-[80vw] bg-white min-h-[80vh] max-h-fit"
                    >
                      <div className="flex gap-8 min-h-[80vh]">
                        {/* Main Content of Mega Menu */}
                        <div className="flex gap-8 min-h-[80vh]">
                          {/* Latest Section */}
                          <div className="flex flex-col w-1/3 min-h-full border-r border-gray-200 p-8">
                            {menu.columns.map((column, colIndex) => {
                              if (column.title === "Latest") {
                                return (
                                  <div key={colIndex}>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                      {column.title}
                                    </h3>
                                    <motion.ul
                                      initial="hidden"
                                      animate="visible"
                                      variants={{
                                        visible: {
                                          transition: {
                                            delayChildren: 0.2,
                                            staggerChildren: 0.15,
                                          },
                                        },
                                      }}
                                    >
                                      {column.items.map((item, itemIndex) => (
                                        <motion.li
                                          key={itemIndex}
                                          variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 },
                                          }}
                                        >
                                          <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-indigo-800 hover:underline transition-colors leading-8"
                                          >
                                            {item.name}
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>

                          {/* Links Section */}
                          <div className="grid grid-cols-2 gap-8 w-2/3 p-8">
                            {menu.columns.map((column, colIndex) => {
                              if (column.title !== "Latest") {
                                return (
                                  <div key={colIndex} className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                      {column.title}
                                    </h3>
                                    <motion.ul
                                      initial="hidden"
                                      animate="visible"
                                      variants={{
                                        visible: {
                                          transition: {
                                            delayChildren: 0.2,
                                            staggerChildren: 0.15,
                                          },
                                        },
                                      }}
                                    >
                                      {column.items.map((item, itemIndex) => (
                                        <motion.li
                                          key={itemIndex}
                                          variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 },
                                          }}
                                        >
                                          <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-indigo-800 hover:underline transition-colors leading-8"
                                          >
                                            {item.name}
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>

                          {/* Details Section */}
                          <div className="w-1/3 p-8 border-l border-gray-200">
                            <motion.h3
                              className={
                                "text-4xl font-semibold text-gray-900 mb-4 " +
                                instrumentSerif.className
                              }
                            >
                              {menu.title}
                              <span className="text-orange-500">.</span>
                            </motion.h3>

                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <Image
                                src={menu.image || ""}
                                alt="Image of plant"
                                className="mb-4"
                                width={200}
                                height={200}
                              />
                              <p className="text-gray-600 leading-6">
                                {menu.description}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden px-6 h-full flex items-center"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className={isHovered || isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu className={isHovered || isScrolled ? "text-black" : "text-white"} />
          )}
        </button>

        {/* Mobile Menu Panel */}
        <motion.div
          className={`lg:hidden fixed inset-0 bg-white z-50 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <Logo isHovered={true} isScrolled={true} />
              <button onClick={toggleMobileMenu}>
                <X className="text-black" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {navigationData.map((menu, index) => (
                <div key={index} className="border-b">
                  <button
                    onClick={() => toggleMobileSection(index)}
                    className="w-full p-6 flex justify-between items-center text-black"
                  >
                    {menu.title}
                    <ChevronDown
                      className={`transition-transform ${
                        activeMobileSection === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {activeMobileSection === index && (
                    <div className="bg-gray-50 px-6 pb-6">
                      {menu.columns.map((column, colIndex) => (
                        <div key={colIndex} className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {column.title}
                          </h3>
                          <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.href}
                                  className="text-gray-600 hover:text-indigo-800"
                                  onClick={toggleMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-6 border-t">
              <Link
                href="/signup"
                className="block w-full py-3 px-4 text-center bg-black text-white rounded-lg"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Desktop Action Buttons */}
        <div
          className={`hidden lg:flex space-x-4 p-0 h-full items-center border-l transition-colors duration-300 ${
            isHovered || isScrolled || activeMenu != null
              ? "border-grey"
              : "border-[#ffffff30]"
          }`}
        >
          <Link
            href="/signup"
            className={`px-4 py-2 transition-colors ${
              isHovered || activeMenu !== null || isScrolled
                ? "text-black hover:text-purple-950"
                : "text-white hover:text-blue-300"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default MegaMenu;
