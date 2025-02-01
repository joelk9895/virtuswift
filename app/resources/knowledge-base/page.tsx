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
  Database,
  Truck,
  FileText,
  BarChart3,
  Lightbulb,
  Globe,
  Layers,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-yellow-50 to-yellow-100",
  feature: "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const KnowledgeBase = () => {
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
            SAP, Cloud, and Logistics Knowledge Base
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Your ultimate resource hub** for **SAP, cloud computing, and logistics**. Stay updated with expert insights, best practices, and cutting-edge trends.
          </p>
          <p className="text-gray-600">
            Explore in-depth articles, technical guides, and exclusive resources to **enhance operational efficiency and streamline business processes.**
          </p>
        </motion.section>

        {/* Why Choose Our Knowledge Base? */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Knowledge Base?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Comprehensive SAP Insights",
                content: "Stay ahead with the latest **SAP updates, ERP solutions, and digital transformation strategies.**",
                style: cardStyles.primary,
                icon: <Database className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Cloud Mastery",
                content: "Learn how to **leverage cloud computing** to optimize business operations and drive innovation.",
                style: cardStyles.secondary,
                icon: <Cloud className="w-8 h-8 text-yellow-600 mb-4" />,
              },
              {
                title: "Logistics & Supply Chain",
                content: "Enhance **supply chain efficiency** with expert knowledge in logistics, automation, and best practices.",
                style: cardStyles.primary,
                icon: <Truck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Exclusive Whitepapers",
                content: "Access **research-backed whitepapers** that provide deep insights into **emerging tech trends.**",
                style: cardStyles.secondary,
                icon: <FileText className="w-8 h-8 text-yellow-600 mb-4" />,
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
            Key Features of Our Knowledge Base
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time Analytics",
                content: "**Access industry analytics** to make data-driven business decisions.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Expert Thought Leadership",
                content: "Insights from **industry veterans and technology leaders.**",
                icon: <Lightbulb className="w-8 h-8 text-yellow-600 mb-4" />,
              },
              {
                title: "Cloud & SAP Integration",
                content: "Learn **how to seamlessly integrate SAP with cloud platforms.**",
                icon: <Layers className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Global Knowledge Sharing",
                content: "**Connect with experts worldwide** and share valuable insights.",
                icon: <Globe className="w-8 h-8 text-yellow-600 mb-4" />,
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
                question: "Is the knowledge base free to access?",
                answer: "Yes! Our knowledge base provides **free and premium content** for businesses and professionals.",
              },
              {
                question: "Can I download whitepapers?",
                answer: "Absolutely! Register to **download exclusive whitepapers and research reports.**",
              },
              {
                question: "Who contributes to the knowledge base?",
                answer: "Industry leaders, SAP consultants, cloud engineers, and logistics experts share their insights.",
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
            Access the Knowledge Base Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock expert insights, **stay informed, and gain a competitive edge** in SAP, cloud, and logistics.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;