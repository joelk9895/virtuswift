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
import { Shield, Eye, BarChart3, Cpu, Lock, Server, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-orange-50 to-orange-100",
  secondary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  feature:
    "bg-white hover:bg-orange-50 hover:shadow-xl transition-all duration-300",
};

const AIFraudDetection = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <MegaMenu />
      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-16">
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            AI-Powered Fraud Detection Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stop fraud before it happens. Detect, analyze, and prevent
            fraudulent activities in real-time with advanced AI-driven detection
            tools.
          </p>
          <p className="text-gray-600">
            Leverage cutting-edge machine learning algorithms, pattern
            recognition, and predictive analytics to safeguard your business.
          </p>
        </motion.section>

        {/* Why Choose Our AI Fraud Detection? */}
        <motion.section className="mt-20 space-y-12" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our AI Fraud Detection Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time Threat Detection",
                content:
                  "AI-driven real-time alerts and anomaly detection to stop fraud instantly.",
                style: cardStyles.primary,
                icon: <Eye className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Automated Fraud Prevention",
                content:
                  "Predict, block, and respond to threats with machine learning automation.",
                style: cardStyles.secondary,
                icon: <Cpu className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Enterprise-Grade Security",
                content:
                  "Secure sensitive transactions with advanced AI encryption models.",
                style: cardStyles.primary,
                icon: <Lock className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable Global Protection",
                content:
                  "AI adapts to evolving fraud tactics across multiple geographies.",
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
            Key Features of Our AI Fraud Detection System
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Machine Learning Algorithms",
                content:
                  "AI-powered learning that adapts to new fraud patterns in real-time.",
                icon: <Cpu className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Transaction Monitoring",
                content:
                  "Continuous monitoring of financial transactions for suspicious activity.",
                icon: <Shield className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Risk Scoring & Behavioral Analysis",
                content:
                  "Identify high-risk transactions with predictive risk assessment.",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless API Integration",
                content:
                  "Integrate effortlessly with banking, fintech, and e-commerce platforms.",
                icon: <Server className="w-8 h-8 text-green-600 mb-4" />,
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
          className="mt-20 space-y-12 max-w-3xl mx-auto"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How does AI fraud detection work?",
                answer:
                  "AI detects fraud by analyzing transaction patterns, identifying anomalies, and predicting risks in real-time.",
              },
              {
                question:
                  "Can your system integrate with my existing platform?",
                answer:
                  "Yes! Our API seamlessly integrates with banking, e-commerce, and fintech systems.",
              },
              {
                question: "Is the system customizable for my business?",
                answer:
                  "Absolutely! Our AI models can be tailored to meet your industry-specific fraud detection needs.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg mb-4 border border-slate-200"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-slate-800 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-20 text-center space-y-8 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-2xl p-12 shadow-lg max-w-4xl mx-auto"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Stop Fraud Before It Happens
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Strengthen your fraud defenses with cutting-edge AI-powered
            solutions. Protect your transactions, customers, and business today.
          </p>
          <div>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default AIFraudDetection;
