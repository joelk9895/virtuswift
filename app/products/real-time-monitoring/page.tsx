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
  Activity,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Headphones,
  Clock,
  AlertTriangle,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-orange-50 to-orange-100",
  feature:
    "bg-gradient-to-br from-white to-orange-50 hover:shadow-lg transition-all duration-300",
};

const RealTimeMonitoring = () => {
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
            Real-Time Monitoring & Proactive Support
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Maximize Uptime and Performance** with **AI-driven monitoring and proactive support**, ensuring your business runs without disruption.
          </p>
          <p className="text-gray-600">
            Harness **real-time insights** and **intelligent automation** to detect, prevent, and resolve issues **before they impact operations**.
          </p>
        </motion.section>

        {/* Why Choose Real-Time Monitoring & Proactive Support */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Monitoring & Support Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time System Monitoring",
                content:
                  "Gain full visibility with **24/7 AI-powered monitoring**, detecting anomalies before they cause disruptions.",
                style: cardStyles.primary,
                icon: <Activity className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Proactive Threat Detection",
                content:
                  "Prevent downtime with **intelligent issue prediction** and **automated response mechanisms**.",
                style: cardStyles.secondary,
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Cost-Effective Support",
                content:
                  "Reduce operational costs with **predictive analytics** and automated problem resolution strategies.",
                style: cardStyles.primary,
                icon: <CircleDollarSign className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "24/7 Expert Assistance",
                content:
                  "Round-the-clock **live technical support**, ensuring swift resolutions **anytime, anywhere**.",
                style: cardStyles.secondary,
                icon: <Headphones className="w-8 h-8 text-orange-600 mb-4" />,
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
            Key Features of Our Proactive Monitoring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Incident Detection",
                content: "Instantly detect **potential failures** before they escalate into major issues.",
                icon: <AlertTriangle className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Predictive Analytics",
                content: "AI-powered **trend analysis** helps foresee risks and prevent downtime.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Response Time Optimization",
                content: "**Ultra-fast troubleshooting** backed by real-time monitoring & insights.",
                icon: <Clock className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Scalable Infrastructure Support",
                content: "**Monitor, diagnose, and support** cloud, hybrid, and on-premise setups.",
                icon: <Rocket className="w-8 h-8 text-indigo-600 mb-4" />,
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
                question: "How does real-time monitoring improve performance?",
                answer:
                  "With **continuous tracking, AI-based insights, and proactive alerts**, performance issues are detected before they cause downtime.",
              },
              {
                question: "What industries can benefit from this service?",
                answer:
                  "**Finance, healthcare, retail, IT services, and manufacturing** all benefit from real-time monitoring and rapid issue resolution.",
              },
              {
                question: "How secure is the monitoring platform?",
                answer:
                  "We use **end-to-end encryption, access controls, and continuous threat monitoring** to protect data integrity and security.",
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
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Get Ahead with Real-Time Monitoring
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Prevent downtime, reduce costs, and boost efficiency** with the best-in-class **real-time monitoring & proactive support solutions**.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Request a Demo
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Get Started Now
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default RealTimeMonitoring;