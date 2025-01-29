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
  Truck,
  MapPin,
  BarChart3,
  AlertTriangle,
  Shield,
  Layers,
  Clock,
  Compass,
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

const FleetManagement = () => {
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
            Fleet Management & Tracking Systems
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Optimize fleet operations, enhance efficiency, and track your vehicles in real-time.**  
            Revolutionize logistics with **AI-driven fleet management.**
          </p>
          <p className="text-gray-600">
            Stay ahead of the competition with **cutting-edge GPS tracking, predictive analytics, and automated fleet insights.**
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Fleet Management Solution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time GPS Tracking",
                content: "Track your fleet **24/7** with precision GPS monitoring.",
                style: cardStyles.primary,
                icon: <MapPin className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Route Optimization",
                content: "AI-driven insights for **faster, cost-efficient deliveries.**",
                style: cardStyles.secondary,
                icon: <Compass className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Predictive Maintenance",
                content: "Reduce downtime with **automated vehicle health monitoring.**",
                style: cardStyles.primary,
                icon: <Clock className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Risk & Compliance",
                content: "Stay **regulatory compliant** with automated reporting.",
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
                title: "Live Fleet Monitoring",
                content: "Get real-time updates on vehicle **location, speed, and status.**",
                icon: <Truck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Incident Alerts",
                content: "Instant notifications for **accidents, delays, and route changes.**",
                icon: <AlertTriangle className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data-Driven Insights",
                content: "**Optimize fuel consumption** and reduce operational costs.",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless ERP Integration",
                content: "Connect with **SAP, Oracle, and other logistics platforms.**",
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
                question: "How does real-time tracking improve fleet efficiency?",
                answer: "It provides **live updates** on routes, vehicle conditions, and driver behavior to optimize performance.",
              },
              {
                question: "Can I integrate this with my existing fleet system?",
                answer: "Yes, our solution integrates with **leading ERP and logistics management platforms.**",
              },
              {
                question: "How secure is the fleet tracking system?",
                answer: "We employ **end-to-end encryption and multi-layer security** to protect your fleet data.",
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
            Upgrade Your Fleet Operations Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Enhance efficiency, reduce costs, and ensure compliance** with AI-powered fleet tracking.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default FleetManagement;