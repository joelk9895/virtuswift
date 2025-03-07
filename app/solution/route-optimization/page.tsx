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
  MapPin,
  Truck,
  Timer,
  CheckCircle,
  Globe,
  BarChart3,
  Shield,
  Rocket,
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

const RouteOptimization = () => {
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
            Route Optimization & Delivery Tracking
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Deliver faster, smarter, and more cost-effectively** with cutting-edge route optimization and real-time tracking solutions.
          </p>
          <p className="text-gray-600">
            Transform your logistics with AI-driven precision, intelligent dispatching, and **unmatched delivery visibility.**
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Route Optimization & Tracking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lightning-Fast Deliveries",
                content:
                  "AI-powered route optimization **minimizes delays** and gets your deliveries there faster.",
                style: cardStyles.primary,
                icon: <Rocket className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Live GPS Tracking",
                content:
                  "Monitor shipments in real time with **pinpoint accuracy and instant status updates.**",
                style: cardStyles.secondary,
                icon: <Globe className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Maximize Efficiency",
                content:
                  "Reduce mileage, fuel costs, and idle time with **intelligent auto-dispatching.**",
                style: cardStyles.primary,
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Security & Compliance",
                content:
                  "Advanced tracking and security alerts keep your fleet and cargo **safe and compliant.**",
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
                title: "Smart Route Planning",
                content: "Automatically select the **fastest, most efficient** routes.",
                icon: <MapPin className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Predictive ETAs",
                content: "**AI-driven analytics** for hyper-accurate delivery times.",
                icon: <Timer className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Proof of Delivery",
                content:
                  "Capture digital signatures, photos, and **real-time confirmation.**",
                icon: <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Fleet Optimization",
                content: "Monitor vehicle health, fuel usage, and **driver performance.**",
                icon: <Truck className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How does real-time tracking improve my logistics?",
                answer:
                  "Live tracking gives full visibility into delivery status, reducing delays and **boosting customer satisfaction.**",
              },
              {
                question: "Can your system handle large fleets?",
                answer:
                  "Yes! Our **scalable** platform supports businesses of all sizes, from small couriers to enterprise logistics networks.",
              },
              {
                question: "How much can I save with route optimization?",
                answer:
                  "Businesses report up to **20% reduction in fuel costs** and **30% faster deliveries** using our smart routing.",
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
            Get Ahead with Smarter Logistics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Cut costs, speed up deliveries, and gain full visibility** over your logistics.
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

export default RouteOptimization;