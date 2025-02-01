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
  Server,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  Network,
  CheckCircle,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature:
    "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const RiseWithSAPDeployment = () => {
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
            RISE with SAP Deployment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with SAP’s intelligent cloud solutions. Our
            RISE with SAP deployment services help you modernize operations,
            enhance agility, and drive efficiency with a tailored cloud ERP
            strategy.
          </p>
          <p className="text-gray-600">
            Accelerate digital transformation with scalable, secure, and
            high-performing SAP solutions.
          </p>
        </motion.section>

        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose RISE with SAP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cloud-First Strategy",
                content:
                  "Seamlessly migrate to the SAP cloud environment with a structured roadmap.",
                style: cardStyles.primary,
                icon: <Cloud className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable & Flexible",
                content:
                  "Adapt to business changes with modular, scalable SAP solutions.",
                style: cardStyles.secondary,
                icon: <Globe className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data-Driven Insights",
                content:
                  "Leverage real-time analytics and AI for smarter decision-making.",
                style: cardStyles.primary,
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless Integration",
                content:
                  "Integrate SAP with existing enterprise applications effortlessly.",
                style: cardStyles.secondary,
                icon: <Network className="w-8 h-8 text-green-600 mb-4" />,
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

        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Intelligent ERP",
                content:
                  "Utilize AI-powered SAP S/4HANA for intelligent automation.",
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Enhanced Security",
                content:
                  "Built-in compliance with enterprise-grade security protocols.",
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Cloud & On-Prem Hybrid",
                content:
                  "Deploy SAP solutions on the cloud, on-prem, or hybrid.",
                icon: <Server className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Fast Deployment",
                content:
                  "Accelerate SAP adoption with a streamlined deployment process.",
                icon: <Rocket className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "What is RISE with SAP?",
                answer:
                  "RISE with SAP is a cloud-based business transformation offering that includes SAP S/4HANA, business process intelligence, and AI-powered automation.",
              },
              {
                question: "How long does the deployment take?",
                answer:
                  "Deployment times vary, but our accelerated SAP implementation framework ensures a smooth and rapid transition.",
              },
              {
                question: "Can I integrate SAP with my existing tools?",
                answer:
                  "Yes, SAP supports seamless integration with third-party applications and legacy systems.",
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

        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Start Your SAP Transformation Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leverage RISE with SAP to unlock efficiency, agility, and
            innovation.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
            <Button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default RiseWithSAPDeployment;
