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
  Server,
  Activity,
  AlertTriangle,
  Shield,
  Globe,
  Clock,
  Cpu,
  CheckCircle,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature:
    "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const ProactiveMonitoring = () => {
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
            Proactive Monitoring for IT Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure maximum uptime, prevent disruptions, and optimize performance
            with our advanced proactive IT monitoring solutions.
          </p>
          <p className="text-gray-600">
            Detect and resolve issues before they impact operations with
            real-time analytics, AI-driven insights, and automated alerts.
          </p>
        </motion.section>

        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Proactive IT Monitoring?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time Monitoring",
                content:
                  "Gain instant visibility into your IT infrastructure with live dashboards and performance tracking.",
                style: cardStyles.primary,
                icon: <Activity className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Early Threat Detection",
                content:
                  "AI-powered alerts help prevent system failures and security breaches before they occur.",
                style: cardStyles.secondary,
                icon: <AlertTriangle className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Automated Issue Resolution",
                content:
                  "Reduce downtime with automated remediation for common IT issues.",
                style: cardStyles.primary,
                icon: <Server className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable & Secure",
                content:
                  "Monitor cloud, on-premise, and hybrid environments with enterprise-grade security.",
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

        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "24/7 System Health Checks",
                content:
                  "Continuous performance tracking ensures optimal system reliability.",
                icon: <Clock className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Predictive Analytics",
                content:
                  "AI-driven insights forecast potential issues before they disrupt operations.",
                icon: <Cpu className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Custom Alerts & Reports",
                content:
                  "Receive personalized alerts and detailed reports for informed decision-making.",
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Global Infrastructure Support",
                content:
                  "Monitor distributed IT environments across multiple locations.",
                icon: <Globe className="w-8 h-8 text-blue-600 mb-4" />,
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
                question: "How does proactive monitoring prevent downtime?",
                answer:
                  "By continuously analyzing system performance and predicting failures, proactive monitoring helps prevent downtime before it happens.",
              },
              {
                question: "What platforms and environments do you support?",
                answer:
                  "We monitor on-premise servers, cloud environments, hybrid infrastructures, and multi-cloud solutions.",
              },
              {
                question: "Can I customize monitoring alerts?",
                answer:
                  "Yes, our solution allows you to set up customized alerts based on specific metrics and thresholds.",
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

        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Enhance IT Reliability with Proactive Monitoring
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimize performance, minimize risks, and ensure seamless IT
            operations with our advanced monitoring solutions.
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

export default ProactiveMonitoring;
