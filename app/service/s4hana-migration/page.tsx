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
  BarChart3,
  Shield,
  Globe,
  Rocket,
  CircleDollarSign,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-orange-50 to-orange-100",
  feature:
    "bg-gradient-to-br from-white to-orange-50 hover:shadow-lg transition-all duration-300",
};

const AIPoweredDataAnalytics = () => {
  return (
    <div className="min-w-screen bg-slate-50 flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-[60%] items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            AI-Powered SAP Data Analytics Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of **artificial intelligence** to revolutionize your business decisions. SAP data analytics tools bring unmatched precision, agility, and innovation to the heart of your enterprise.
          </p>
          <p className="text-gray-600">
            Empower your organization with **real-time insights** that drive success and growth in today’s data-driven world.
          </p>
        </motion.section>

        {/* Why Choose AI-Powered SAP Data Analytics Tools */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose AI-Powered Analytics Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time Insights",
                content:
                  "Access real-time, actionable data to empower smarter and faster business decisions.",
                style: cardStyles.primary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Data-Driven Strategy",
                content:
                  "Leverage predictive analytics to stay ahead of trends and outpace the competition.",
                style: cardStyles.secondary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost Optimization",
                content:
                  "Optimize operations and reduce costs with tools designed to maximize ROI on every data insight.",
                style: cardStyles.primary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enhanced Security",
                content:
                  "Ensure your data is secure with SAP’s enterprise-grade security protocols and AI-powered risk mitigation.",
                style: cardStyles.secondary,
                icon: (
                  <Shield
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
            Key Features of Our Analytics Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Predictive Analytics",
                content:
                  "Use machine learning to forecast future trends and performance with precision.",
                icon: <Rocket className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Custom Dashboards",
                content:
                  "Visualize your KPIs with fully customizable and user-friendly dashboards.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Data Integration",
                content:
                  "Seamlessly integrate data from SAP and other platforms to ensure a unified analytics experience.",
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Advanced Security",
                content:
                  "Keep your data safe with AI-powered breach detection and comprehensive compliance measures.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
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
                question: "What industries can benefit from these tools?",
                answer:
                  "Our tools are versatile and cater to a variety of sectors including retail, healthcare, manufacturing, and more.",
              },
              {
                question: "Can I integrate non-SAP data with these tools?",
                answer:
                  "Yes, our analytics platform supports integration with multiple data sources for a comprehensive view.",
              },
              {
                question: "How secure is my data on these platforms?",
                answer:
                  "Your data is secured using top-tier encryption, AI-powered risk management, and continuous monitoring.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} className="border-gray-200 shadow-md" value={""}>
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Supercharge Your Data Analytics Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elevate your business outcomes with AI-powered insights and transformative analytics tools.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default AIPoweredDataAnalytics;