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
  Cpu,
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

const CloudCostOptimization = () => {
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
            AI-Driven Cloud Cost Optimization
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Cut Cloud Costs, Not Performance.** Maximize your cloud investment with AI-powered cost management, predictive analytics, and **smart automation**.
          </p>
          <p className="text-gray-600">
            Unlock **efficiency, savings, and performance** with an intelligent optimization strategy built for AWS, Azure, and Google Cloud.
          </p>
        </motion.section>

        {/* Why Choose AI-Driven Cloud Cost Optimization */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Optimize with AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Maximize Cost Savings",
                content:
                  "Eliminate wasteful cloud spend and **reduce costs by up to 40%** with real-time AI-driven insights.",
                style: cardStyles.primary,
                icon: <CircleDollarSign className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Predictive Scaling",
                content:
                  "Optimize resource allocation with **AI-powered workload forecasting** to ensure you never overpay.",
                style: cardStyles.secondary,
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Security & Compliance",
                content:
                  "Keep your **cloud infrastructure compliant and secure** while optimizing cost efficiencies.",
                style: cardStyles.primary,
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Ready",
                content:
                  "Seamlessly manage costs across **AWS, Azure, and Google Cloud** from a single AI-powered platform.",
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
            Key Features of AI Cloud Cost Optimization
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Cost Management",
                content:
                  "AI continuously analyzes usage to recommend optimal configurations, ensuring zero over-provisioning.",
                icon: <Cpu className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Real-Time Usage Insights",
                content:
                  "Track your cloud expenses in real-time and prevent cost overruns before they happen.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Smart Workload Scheduling",
                content:
                  "Dynamically allocate cloud resources based on real-time demand, **saving money without performance trade-offs**.",
                icon: <Rocket className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Cost Control",
                content:
                  "Get a **unified dashboard** to compare cloud costs across multiple providers and optimize spending efficiently.",
                icon: <Cloud className="w-8 h-8 text-indigo-600 mb-4" />,
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
                question: "How much can AI help reduce cloud costs?",
                answer:
                  "Our AI-driven system has **helped enterprises save up to 40%** on their cloud spend through intelligent optimizations.",
              },
              {
                question: "Can this solution work across multiple cloud platforms?",
                answer:
                  "Yes, our solution is fully optimized for **AWS, Azure, and Google Cloud**, ensuring unified cost control.",
              },
              {
                question: "Will cost optimization affect my cloud performance?",
                answer:
                  "No! AI dynamically manages workloads to **reduce costs without compromising performance or availability**.",
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
            Start Saving on Cloud Costs Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimize your cloud strategy and maximize ROI with **AI-driven cost reduction solutions** tailored for your business.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Get a Free Cost Assessment
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

export default CloudCostOptimization;