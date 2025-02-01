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
  Factory,
  Server,
  BarChart3,
  Shield,
  Network,
  Settings,
  CheckCircle,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature:
    "bg-gradient-to-br from-white to-indigo-50 hover:shadow-lg transition-all duration-300",
};

const SmartFactorySAP = () => {
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
            Smart Factory Integration with SAP Modules
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Revolutionize your manufacturing operations** with SAP-powered
            Smart Factory solutions. Seamlessly integrate automation, real-time
            data intelligence, and enterprise-wide connectivity.
          </p>
          <p className="text-gray-600">
            Leverage **AI-driven analytics, IoT-enabled insights, and automated
            workflows** to optimize efficiency, reduce costs, and ensure
            precision manufacturing.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Smart Factory Integration?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Seamless SAP Integration",
                content:
                  "Synchronize your factory with **SAP S/4HANA, SAP MES, and ERP modules** for end-to-end automation.",
                style: cardStyles.primary,
                icon: <Server className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Real-Time Data Intelligence",
                content:
                  "Leverage **AI-powered analytics and IoT sensors** for data-driven decision-making.",
                style: cardStyles.secondary,
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Predictive Maintenance",
                content:
                  "Reduce downtime with **machine learning algorithms** that predict failures before they happen.",
                style: cardStyles.primary,
                icon: <Settings className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Enhanced Cybersecurity",
                content:
                  "Protect your factory infrastructure with **SAP’s enterprise-grade security solutions.**",
                style: cardStyles.secondary,
                icon: <Shield className="w-8 h-8 text-green-600 mb-4" />,
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
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Twin Technology",
                content:
                  "Simulate real-world scenarios using **digital replicas of your factory** for testing and optimization.",
                icon: <Network className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Automated Workflow Execution",
                content:
                  "**Eliminate manual processes** with AI-driven task automation across production lines.",
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Cloud & Edge Computing",
                content:
                  "Integrate **SAP Edge Services** for faster data processing and cloud-based analytics.",
                icon: <Server className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Supply Chain Synchronization",
                content:
                  "Connect suppliers, logistics, and production lines with **SAP Integrated Business Planning (IBP).**",
                icon: <Factory className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How long does SAP integration take?",
                answer:
                  "Integration timelines vary based on complexity, but our experts ensure a **seamless deployment** with minimal downtime.",
              },
              {
                question: "Can existing factory systems work with SAP?",
                answer:
                  "Yes! We provide **customized middleware solutions** to connect legacy systems with SAP modules.",
              },
              {
                question:
                  "What industries benefit from Smart Factory Integration?",
                answer:
                  "Industries including **automotive, aerospace, electronics, pharmaceuticals, and consumer goods** have successfully implemented SAP-powered smart factories.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                className="border-gray-200 shadow-md"
                value={""}
              >
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
            Transform Your Factory with SAP-Powered Intelligence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Boost efficiency, enhance agility, and drive innovation** with
            end-to-end SAP integration for your smart factory.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Schedule a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SmartFactorySAP;
