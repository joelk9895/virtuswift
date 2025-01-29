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
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Lock,
  Globe,
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

const HighAvailabilitySAP = () => {
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
            High-Availability SAP Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Ensure Uninterrupted Business Continuity.** Deploy high-availability SAP solutions that guarantee maximum **uptime, scalability, and security**.
          </p>
          <p className="text-gray-600">
            Power your enterprise with **resilient and failover-ready SAP infrastructures**, ensuring performance and stability for mission-critical workloads.
          </p>
        </motion.section>

        {/* Why Choose High-Availability SAP Solutions */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our SAP High-Availability Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "99.99% Uptime Guaranteed",
                content:
                  "Deploy failover architectures with **zero-downtime** and automatic disaster recovery.",
                style: cardStyles.primary,
                icon: <Server className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Predictive Analytics",
                content:
                  "Use **real-time performance monitoring** to prevent system failures before they occur.",
                style: cardStyles.secondary,
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Enterprise-Grade Security",
                content:
                  "Protect business-critical SAP applications with **end-to-end encryption** and intrusion detection.",
                style: cardStyles.primary,
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Flexibility",
                content:
                  "Run SAP workloads on **AWS, Azure, Google Cloud**, or hybrid setups with seamless transitions.",
                style: cardStyles.secondary,
                icon: <Globe className="w-8 h-8 text-orange-600 mb-4" />,
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
            Key Features of Our SAP High-Availability Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Failover",
                content: "Ensure business continuity with self-healing SAP landscapes that **automatically reroute workloads** in case of failure.",
                icon: <Rocket className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Data Replication & Backups",
                content: "Deploy real-time **synchronous and asynchronous** data replication to prevent data loss.",
                icon: <Lock className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Load Balancing",
                content: "Distribute workloads efficiently across multiple nodes to prevent system overload and performance bottlenecks.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Hybrid & Multi-Cloud Support",
                content: "Migrate and manage **SAP landscapes seamlessly across on-premise and cloud environments**.",
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
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
                question: "How does automated failover work?",
                answer:
                  "If a primary SAP instance fails, **our system detects and shifts workloads** to a backup instance in real time, ensuring minimal disruption.",
              },
              {
                question: "Is security included in high-availability SAP solutions?",
                answer:
                  "Yes! Our **end-to-end security** includes encryption, firewall protection, and **compliance-driven access control**.",
              },
              {
                question: "Can this work in hybrid or multi-cloud environments?",
                answer:
                  "Absolutely. Our SAP high-availability solutions **work seamlessly across hybrid, on-premises, and cloud environments**.",
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
            Ensure 99.99% Uptime for Your SAP Systems
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deploy a robust, failover-ready SAP environment with **zero downtime and maximum resilience**.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Get a Free Assessment
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Schedule a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default HighAvailabilitySAP;