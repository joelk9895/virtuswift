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
  Server,
  Database,
  Network,
  Cloud,
  Shield,
  HardDrive,
  Cpu,
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

const ComputeStorageNetworkSAP = () => {
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
            Compute, Storage, and Network Management for SAP
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize SAP workloads with high-performance compute, scalable
            storage, and secure networking solutions designed for enterprise
            efficiency.
          </p>
          <p className="text-gray-600">
            Ensure seamless performance, data security, and operational
            resilience with our tailored SAP infrastructure management services.
          </p>
        </motion.section>

        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our SAP Infrastructure Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "High-Performance Compute",
                content:
                  "Leverage optimized compute resources for seamless SAP processing.",
                style: cardStyles.primary,
                icon: <Cpu className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable Storage Solutions",
                content:
                  "Ensure secure, high-speed storage to support SAP databases and applications.",
                style: cardStyles.secondary,
                icon: <HardDrive className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Robust Network Architecture",
                content:
                  "Enhance SAP performance with secure, low-latency network connectivity.",
                style: cardStyles.primary,
                icon: <Network className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Enterprise-Grade Security",
                content:
                  "Protect SAP data with advanced encryption, compliance, and monitoring.",
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

        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SAP HANA Optimization",
                content:
                  "Enhance SAP HANA performance with dedicated compute and storage resources.",
                icon: <Database className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Integration",
                content:
                  "Deploy SAP workloads on-premise, in the cloud, or in a hybrid environment.",
                icon: <Cloud className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Automated Scaling",
                content:
                  "Dynamically allocate compute and storage based on SAP workload demands.",
                icon: <Server className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "End-to-End Monitoring",
                content:
                  "Proactively monitor SAP infrastructure for performance and security.",
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
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
                question:
                  "What are the benefits of optimizing compute, storage, and network for SAP?",
                answer:
                  "Optimized SAP infrastructure ensures faster processing, reduced latency, improved scalability, and enhanced security for mission-critical workloads.",
              },
              {
                question: "Does this solution support SAP HANA?",
                answer:
                  "Yes, we provide specialized compute and storage solutions optimized for SAP HANA environments.",
              },
              {
                question: "Can I integrate with my existing cloud provider?",
                answer:
                  "Absolutely, our solutions support multi-cloud deployments including AWS, Azure, Google Cloud, and private cloud environments.",
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
            Optimize Your SAP Infrastructure Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock high performance, reliability, and scalability with our
            compute, storage, and network management solutions for SAP.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request a Consultation
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

export default ComputeStorageNetworkSAP;
