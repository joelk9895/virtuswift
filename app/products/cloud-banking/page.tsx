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
  Lock,
  Bank,
  Shield,
  BarChart3,
  Cloud,
  CircleDollarSign,
  Server,
  Globe,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature: "bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition-all duration-300",
};

const SecureCloudBanking = () => {
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
            Secure Cloud Solutions for Banking & Finance
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Revolutionize your financial operations** with state-of-the-art, secure cloud solutions.  
            Ensure **compliance, security, and scalability** while enhancing customer experience.
          </p>
          <p className="text-gray-600">
            Power your financial institution with **AI-driven fraud detection, automated compliance, and seamless digital transformation.**
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Secure Cloud Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Advanced Security",
                content: "Enterprise-grade **encryption and AI-powered threat detection**.",
                style: cardStyles.primary,
                icon: <Lock className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Regulatory Compliance",
                content: "Built-in **GDPR, PCI DSS, and financial industry compliance**.",
                style: cardStyles.secondary,
                icon: <Shield className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Cost Efficiency",
                content: "**Reduce IT overhead** with scalable cloud infrastructure.",
                style: cardStyles.primary,
                icon: <CircleDollarSign className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Scalability",
                content: "Expand operations with **high-performance cloud networks**.",
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
                title: "AI-Powered Fraud Detection",
                content: "**Identify and prevent** fraudulent transactions in real-time.",
                icon: <Bank className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Secure Cloud Infrastructure",
                content: "**Ensure data integrity** with highly secure cloud hosting.",
                icon: <Cloud className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Automated Compliance Monitoring",
                content: "Real-time **audit logs and reporting for regulatory needs**.",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless Core Banking Integration",
                content: "**Integrate effortlessly** with existing banking platforms.",
                icon: <Server className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How secure is cloud banking?",
                answer: "We use **bank-grade encryption, multi-factor authentication, and AI-driven threat detection** to ensure maximum security.",
              },
              {
                question: "Can we integrate with existing banking systems?",
                answer: "Yes! Our solutions support **core banking integration with leading financial platforms like Oracle, SAP, and Finastra.**",
              },
              {
                question: "Do you provide disaster recovery options?",
                answer: "Yes! We offer **geo-redundant backups and failover strategies** to keep your operations running 24/7.",
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
            Transform Your Financial Institution Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Future-proof your banking infrastructure** with cutting-edge, secure cloud solutions.  
            **Improve efficiency, security, and customer experience today.**
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

export default SecureCloudBanking;