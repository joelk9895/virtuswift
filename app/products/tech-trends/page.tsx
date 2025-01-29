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
  Brain,
  Zap,
  ShieldCheck,
  BarChart3,
  Rocket,
  TrendingUp,
  Layers,
  Globe,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature: "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const AIEmergingTechSAP = () => {
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
            AI & Emerging Tech Trends for SAP
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with **cutting-edge AI and emerging technology innovations** reshaping **SAP-driven enterprises.**
          </p>
          <p className="text-gray-600">
            Leverage **intelligent automation, data-driven insights, and AI-powered efficiencies** to drive transformation in your SAP ecosystem.
          </p>
        </motion.section>

        {/* Why AI & Emerging Tech for SAP? */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Embrace AI & Emerging Tech for SAP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Driven Insights",
                content: "Harness **machine learning** to predict trends, optimize operations, and enhance decision-making.",
                style: cardStyles.primary,
                icon: <Brain className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Intelligent Automation",
                content: "Streamline workflows with **AI-powered automation** for enhanced efficiency and productivity.",
                style: cardStyles.secondary,
                icon: <Zap className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Robust Cybersecurity",
                content: "**AI-driven security** ensures SAP environments remain protected against evolving threats.",
                style: cardStyles.primary,
                icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Global Scalability",
                content: "Leverage AI to **scale SAP solutions** dynamically across global markets.",
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
            Key Features of AI & Emerging Tech for SAP
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Predictive Analytics",
                content: "**AI-powered forecasting** for smarter business decisions.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "AI-Powered Chatbots",
                content: "**Revolutionize customer interactions** with AI-driven virtual assistants.",
                icon: <Rocket className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Edge Computing",
                content: "**Faster data processing** with AI at the edge for SAP applications.",
                icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Blockchain Integration",
                content: "**Enhance transparency and security** in SAP transactions.",
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
                question: "How does AI improve SAP systems?",
                answer: "AI **enhances automation, boosts data processing efficiency, and provides predictive analytics** to optimize SAP workflows.",
              },
              {
                question: "Is AI integration complex?",
                answer: "With the right strategy, **AI seamlessly integrates with SAP environments** to deliver measurable benefits.",
              },
              {
                question: "What industries benefit from AI in SAP?",
                answer: "**Manufacturing, finance, healthcare, logistics, and retail** all leverage AI for enhanced SAP performance.",
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
            Unlock the Future of SAP with AI & Emerging Tech
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Adopt next-gen AI solutions today** to drive efficiency, innovation, and business growth.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default AIEmergingTechSAP;