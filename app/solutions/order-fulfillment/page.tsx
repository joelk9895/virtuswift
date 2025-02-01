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
  CheckCircle,
  Truck,
  BarChart3,
  Clock,
  RefreshCw,
  TrendingUp,
  Shield,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature: "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const AIEnhancedOrderFulfillment = () => {
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
            AI-Enhanced Order Fulfillment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Accelerate deliveries, reduce costs, and exceed customer expectations** with AI-powered fulfillment solutions.
          </p>
          <p className="text-gray-600">
            Harness the power of automation, data intelligence, and real-time analytics for **seamless, scalable, and ultra-efficient order fulfillment.**
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose AI-Enhanced Order Fulfillment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Faster Order Processing",
                content:
                  "AI-driven automation cuts processing times by **up to 50%**, ensuring lightning-fast fulfillment.",
                style: cardStyles.primary,
                icon: <Truck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Optimized Inventory Allocation",
                content:
                  "Ensure the right products are in the right place at the right time with **predictive stock management.**",
                style: cardStyles.secondary,
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Cost-Effective Logistics",
                content:
                  "Reduce operational costs and **eliminate inefficiencies** with AI-driven route and warehouse optimization.",
                style: cardStyles.primary,
                icon: <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless Integration",
                content:
                  "Connect with existing ERP, WMS, and eCommerce platforms for **end-to-end automation.**",
                style: cardStyles.secondary,
                icon: <RefreshCw className="w-8 h-8 text-green-600 mb-4" />,
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
                title: "Smart Order Routing",
                content: "AI selects the **fastest, most efficient** fulfillment routes.",
                icon: <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Real-Time Order Tracking",
                content: "Live tracking for complete **order visibility and transparency.**",
                icon: <Clock className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Automated Warehouse Picking",
                content:
                  "Reduce human errors and **increase picking efficiency** with AI-powered workflows.",
                icon: <Package className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Enhanced Security & Compliance",
                content: "AI safeguards your data and **ensures industry compliance.**",
                icon: <Shield className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How does AI improve order fulfillment?",
                answer:
                  "AI automates picking, packing, and shipping while optimizing inventory levels, ensuring **faster and cost-efficient order processing.**",
              },
              {
                question: "Can this integrate with my current system?",
                answer:
                  "Yes! Our platform integrates seamlessly with **ERP, WMS, and eCommerce systems** for a smooth workflow.",
              },
              {
                question: "What’s the impact on operational costs?",
                answer:
                  "Clients report a **20-30% reduction in fulfillment costs** through AI-driven efficiency and automation.",
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
            Transform Your Fulfillment Operations Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Deliver faster, reduce costs, and streamline logistics** with AI-powered fulfillment.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Book a Demo
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

export default AIEnhancedOrderFulfillment;