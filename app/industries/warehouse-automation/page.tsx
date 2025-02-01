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
  Package,
  Bot,
  Truck,
  Layers,
  Shield,
  BarChart3,
  Rocket,
  CircuitBoard,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature: "bg-gradient-to-br from-white to-indigo-50 hover:shadow-lg transition-all duration-300",
};

const WarehouseAutomation = () => {
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
            Warehouse Robotics & Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Redefine logistics with AI-powered automation.**  
            Improve speed, accuracy, and efficiency with state-of-the-art **robotics, automated sorting, and smart inventory management.**
          </p>
          <p className="text-gray-600">
            **Maximize operational excellence** with a fully integrated robotic system that accelerates order fulfillment and minimizes errors.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Warehouse Automation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "End-to-End Automation",
                content:
                  "Leverage **AI-driven robotics, conveyor belts, and smart picking systems** to reduce manual labor costs.",
                style: cardStyles.primary,
                icon: <Bot className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Faster Order Fulfillment",
                content:
                  "Accelerate processing with **automated storage and retrieval systems (AS/RS)** for high-speed logistics.",
                style: cardStyles.secondary,
                icon: <Package className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Optimized Inventory Management",
                content:
                  "Implement **real-time tracking and AI-powered analytics** to eliminate stockouts and overstocking.",
                style: cardStyles.primary,
                icon: <Layers className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Secure & Scalable",
                content:
                  "Ensure seamless expansion with **enterprise-grade security and cloud-based control systems.**",
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
                title: "AI-Powered Robotics",
                content: "Smart robotic arms and AGVs automate picking, packing, and sorting with **unparalleled precision.**",
                icon: <CircuitBoard className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless SAP Integration",
                content: "**Integrate effortlessly with SAP EWM and WMS** for real-time warehouse insights.",
                icon: <Rocket className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Automated Freight & Logistics",
                content:
                  "**AI-driven routing and drone-assisted delivery** ensure on-time shipments with optimized routes.",
                icon: <Truck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Predictive Maintenance",
                content: "Reduce downtime with **IoT-enabled sensors** that predict maintenance needs before failures occur.",
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How quickly can we implement warehouse robotics?",
                answer:
                  "Timelines vary based on warehouse size and complexity, but we ensure a **fast-track implementation** with minimal disruption.",
              },
              {
                question: "Can robotics integrate with our existing WMS?",
                answer:
                  "Absolutely! Our systems are **fully compatible with SAP, Oracle, Microsoft Dynamics, and other major WMS platforms.**",
              },
              {
                question: "What industries benefit from warehouse automation?",
                answer:
                  "**E-commerce, retail, pharmaceuticals, automotive, and logistics industries** all see significant efficiency gains from our robotic solutions.",
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
        <motion.section className="text-center space-y-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-12 shadow-lg" {...fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900">
            Automate Your Warehouse & Boost Efficiency
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Scale faster, cut costs, and optimize workflows** with cutting-edge warehouse automation.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Schedule a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default WarehouseAutomation;