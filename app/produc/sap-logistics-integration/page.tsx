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
import Link from "next/link";
import {
  Boxes,
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
  primary: "bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50",
  secondary: "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50",
  feature:
    "bg-white hover:bg-orange-50 shadow-sm hover:shadow-xl transition-all duration-300",
};

const SAPIntegrationForLogisticsModules = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-50 flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <motion.section
          className="text-center space-y-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            SAP Integration for Logistics Modules
            <span className="block text-orange-600">(TM, EWM)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the full potential of SAP&apos;s Transportation (TM) and
            Extended Warehouse Management (EWM) modules with our cutting-edge
            integration solutions.
          </p>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our SAP Integration Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Enhanced Visibility",
                content:
                  "Achieve real-time insights into your supply chain with integrated SAP modules.",
                style: cardStyles.primary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Optimized Logistics",
                content:
                  "Streamline transportation planning and warehouse processes for faster deliveries.",
                style: cardStyles.secondary,
                icon: (
                  <Boxes
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost Efficiency",
                content:
                  "Reduce operational costs by automating manual processes and minimizing errors.",
                style: cardStyles.primary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Global Scalability",
                content:
                  "Scale seamlessly to meet global logistics demands with agile integration tools.",
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
            Key Features of Our Integration Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Configurations",
                content:
                  "Tailor SAP TM and EWM modules to meet your specific logistics needs.",
                icon: <Boxes className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Real-Time Tracking",
                content:
                  "Track shipments and warehouse operations in real-time with advanced dashboards.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Seamless Integrations",
                content:
                  "Connect effortlessly with third-party platforms and enhance data flow across systems.",
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "AI-Driven Insights",
                content:
                  "Use predictive analytics to optimize logistics and improve decision-making.",
                icon: <Rocket className="w-8 h-8 text-orange-600 mb-4" />,
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
        <motion.section
          className="space-y-8 w-full max-w-4xl mx-auto px-4"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {[
              {
                question: "What is the benefit of integrating SAP TM and EWM?",
                answer:
                  "Integration ensures seamless coordination between transportation and warehouse operations, improving efficiency and reducing lead times.",
              },
              {
                question: "Is this solution scalable for global logistics?",
                answer:
                  "Yes, our integrations are designed to support businesses of all sizes and global operations, adapting to your growing needs.",
              },
              {
                question: "Can the tool integrate with other ERP systems?",
                answer:
                  "Absolutely. The integration framework is designed to work with third-party ERP solutions for a unified logistics approach.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white via-indigo-50 to-white rounded-2xl p-8 md:p-12 shadow-lg w-full max-w-4xl mx-auto"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Revolutionize Your Logistics Operations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate SAP logistics modules and elevate your supply
            chain efficiency. Start today for a smarter tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPIntegrationForLogisticsModules;
