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
  Cloud,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Globe,
  Database,
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

const SAPCloudMigration = () => {
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
            Intelligent SAP Cloud Migration
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly migrate your SAP ecosystem to **AWS, Azure, or Google Cloud** with AI-driven precision and zero disruptions.
          </p>
          <p className="text-gray-600">
            Ensure **unmatched scalability, security, and agility** while unlocking the full potential of cloud-powered SAP solutions.
          </p>
        </motion.section>

        {/* Why Choose SAP Cloud Migration */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Migrate Your SAP to the Cloud?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accelerated Migration",
                content:
                  "Cut migration time in half with AI-powered automation and real-time risk assessment.",
                style: cardStyles.primary,
                icon: (
                  <Rocket
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost-Optimized Deployment",
                content:
                  "Maximize savings with dynamic resource allocation and pay-as-you-go cloud models.",
                style: cardStyles.secondary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enterprise-Grade Security",
                content:
                  "Leverage built-in compliance, encryption, and proactive threat detection for SAP workloads.",
                style: cardStyles.primary,
                icon: (
                  <Shield
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cloud-Agnostic Flexibility",
                content:
                  "Seamlessly switch between AWS, Azure, and Google Cloud with multi-cloud compatibility.",
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
            Key Features of SAP Cloud Migration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Cloud Mapping",
                content:
                  "Analyze workloads and auto-map them to cloud-native architectures with AI insights.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Compatibility",
                content:
                  "Switch between AWS, Azure, or Google Cloud while maintaining seamless connectivity.",
                icon: <Cloud className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Zero-Downtime Deployment",
                content:
                  "Ensure business continuity with phased cutovers and intelligent workload balancing.",
                icon: <Database className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Real-Time Compliance",
                content:
                  "Stay audit-ready with cloud governance tools designed for SAP data security.",
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
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
                question: "How long does SAP cloud migration take?",
                answer:
                  "Migration timelines vary based on workload complexity, but our AI-driven tools cut migration time by up to 50%.",
              },
              {
                question: "Is my data secure in the cloud?",
                answer:
                  "Yes, our solution ensures enterprise-grade encryption, compliance, and real-time threat monitoring.",
              },
              {
                question: "Can I move back on-premise if needed?",
                answer:
                  "Absolutely! Our hybrid architecture allows for both cloud and on-premise SAP environments with flexibility.",
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
            Unlock SAP Cloud Efficiency Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Drive innovation, optimize operations, and future-proof your SAP ecosystem with cloud transformation.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPCloudMigration;