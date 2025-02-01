"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-none",
  secondary: "bg-gradient-to-br from-orange-50 to-orange-100 border-none",
  feature:
    "bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-all duration-300 border-none",
};

const MultiCloudAutomationToolkit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <MegaMenu />
      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-16 max-w-7xl">
        <motion.section
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Multi-Cloud Automation Toolkit
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Supercharge your cloud strategy with the Multi-Cloud Automation
            Toolkit. Unify operations across AWS, Azure, Google Cloud, and
            private clouds with seamless orchestration.
          </p>
        </motion.section>

        {/* Why Choose Multi-Cloud Automation Toolkit */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Multi-Cloud Automation Toolkit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Simplified Management",
                content:
                  "Unify cloud operations with a single interface that consolidates workflows across all platforms.",
                style: cardStyles.primary,
                icon: (
                  <Boxes
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Optimized Costs",
                content:
                  "Identify inefficiencies and manage cloud spend effectively with real-time insights.",
                style: cardStyles.secondary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enhanced Security",
                content:
                  "Leverage advanced protocols to protect sensitive data across cloud environments.",
                style: cardStyles.primary,
                icon: (
                  <Shield
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Rapid Deployment",
                content:
                  "Launch automation in hours, not weeks, with pre-configured templates for every major cloud platform.",
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
        <motion.section className="space-y-8 mt-12" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features of the Toolkit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Driven Optimization",
                content:
                  "Automatically adjust resources to meet dynamic business needs and reduce waste.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Seamless Integrations",
                content:
                  "Connect your current systems with zero disruptions using robust APIs.",
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "High Availability",
                content:
                  "Enjoy uninterrupted operations with built-in redundancy and failover capabilities.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Real-Time Visibility",
                content:
                  "Monitor multi-cloud environments with advanced dashboards and instant alerts.",
                icon: <Boxes className="w-8 h-8 text-indigo-600 mb-4" />,
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
        <motion.section className="space-y-8 w-full my-20" {...fadeIn}>
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
                question: "Can this toolkit handle hybrid environments?",
                answer:
                  "Yes, our toolkit seamlessly integrates on-premises systems and cloud environments.",
                value: "item-1",
              },
              {
                question: "Is this tool scalable for enterprise use?",
                answer:
                  "Absolutely. The toolkit is designed for enterprises and scales with your business needs.",
                value: "item-2",
              },
              {
                question: "How does it ensure compliance?",
                answer:
                  "Built-in compliance modules automatically track and report regulatory requirements.",
                value: "item-3",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={faq.value}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-indigo-50 to-orange-50 rounded-2xl p-12 shadow-lg my-20"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Elevate Your Multi-Cloud Strategy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simplify operations and accelerate success with intelligent
            automation built for multi-cloud environments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl w-full sm:w-auto">
                Contact Sales
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl w-full sm:w-auto">
                Request Demo
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default MultiCloudAutomationToolkit;
