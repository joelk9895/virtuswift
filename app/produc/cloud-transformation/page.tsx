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
  Boxes,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Banknote,
  Lock,
  Globe,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm",
  secondary: "bg-gradient-to-br from-orange-50/80 to-orange-100/80 backdrop-blur-sm",
  feature: "bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-sm hover:shadow-xl hover:scale-102 transition-all duration-300",
};

const CloudTransformationSolutions = () => {
  return (
    <div className="min-w-screen bg-gradient-to-br from-slate-50 to-white flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-[80%] lg:w-[70%] xl:w-[60%] items-center px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Hero Section */}
        <motion.section
          className="text-center space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight">
            Cloud Transformation Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock new possibilities with game-changing cloud transformation solutions. Transition seamlessly to the cloud to achieve unmatched agility, scalability, and resilience.
          </p>
          <p className="text-gray-600">
            Empower your organization to thrive in a digital-first world with innovative solutions tailored to your business needs.
          </p>
        </motion.section>

        {/* Why Choose Cloud Transformation Solutions */}
        <motion.section className="space-y-10 w-full" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Cloud Transformation Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accelerate Innovation",
                content:
                  "Transform your business processes and deliver services faster with next-level agility and streamlined workflows.",
                style: cardStyles.primary,
                icon: (
                  <Rocket
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Optimize Costs",
                content:
                  "Our solutions are designed to help you leverage cloud technology cost-effectively, ensuring value for every investment.",
                style: cardStyles.secondary,
                icon: (
                  <Banknote
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Strengthen Security",
                content:
                  "Utilize the latest in **enterprise-grade protection** to secure your data and maintain trust in an evolving cyber landscape.",
                style: cardStyles.primary,
                icon: (
                  <Lock
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Global Scalability",
                content:
                  "Expand with ease using cloud infrastructure that scales with your business growth while ensuring reliability.",
                style: cardStyles.secondary,
                icon: (
                  <Globe
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
        <motion.section className="space-y-10 w-full" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features of Our Cloud Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Smart Deployment",
                content: "Launch cloud solutions quickly with zero disruption.",
                icon: <Boxes className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Resilience Built-In",
                content: "Ensure business continuity with high-availability setups.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Flexible Pricing",
                content:
                  "Pay only for what you use and scale up or down dynamically.",
                icon: <CircleDollarSign className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Data Analytics",
                content: "Gain actionable insights with real-time monitoring tools.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="space-y-4 w-full max-w-3xl mx-auto"
          >
            {[
              {
                question: "How do you ensure a seamless migration?",
                answer:
                  "We utilize advanced tools and proven methodologies for risk-free transitions, complete with ongoing support and monitoring.",
              },
              {
                question: "Is data security a priority?",
                answer:
                  "Yes, we use enterprise-grade encryption, compliance protocols, and robust firewalls to safeguard your sensitive data.",
              },
              {
                question: "What industries do you support?",
                answer:
                  "Our cloud solutions cater to a wide array of industries, including finance, healthcare, manufacturing, and more.",
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white/90 to-indigo-50/90 rounded-2xl p-12 shadow-xl backdrop-blur-sm w-full"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Transform Your Business Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accelerate your business growth with cloud solutions built for success. Let’s shape the future together.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Contact Us
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default CloudTransformationSolutions;