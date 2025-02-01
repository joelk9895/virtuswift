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
  Cloud,
  ShieldCheck,
  Zap,
  BarChart3,
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
    "bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300",
};

const SAPCloudMigration = () => {
  return (
    <div className="min-w-screen bg-gray-50 flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-[60%] items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero Section */}
        <motion.section className="text-center space-y-8" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Seamless SAP-to-Cloud Migration
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Transform your business with cloud-powered SAP solutions.** Reduce
            costs, enhance performance, and accelerate digital transformation.
          </p>
          <Button className="bg-blue-600 text-white px-6 py-3 shadow-lg">
            Get a Free Consultation
          </Button>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Why Choose Our SAP Migration?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Downtime Migrations",
                content:
                  "Minimize disruptions with **seamless cutover strategies** for your SAP workloads.",
                style: cardStyles.primary,
                icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Optimized Cloud Performance",
                content:
                  "Leverage **scalable cloud infrastructure** for superior SAP application efficiency.",
                style: cardStyles.secondary,
                icon: <Cloud className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Cost-Effective Solutions",
                content:
                  "**Reduce total cost of ownership (TCO)** with strategic SAP cloud adoption.",
                style: cardStyles.primary,
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
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
                  <CardHeader className="h-1/2 flex flex-col items-center justify-center">
                    {card.icon}
                    <CardTitle className="text-gray-800 font-bold text-center">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 text-center">
                    {card.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Enterprise-Grade Security",
                content:
                  "**End-to-end encryption** ensures data integrity & compliance.",
                icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Lightning-Fast Deployments",
                content:
                  "Cut deployment time in half with **automated cloud provisioning**.",
                icon: <Zap className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "100% Compliance Ready",
                content:
                  "**Ensure compliance** with global regulatory standards.",
                icon: <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Data-Driven Optimization",
                content:
                  "**AI-powered analytics** for real-time SAP performance tuning.",
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
              },
            ].map((feature, index) => (
              <Card key={index} className={cardStyles.feature}>
                <CardHeader className="text-center">
                  {feature.icon}
                  <CardTitle className="font-bold text-gray-800">
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
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="space-y-4 w-full max-w-3xl mx-auto"
          >
            {[
              {
                question: "How long does SAP cloud migration take?",
                answer:
                  "Timelines vary, but our **accelerated migration framework** ensures rapid deployment within weeks.",
              },
              {
                question: "Can I migrate without downtime?",
                answer:
                  "Yes! Our **zero-downtime strategies** ensure seamless cutovers.",
              },
              {
                question: "Which cloud platforms do you support?",
                answer:
                  "We specialize in **AWS, Azure, and Google Cloud** for SAP migrations.",
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

        {/* Call to Action */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Start Your SAP-to-Cloud Journey Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Future-proof your business** with a **seamless SAP migration** to
            the cloud. **Faster, secure, and cost-effective.**
          </p>
          <Button className="bg-blue-600 text-white px-6 py-3 shadow-lg">
            Get a Free Consultation
          </Button>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPCloudMigration;
