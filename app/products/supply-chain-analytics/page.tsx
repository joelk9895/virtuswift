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
  Globe,
  Activity,
  Database,
  Truck,
  AlertCircle,
  Shield,
  Layers,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature: "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const SupplyChainAnalytics = () => {
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
            Real-Time Analytics for Supply Chain Visibility
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Unleash the power of real-time insights** to optimize logistics, reduce risks, and enhance efficiency across your supply chain.
          </p>
          <p className="text-gray-600">
            Gain full **end-to-end visibility** with advanced data analytics, predictive intelligence, and seamless automation.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Supply Chain Analytics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time Monitoring",
                content: "Track shipments, inventory, and operations in real time for **instant decision-making.**",
                style: cardStyles.primary,
                icon: <Activity className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Predictive Analytics",
                content: "Leverage AI-powered insights to **forecast demand, reduce risks, and optimize logistics.**",
                style: cardStyles.secondary,
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data-Driven Optimization",
                content: "Utilize **big data analytics** to enhance supply chain efficiency and reduce operational costs.",
                style: cardStyles.primary,
                icon: <Database className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Supply Chain Control",
                content: "Seamlessly manage **multi-region supply chains** with cloud-based visibility solutions.",
                style: cardStyles.secondary,
                icon: <Globe className="w-8 h-8 text-green-600 mb-4" />,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${card.style} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full py-5`}>
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
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fleet & Logistics Tracking",
                content: "Monitor shipments and **minimize delays** with AI-powered tracking.",
                icon: <Truck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Risk & Disruption Alerts",
                content: "Get real-time alerts for **supply chain disruptions and bottlenecks.**",
                icon: <AlertCircle className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Automated Compliance & Security",
                content: "Ensure regulatory compliance and **secure data across all operations.**",
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless ERP Integration",
                content: "Sync effortlessly with **SAP, Oracle, and other ERP platforms.**",
                icon: <Layers className="w-8 h-8 text-green-600 mb-4" />,
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
          <Accordion type="single" collapsible className="space-y-4 w-full max-w-3xl mx-auto">
            {[
              {
                question: "How does real-time analytics improve supply chain efficiency?",
                answer: "By providing **instant insights** into logistics, inventory, and demand forecasting, enabling proactive decision-making.",
              },
              {
                question: "Can this integrate with my existing ERP system?",
                answer: "Yes, our solution integrates with **SAP, Oracle, Microsoft Dynamics, and other ERP platforms.**",
              },
              {
                question: "What security measures are in place for data protection?",
                answer: "We employ **end-to-end encryption, AI-driven fraud detection, and secure cloud storage** to protect your data.",
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
        <motion.section className="text-center space-y-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 shadow-lg" {...fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900">
            Transform Your Supply Chain with Real-Time Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Gain end-to-end visibility, reduce risks, and maximize efficiency** with our AI-powered analytics solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SupplyChainAnalytics;