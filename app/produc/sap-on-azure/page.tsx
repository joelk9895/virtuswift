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
  Globe,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary:
    "bg-gradient-to-br from-indigo-50/90 via-white to-indigo-100/80 backdrop-blur-sm border border-indigo-100/50",
  secondary:
    "bg-gradient-to-br from-orange-50/90 via-white to-orange-100/80 backdrop-blur-sm border border-orange-100/50",
  feature:
    "bg-white/90 hover:bg-gradient-to-br hover:from-orange-50/60 hover:to-white backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50",
};

const SAPOnAzure = () => {
  return (
    <div className="min-w-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <motion.section
          className="text-center space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            SAP on Azure
          </h1>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Harness the power of{" "}
              <span className="text-indigo-600 font-semibold">Azure Cloud</span>{" "}
              to optimize, modernize, and scale your SAP workloads seamlessly.
            </p>
            <p className="text-lg text-gray-600">
              Empower your organization with{" "}
              <span className="text-orange-600 font-semibold">
                future-ready technology
              </span>{" "}
              that drives innovation.
            </p>
          </div>
        </motion.section>

        {/* Why Choose SAP on Azure */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose SAP on Azure?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Unparalleled Scalability",
                content:
                  "Scale your SAP applications dynamically to align with changing business demands.",
                style: cardStyles.primary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost-Effective Operations",
                content:
                  "Optimize costs with Azure’s flexible pricing models and advanced cost-management tools.",
                style: cardStyles.secondary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Comprehensive Security",
                content:
                  "Ensure data protection and compliance with Azure’s enterprise-grade security infrastructure.",
                style: cardStyles.primary,
                icon: (
                  <Shield
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Future-Ready Innovation",
                content:
                  "Leverage AI-powered tools and analytics for smarter decisions and streamlined operations.",
                style: cardStyles.secondary,
                icon: (
                  <Rocket
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
                  className={`${card.style} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full py-5`}
                >
                  <CardHeader className="h-1/2">
                    <div className="flex flex-col items-center justify-center h-full">
                      {card.icon}
                      <CardTitle className="text-slate-800 font-bold text-center">
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

        {/* Key Features Section */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features of SAP on Azure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rapid Deployment",
                content:
                  "Pre-built templates for faster deployment of SAP solutions in Azure environments.",
                icon: <Boxes className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Business Continuity",
                content:
                  "Achieve high availability with robust disaster recovery features.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Real-Time Insights",
                content:
                  "Gain actionable insights with Azure&apos;s analytics and AI tools tailored for SAP systems.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Optimized TCO",
                content:
                  "Reduce total cost of ownership with Azure&apos;s efficient resource management.",
                icon: (
                  <CircleDollarSign className="w-8 h-8 text-orange-600 mb-4" />
                ),
              },
            ].map((feature, index) => (
              <Card key={index} className={cardStyles.feature}>
                <CardHeader className="text-center">
                  {feature.icon}
                  <CardTitle className="font-bold text-slate-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{feature.content}</CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section className="space-y-8 w-full" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="space-y-4 w-full max-w-3xl mx-auto"
          >
            {[
              {
                question: "Why choose Azure for SAP?",
                answer:
                  "Azure provides unparalleled scalability, innovative tools, and enterprise-grade security for hosting SAP applications.",
              },
              {
                question: "What industries benefit from SAP on Azure?",
                answer:
                  "Our solutions cater to industries like healthcare, finance, manufacturing, retail, and many more.",
              },
              {
                question: "How secure is SAP on Azure?",
                answer:
                  "Azure uses end-to-end encryption, compliance certifications, and multi-layered security to protect your data.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-lg font-semibold px-6 py-4 hover:bg-gray-50/80 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 bg-white/50">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white via-indigo-50/30 to-orange-50/30 rounded-2xl p-16 shadow-lg w-full border border-gray-100/50"
          {...fadeIn}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Future-Proof Your SAP with Azure Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Optimize your SAP systems with Azure&apos;s robust capabilities. Drive
            business success with reliable, secure, and scalable solutions.
          </p>
          <div className="space-x-4">
            <Button 
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-6 shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </Button>
            <Button 
              className="bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white px-8 py-6 shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPOnAzure;
