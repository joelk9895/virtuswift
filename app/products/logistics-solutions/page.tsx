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
  Globe,
  Plane,
  Package,
  MapPin,
  Shield,
  BarChart3,
  Truck,
  Layers,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-orange-50 to-orange-100",
  feature: "bg-gradient-to-br from-white to-orange-50 hover:shadow-lg transition-all duration-300",
};

const CrossBorderLogistics = () => {
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
            Cross-Border Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Seamless, secure, and efficient international shipping.**  
            Expand your global reach with our cross-border logistics solutions, powered by **real-time tracking, AI-driven compliance, and cost-efficient routing.**
          </p>
          <p className="text-gray-600">
            Optimize global supply chains with advanced **customs clearance, route planning, and automated tracking.**
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Cross-Border Logistics Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Global Connectivity",
                content: "Seamless integration across **200+ countries** and trade zones.",
                style: cardStyles.primary,
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Optimized Routes",
                content: "AI-powered logistics for **cost-effective and timely deliveries.**",
                style: cardStyles.secondary,
                icon: <Plane className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "End-to-End Visibility",
                content: "Real-time tracking for **complete shipment transparency.**",
                style: cardStyles.primary,
                icon: <MapPin className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Regulatory Compliance",
                content: "Automated customs clearance and **import/export documentation.**",
                style: cardStyles.secondary,
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
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
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Driven Freight Management",
                content: "Optimize freight costs with **intelligent load balancing.**",
                icon: <Truck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Automated Customs Processing",
                content: "**Reduce clearance delays** with automated documentation.",
                icon: <Package className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Real-Time Analytics",
                content: "Monitor supply chain health with **advanced analytics.**",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless ERP Integration",
                content: "Connect with **SAP, Oracle, and other global trade platforms.**",
                icon: <Layers className="w-8 h-8 text-orange-600 mb-4" />,
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
                question: "How does your system optimize international shipping?",
                answer: "We use AI-powered route planning and **cost-efficient freight solutions** to ensure on-time, cost-effective deliveries.",
              },
              {
                question: "Can I integrate this with my existing logistics system?",
                answer: "Yes, our platform seamlessly integrates with **ERP, TMS, and warehouse management systems.**",
              },
              {
                question: "Do you offer customs clearance assistance?",
                answer: "Absolutely! Our system automates **customs filing, tariff calculations, and duty payments.**",
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
            Expand Your Global Reach Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Optimize your international supply chain with cutting-edge logistics technology.**  
            **Faster, smarter, and more efficient cross-border shipping starts here.**
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Get a Free Consultation
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default CrossBorderLogistics;