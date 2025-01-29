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
  Globe,
  Cloud,
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

const DataCenterTransformation = () => {
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
            End-to-End Data Center Transformation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Future-proof your IT landscape with a **seamless, high-performance, and cost-efficient data center transformation strategy** that aligns with your business needs.
          </p>
          <p className="text-gray-600">
            Embrace **cloud-first infrastructure**, maximize uptime, and enhance **security, automation, and efficiency** while reducing operational costs.
          </p>
        </motion.section>

        {/* Why Choose Data Center Transformation */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Data Center Transformation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Optimized Performance",
                content:
                  "Leverage cutting-edge technologies to enhance processing power, speed, and data handling efficiency.",
                style: cardStyles.primary,
                icon: <Server className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Cost-Efficient Scaling",
                content:
                  "Lower CapEx and OpEx with flexible, pay-as-you-go models and resource optimization.",
                style: cardStyles.secondary,
                icon: <CircleDollarSign className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Unbreakable Security",
                content:
                  "Advanced threat protection, compliance management, and zero-trust security models.",
                style: cardStyles.primary,
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Cloud & Hybrid Flexibility",
                content:
                  "Seamlessly migrate workloads between **on-premise, cloud, and hybrid** environments.",
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
            Key Features of Data Center Transformation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Driven Automation",
                content:
                  "Automate operations, enhance monitoring, and ensure predictive maintenance with AI-driven insights.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Readiness",
                content:
                  "Seamlessly transition to **AWS, Azure, or Google Cloud** with real-time workload balancing.",
                icon: <Cloud className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "24/7 Uptime & Redundancy",
                content:
                  "Maintain business continuity with built-in **disaster recovery, redundancy, and failover systems**.",
                icon: <Rocket className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Real-Time Security & Compliance",
                content:
                  "Ensure end-to-end encryption, compliance with global regulations, and cyber resilience.",
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
                question: "How long does a data center transformation take?",
                answer:
                  "Project duration depends on the **complexity of workloads** and infrastructure, but we ensure a **step-by-step, non-disruptive transition**.",
              },
              {
                question: "Can I integrate legacy systems with new cloud infrastructure?",
                answer:
                  "Yes, our **hybrid and multi-cloud** approach allows for seamless integration of **legacy and modern systems**.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide **24/7 monitoring, proactive maintenance, and a dedicated support team** for ongoing operations.",
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
            Future-Proof Your IT with Data Center Transformation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your business with **next-generation IT infrastructure** that is scalable, secure, and built for innovation.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Request a Consultation
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default DataCenterTransformation;