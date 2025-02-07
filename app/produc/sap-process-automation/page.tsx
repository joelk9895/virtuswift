"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
  Boxes,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Globe,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const cardStyles = {
  primary:
    "bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm",
  secondary:
    "bg-gradient-to-br from-orange-50/80 to-orange-100/80 backdrop-blur-sm",
  feature:
    "bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300",
};

const SAPBusinessProcessAutomation = () => {
  return (
    <div className="min-w-screen bg-gradient-to-br from-slate-50 to-white flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Business Process Automation for SAP
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock your organization&apos;s full potential with cutting-edge
            Business Process Automation (BPA) tools for SAP. Enhance efficiency,
            minimize errors, and drive growth with seamless automation
            solutions.
          </p>
          <p className="text-gray-600">
            Let our automation solutions take the burden off manual processes,
            enabling your teams to focus on value-driven tasks.
          </p>
        </motion.section>

        {/* Why Choose BPA for SAP */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our BPA Solutions for SAP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Streamlined Workflows",
                content:
                  "Automate repetitive processes and simplify operations for maximum efficiency.",
                style: cardStyles.primary,
                icon: (
                  <Boxes
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Boost Productivity",
                content:
                  "Empower your team to focus on strategic tasks, increasing overall productivity.",
                style: cardStyles.secondary,
                icon: (
                  <Rocket
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Data-Driven Accuracy",
                content:
                  "Leverage real-time insights and eliminate manual errors for improved decision-making.",
                style: cardStyles.primary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost Optimization",
                content:
                  "Achieve more with less by automating tasks and streamlining resource utilization.",
                style: cardStyles.secondary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
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
            Key Features of Our BPA Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "End-to-End Integration",
                content:
                  "Connect SAP modules effortlessly for unified, automated processes.",
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Robust Analytics",
                content:
                  "Generate actionable insights with real-time data visualization and reporting.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "AI-Enhanced Workflow",
                content:
                  "Optimize processes with AI-powered recommendations and predictions.",
                icon: <Rocket className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Compliance Simplified",
                content:
                  "Automate compliance tracking and reporting to ensure regulatory adherence.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
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
                question: "How does BPA improve SAP operations?",
                answer:
                  "Our BPA solution streamlines SAP operations by automating repetitive tasks, reducing manual errors by up to 95%, and improving system efficiency across all SAP modules. This leads to faster processing times and improved data accuracy.",
              },
              {
                question:
                  "Can BPA solutions be customized for my organization?",
                answer:
                  "Absolutely! Our BPA tools are built with flexibility in mind. We offer comprehensive customization options to align with your specific business processes, industry requirements, and organizational workflow.",
              },
              {
                question: "What kind of support is available?",
                answer:
                  "We provide 24/7 dedicated support through multiple channels. This includes technical assistance, implementation guidance, training sessions, and regular system optimization recommendations.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-lg font-semibold px-6 hover:bg-slate-50/50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-indigo-50/50 rounded-2xl p-8 md:p-12 shadow-lg w-full"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Transform Your Business Processes?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards enhanced efficiency and error-free
            operations with our cutting-edge BPA solutions.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPBusinessProcessAutomation;
