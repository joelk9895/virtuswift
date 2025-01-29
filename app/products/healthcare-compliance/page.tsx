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
  ShieldCheck,
  FileText,
  Lock,
  ClipboardCheck,
  BarChart3,
  Globe,
  Users,
  CheckCircle,
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

const HealthcareCompliance = () => {
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
            Healthcare Compliance Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Ensure regulatory compliance with cutting-edge solutions.**  
            Protect patient data, streamline operations, and stay ahead of evolving healthcare regulations.
          </p>
          <p className="text-gray-600">
            **Stay compliant with HIPAA, GDPR, and other healthcare regulations** with robust automation, real-time tracking, and expert guidance.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Healthcare Compliance Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Regulatory Expertise",
                content: "Stay ahead of industry changes with **real-time compliance updates and expert advisory.**",
                style: cardStyles.primary,
                icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Automated Compliance Audits",
                content: "Eliminate manual errors with **AI-driven audits and compliance reporting.**",
                style: cardStyles.secondary,
                icon: <FileText className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data Security & Encryption",
                content: "Ensure patient confidentiality with **enterprise-grade security measures.**",
                style: cardStyles.primary,
                icon: <Lock className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless Policy Management",
                content: "Manage healthcare policies and ensure staff compliance with **automated workflows.**",
                style: cardStyles.secondary,
                icon: <ClipboardCheck className="w-8 h-8 text-green-600 mb-4" />,
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
                title: "Real-Time Compliance Monitoring",
                content: "Track compliance status across all departments with live dashboards.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Global Standards Adherence",
                content: "Ensure compliance with **HIPAA, GDPR, and other international regulations.**",
                icon: <Globe className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Employee Training & Certification",
                content: "Automate staff compliance training with **custom learning paths and tracking.**",
                icon: <Users className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Incident Reporting & Risk Management",
                content: "Quickly identify and address compliance gaps with **automated alerts.**",
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "What regulations do your solutions support?",
                answer: "We ensure compliance with **HIPAA, GDPR, HITECH, and other healthcare regulations.**",
              },
              {
                question: "How does automation improve compliance?",
                answer: "Automation reduces errors, ensures real-time tracking, and **streamlines policy enforcement.**",
              },
              {
                question: "Can this integrate with my existing systems?",
                answer: "Yes, our solutions integrate seamlessly with **EHRs, CRMs, and compliance management platforms.**",
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
            Ensure Compliance & Protect Patient Data
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Stay ahead of regulatory changes and reduce risk** with our AI-powered compliance solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Get a Free Consultation
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default HealthcareCompliance;