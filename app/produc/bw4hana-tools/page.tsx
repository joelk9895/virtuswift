"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-none",
  secondary: "bg-gradient-to-br from-orange-50 to-orange-100 border-none",
  feature:
    "bg-gradient-to-br from-white to-slate-50 border-none hover:shadow-xl transition-all duration-300",
};

const HANATransformationTool = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-w-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center">
      <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <MegaMenu />
      </div>

      {/* Hero Section with Enhanced Background */}
      <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-800 min-h-[90vh] flex items-center justify-center">
        <motion.div
          className="text-center space-y-8 px-4 py-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
            style={{ opacity }}
          >
            4HANA Transformation Tool
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your SAP operations with the ultimate 4HANA
            Transformation Tool
          </p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-6 text-lg rounded-full">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Why Choose Section with Improved Cards */}
        <motion.section
          className="space-y-16 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our 4HANA Transformation Tool?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Faster Deployments",
                content:
                  "Accelerate migrations with pre-built configurations, reducing downtime and disruptions.",
                style: cardStyles.primary,
                icon: (
                  <Rocket
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enhanced Scalability",
                content:
                  "Scale effortlessly with solutions designed to adapt to growing enterprise needs.",
                style: cardStyles.secondary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Data-Driven Optimization",
                content:
                  "Leverage intelligent insights to optimize performance and streamline operations.",
                style: cardStyles.primary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost Efficiency",
                content:
                  "Maximize ROI with optimized resource management and transparent pricing models.",
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
        <motion.section className="space-y-16 w-full">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pre-Migration Insights",
                content:
                  "Gain a deep understanding of your current setup and future needs with AI-powered assessments.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Seamless Integrations",
                content:
                  "Connect effortlessly to existing SAP modules and third-party tools with robust integrations.",
                icon: <Boxes className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "High Availability",
                content:
                  "Enjoy consistent performance with built-in redundancy and failover mechanisms.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Customizable Workflows",
                content:
                  "Tailor processes to match specific enterprise needs with an intuitive, flexible interface.",
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
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
        <motion.section
          className="space-y-12 w-full bg-gradient-to-br from-slate-50 to-white p-12 rounded-3xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
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
                question:
                  "How does this tool accelerate the migration process?",
                answer:
                  "Our pre-configured templates and automated workflows reduce manual effort, ensuring faster migrations.",
              },
              {
                question: "Can it support hybrid cloud environments?",
                answer:
                  "Absolutely. The tool is optimized for both on-premises and cloud integrations to suit hybrid environments.",
              },
              {
                question: "Is there support for data security?",
                answer:
                  "Yes, enterprise-grade security protocols are embedded to protect your sensitive data during and after migration.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                className="border-gray-200 shadow-md"
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-lg font-semibold px-4 hover:no-underline hover:bg-slate-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Modern CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-16 shadow-xl w-full text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join the next generation of digital enterprises with our
            cutting-edge HANA transformation solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-6 text-lg rounded-full">
              Contact US
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default HANATransformationTool;
