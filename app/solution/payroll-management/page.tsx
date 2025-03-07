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
  Users,
  Wallet,
  BarChart3,
  Shield,
  Rocket,
  CalendarCheck,
  Globe,
  ClipboardCheck,
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

const PayrollWorkforceManagement = () => {
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
            Payroll & Workforce Management
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Simplify payroll, enhance workforce efficiency, and drive business success** with cutting-edge automation.
          </p>
          <p className="text-gray-600">
            Say goodbye to errors, delays, and compliance issues—our all-in-one payroll and workforce management solutions keep your business running smoothly.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Payroll & Workforce Management Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Payroll Processing",
                content:
                  "Eliminate manual errors with **100% accurate payroll calculations and compliance automation.**",
                style: cardStyles.primary,
                icon: <Wallet className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Time & Attendance Tracking",
                content:
                  "Streamline workforce management with **real-time tracking and smart scheduling.**",
                style: cardStyles.secondary,
                icon: <CalendarCheck className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Compliance & Security",
                content:
                  "Stay ahead of **regulations, tax laws, and labor compliance** with built-in safeguards.",
                style: cardStyles.primary,
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable for Global Teams",
                content:
                  "Seamlessly manage payroll for **remote, hybrid, and international employees.**",
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
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "One-Click Payroll",
                content: "**Process salaries, bonuses, and deductions** with a single click.",
                icon: <ClipboardCheck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "AI-Powered Workforce Insights",
                content: "Optimize workforce planning with **real-time analytics and forecasting.**",
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Seamless Integrations",
                content:
                  "Connect with **HR, ERP, and accounting systems** for a unified experience.",
                icon: <Users className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Automated Tax Filing",
                content: "Ensure **100% tax compliance** with built-in automated filing.",
                icon: <Rocket className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "Can your system handle payroll for international employees?",
                answer:
                  "Yes! Our platform supports **multi-currency payroll, tax compliance, and local labor laws worldwide.**",
              },
              {
                question: "How does automation improve workforce management?",
                answer:
                  "AI-driven tools **optimize scheduling, track productivity, and improve efficiency** across teams.",
              },
              {
                question: "What makes your payroll system different?",
                answer:
                  "Our solution **eliminates manual errors, speeds up processing, and ensures compliance**, all in one easy-to-use platform.",
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
            Simplify Payroll & Workforce Management Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Boost efficiency, reduce compliance risks, and empower your workforce** with our advanced payroll and workforce solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Schedule a Demo
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

export default PayrollWorkforceManagement;