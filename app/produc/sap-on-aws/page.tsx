"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import MegaMenu from "@/app/components/megamenu";
import Footer from "@/app/components/footer";
import {
  Boxes,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Banknote,
  Lock,
  Globe,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary:
    "bg-gradient-to-br from-indigo-50 via-indigo-100 to-white border-indigo-200 hover:border-indigo-300",
  secondary:
    "bg-gradient-to-br from-orange-50 via-orange-100 to-white border-orange-200 hover:border-orange-300",
  feature:
    "bg-gradient-to-br from-white via-slate-50 to-transparent border border-slate-200 hover:border-orange-200 hover:shadow-orange-100/50 hover:shadow-xl transition-all duration-500",
};

const SAPOnAWS = () => {
  return (
    <div className="min-w-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/20 flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-[60%] items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/20 via-indigo-100/20 to-transparent rounded-3xl blur-3xl"></div>

        {/* Hero Section with enhanced styling */}
        <motion.section
          className="text-center space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-indigo-200/20 blur-3xl -z-10"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            SAP on AWS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionize your SAP ecosystem with the power of Amazon Web
            Services.
          </p>
          <p className="text-gray-600">
            Our cutting-edge solutions ensure seamless migration, unparalleled
            scalability, and robust performance for your SAP workloads.
          </p>
        </motion.section>

        {/* Why Choose SAP on AWS */}
        <motion.section className="space-y-8 w-full" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose SAP on AWS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Faster Time to Value",
                content:
                  "Streamline deployment with automated processes, reducing complexities and getting your SAP workloads up and running in record time.",
                style: cardStyles.primary,
                icon: (
                  <Rocket
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Smart Cost Management",
                content:
                  "Leverage AWS's dynamic scaling capabilities to optimize costs without compromising on performance.",
                style: cardStyles.secondary,
                icon: (
                  <Banknote
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enterprise-Grade Security",
                content:
                  "Enjoy AWS's advanced security features, including encryption, compliance certifications, and dedicated monitoring.",
                style: cardStyles.primary,
                icon: (
                  <Lock
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Global Reach",
                content:
                  "AWS's expansive infrastructure enables SAP solutions to operate with ultra-low latency and high availability.",
                style: cardStyles.secondary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`${card.style} border shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex flex-col items-center">
                      <div className="rounded-2xl p-3 bg-gradient-to-br from-white to-transparent border border-slate-100 shadow-inner">
                        {card.icon}
                      </div>
                      <CardTitle className="text-slate-800 font-bold mt-4">
                        {card.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-center">
                    {card.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section className="space-y-8 w-full" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automated Deployment",
                content:
                  "Pre-configured templates for swift setup and reduced errors.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-indigo-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <Boxes
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "High Availability",
                content: "Built-in redundancy to ensure business continuity.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-indigo-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <Shield
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "Cost Optimization",
                content:
                  "Pay only for what you use, with tools to monitor and control spending.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-indigo-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <CircleDollarSign
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "Performance Monitoring",
                content: "End-to-end visibility for peak system efficiency.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-indigo-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <BarChart3
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`${cardStyles.feature} group hover:bg-gradient-to-br hover:from-white hover:via-orange-50/50 hover:to-indigo-50/50`}
              >
                <div className="mt-8">
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-indigo-600 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 text-center font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600">
                  {feature.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* FAQs Section */}
        <motion.section
          className="space-y-8 w-full backdrop-blur-sm"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="space-y-4 w-full max-w-3xl mx-auto"
          >
            {[
              {
                value: "faq-1",
                className: "indigo",
                question: "Can I migrate my existing SAP system to AWS?",
                answer: {
                  text: "Absolutely! Our migration experts ensure a seamless transition of your SAP workloads to AWS with minimal downtime. We follow a proven methodology that includes:",
                  list: [
                    "Detailed assessment of your current infrastructure",
                    "Custom migration strategy development",
                    "Rigorous testing and validation",
                    "24/7 support during and after migration",
                  ],
                },
              },
              {
                value: "faq-2",
                className: "orange",
                question: "Is SAP on AWS compliant with global standards?",
                answer: {
                  text: "Yes, AWS is compliant with major certifications including:",
                  list: [
                    "GDPR (General Data Protection Regulation)",
                    "HIPAA (Health Insurance Portability and Accountability Act)",
                    "ISO 27001 (Information Security Management)",
                    "SOC 1, SOC 2, and SOC 3 reports",
                  ],
                },
              },
              {
                value: "faq-3",
                className: "indigo",
                question: "How does SAP on AWS improve cost efficiency?",
                answer: {
                  text: "SAP on AWS offers several cost optimization benefits:",
                  list: [
                    "Pay-as-you-go pricing model",
                    "Automatic scaling based on demand",
                    "Reserved instance options for planned workloads",
                    "Built-in cost monitoring and optimization tools",
                  ],
                },
              },
            ].map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className={`rounded-lg border border-${faq.className}-200 shadow-sm overflow-hidden w-full`}
              >
                <AccordionTrigger
                  className={`bg-gradient-to-r from-${faq.className}-50 to-white px-6 py-4 hover:bg-${faq.className}-100/50 transition-all duration-300 w-full`}
                >
                  <div className="flex items-center space-x-3 text-left w-full">
                    <span
                      className={`text-${faq.className}-600 text-lg font-semibold`}
                    >
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 w-full min-w-4xl max-w-4xl">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer.text}
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      {faq.answer.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="w-full text-center space-y-8 relative overflow-hidden rounded-3xl"
          {...fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-orange-500/10 to-purple-500/10 blur-3xl"></div>
          <div className="relative bg-white/40 backdrop-blur-xl px-8 py-16 rounded-3xl border border-orange-100/20 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-indigo-100/20 to-purple-100/20 opacity-60"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Your Journey to Cloud Excellence Starts Here
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                AWS and SAP together empower you to innovate and scale like
                never before. Don&apos;t let outdated infrastructure hold you
                back—embrace the cloud today.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button className="group relative px-8 py-6 overflow-hidden rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white text-lg font-semibold">
                    Contact Us
                  </span>
                </Button>
                <Button className="group relative px-8 py-6 overflow-hidden rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 to-indigo-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white text-lg font-semibold">
                    Request a Demo
                  </span>
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5" />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BarChart3 className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CircleDollarSign className="w-5 h-5" />
                  <span>Flexible pricing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default SAPOnAWS;
