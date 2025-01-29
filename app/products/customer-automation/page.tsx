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
  MessageSquare,
  Bot,
  UserCheck,
  Smile,
  BarChart3,
  Headphones,
  Layers,
  Rocket,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-teal-50 to-teal-100",
  feature: "bg-gradient-to-br from-white to-indigo-50 hover:shadow-lg transition-all duration-300",
};

const CustomerExperienceAutomation = () => {
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
            Customer Experience Automation Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Revolutionize customer engagement with AI-driven automation.**  
            Deliver seamless, personalized experiences across all touchpoints with **smart chatbots, predictive analytics, and AI-powered support.**
          </p>
          <p className="text-gray-600">
            **Boost satisfaction, enhance loyalty, and optimize support operations** with next-gen automation tools designed for modern businesses.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our CX Automation Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Powered Chatbots",
                content:
                  "Automate customer interactions with **24/7 AI-driven chatbots** that resolve queries instantly.",
                style: cardStyles.primary,
                icon: <Bot className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Omnichannel Engagement",
                content:
                  "Unify customer interactions across **email, social media, chat, and voice** for a seamless experience.",
                style: cardStyles.secondary,
                icon: <MessageSquare className="w-8 h-8 text-teal-600 mb-4" />,
              },
              {
                title: "Personalized Customer Journeys",
                content:
                  "Leverage **data-driven insights** to create hyper-personalized customer experiences.",
                style: cardStyles.primary,
                icon: <UserCheck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Faster Resolutions",
                content:
                  "Enhance support with **AI-powered self-service portals** that improve response times and efficiency.",
                style: cardStyles.secondary,
                icon: <Headphones className="w-8 h-8 text-teal-600 mb-4" />,
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
                title: "Automated Ticketing",
                content: "Streamline support with **AI-powered ticket management and prioritization.**",
                icon: <Layers className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Predictive Analytics",
                content: "**Use AI-driven insights** to anticipate customer needs and reduce churn.",
                icon: <BarChart3 className="w-8 h-8 text-teal-600 mb-4" />,
              },
              {
                title: "Proactive Customer Engagement",
                content:
                  "**Trigger automated responses** based on user behavior, boosting engagement rates.",
                icon: <Smile className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless CRM Integration",
                content: "Integrate with **Salesforce, HubSpot, and other CRM tools** for a unified customer view.",
                icon: <Rocket className="w-8 h-8 text-teal-600 mb-4" />,
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
                question: "How can automation improve my customer service?",
                answer:
                  "By using AI-driven automation, you can **resolve queries instantly, personalize interactions, and reduce workload on human agents.**",
              },
              {
                question: "Can these solutions integrate with my existing tools?",
                answer:
                  "Yes! Our automation solutions seamlessly **integrate with CRM, ERP, and other business platforms.**",
              },
              {
                question: "What industries can benefit from CX automation?",
                answer:
                  "**Retail, finance, healthcare, SaaS, and telecom** are just a few industries seeing massive improvements in CX efficiency.",
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
            Automate & Elevate Customer Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Reduce costs, enhance engagement, and optimize operations** with AI-powered CX automation.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-3 shadow-lg">
              Get a Free Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerExperienceAutomation;