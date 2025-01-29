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
  Briefcase,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  Network,
  UserCheck,
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

const OffshoreOnsiteTeams = () => {
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
            Offshore and On-Site Teams
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Expand your workforce seamlessly.** Whether you need an agile offshore team or expert on-site professionals, we provide tailored staffing solutions for businesses of all sizes.
          </p>
          <p className="text-gray-600">
            Gain a **competitive edge** with scalable, cost-efficient, and high-performing talent—anywhere in the world.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Offshore & On-Site Teams?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Global Talent Pool",
                content:
                  "Access **top-tier talent worldwide** with flexible offshore and on-site options.",
                style: cardStyles.primary,
                icon: <Globe className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable Workforce",
                content:
                  "Easily **scale up or down** with contract, project-based, or permanent teams.",
                style: cardStyles.secondary,
                icon: <Users className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Cost-Effective Hiring",
                content:
                  "Reduce overhead costs by leveraging **offshore development teams.**",
                style: cardStyles.primary,
                icon: <Briefcase className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless Integration",
                content:
                  "Our teams **work in sync with your in-house staff** for optimal performance.",
                style: cardStyles.secondary,
                icon: <Network className="w-8 h-8 text-green-600 mb-4" />,
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
                title: "24/7 Productivity",
                content: "**Around-the-clock efficiency** with globally distributed teams.",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Dedicated Team Model",
                content: "Hire **full-time dedicated teams** that integrate with your operations.",
                icon: <UserCheck className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data Security & Compliance",
                content:
                  "**Enterprise-grade security** to protect your intellectual property.",
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Agile & Remote-Ready",
                content: "Our teams **adapt to remote and hybrid work models effortlessly.**",
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
                question: "How do offshore and on-site teams work together?",
                answer:
                  "**Our teams collaborate seamlessly** using cloud-based tools and Agile methodologies to ensure smooth integration.",
              },
              {
                question: "What industries do you support?",
                answer:
                  "We specialize in **IT, finance, healthcare, e-commerce, logistics, and more.**",
              },
              {
                question: "Can I transition from offshore to on-site teams?",
                answer:
                  "Yes! We offer **hybrid workforce models** that adapt to your evolving business needs.",
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
            Build Your Offshore & On-Site Teams Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Expand globally, work smarter, and scale seamlessly.** Let's create your high-performing team now!
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request a Consultation
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

export default OffshoreOnsiteTeams;