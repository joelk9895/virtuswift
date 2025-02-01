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
  TrendingUp,
  RefreshCw,
  BarChart3,
  Layers,
  AlertTriangle,
  Clock,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature:
    "bg-gradient-to-br from-white to-indigo-50 hover:shadow-lg transition-all duration-300",
};

const PredictiveInventoryManagement = () => {
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
            Predictive Inventory Management Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Eliminate stockouts, cut costs, and optimize inventory levels**
            with AI-powered predictive insights.
          </p>
          <p className="text-gray-600">
            Stay ahead of demand with real-time data analytics and automation
            that **enhances supply chain efficiency**.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Predictive Inventory Management?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Powered Forecasting",
                content:
                  "Leverage **machine learning algorithms** to anticipate demand fluctuations with pinpoint accuracy.",
                style: cardStyles.primary,
                icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Reduce Overstocking & Waste",
                content:
                  "Automatically optimize stock levels to **reduce excess inventory and free up capital**.",
                style: cardStyles.secondary,
                icon: <Package className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Real-Time Inventory Tracking",
                content:
                  "Monitor stock across multiple locations with **instant updates and seamless visibility.**",
                style: cardStyles.primary,
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Proactive Supply Chain Alerts",
                content:
                  "Get **early warnings** on low stock, delivery delays, and potential supply chain disruptions.",
                style: cardStyles.secondary,
                icon: <AlertTriangle className="w-8 h-8 text-green-600 mb-4" />,
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
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Replenishment",
                content:
                  "Restock at the **right time, every time** with intelligent automation.",
                icon: <RefreshCw className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Multi-Location Sync",
                content:
                  "**Centralized inventory** for warehouses, stores, and fulfillment centers.",
                icon: <Layers className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data-Driven Decision Making",
                content:
                  "Gain actionable insights to **increase revenue and improve efficiency.**",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Optimized Order Timing",
                content:
                  "AI-powered scheduling ensures **just-in-time inventory management.**",
                icon: <Clock className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How does predictive inventory improve efficiency?",
                answer:
                  "It eliminates stock shortages and excess inventory, ensuring you always have **the right stock at the right time.**",
              },
              {
                question: "Can I integrate this with my existing systems?",
                answer:
                  "Yes! Our solution integrates with **ERP, POS, and eCommerce platforms** for seamless functionality.",
              },
              {
                question: "What industries benefit from predictive inventory?",
                answer:
                  "Retail, eCommerce, manufacturing, and logistics all see **huge efficiency gains** with AI-driven inventory control.",
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

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Take Control of Your Inventory Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Boost profitability, reduce waste, and optimize stock levels**
            with AI-powered inventory management.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default PredictiveInventoryManagement;
