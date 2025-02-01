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
  primary: 'bg-gradient-to-br from-orange-50 to-orange-100',
  secondary: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
  feature: 'bg-white hover:bg-orange-50 hover:shadow-xl transition-all duration-300',
};

const CustomerExperienceAutomation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <MegaMenu />
      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-16">
        <motion.section
          className="text-center space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Customer Experience Automation Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionize customer engagement with AI-driven automation.
            Deliver seamless, personalized experiences across all touchpoints with smart chatbots, predictive analytics, and AI-powered support.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="mt-20 space-y-12" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our CX Automation Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI-Powered Chatbots',
                content: 'Automate customer interactions with 24/7 AI-driven chatbots that resolve queries instantly.',
                style: cardStyles.primary,
                icon: <Bot className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: 'Omnichannel Engagement',
                content: 'Unify customer interactions across email, social media, chat, and voice for a seamless experience.',
                style: cardStyles.secondary,
                icon: <MessageSquare className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Personalized Customer Journeys",
                content:
                  "Leverage data-driven insights to create hyper-personalized customer experiences.",
                style: cardStyles.primary,
                icon: <UserCheck className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Faster Resolutions",
                content:
                  "Enhance support with AI-powered self-service portals that improve response times and efficiency.",
                style: cardStyles.secondary,
                icon: <Headphones className="w-8 h-8 text-indigo-600 mb-4" />,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${card.style} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
                  <CardHeader className="space-y-4">
                    <div className="flex flex-col items-center">
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
                content: "Streamline support with AI-powered ticket management and prioritization.",
                icon: <Layers className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Predictive Analytics",
                content: "Use AI-driven insights to anticipate customer needs and reduce churn.",
                icon: <BarChart3 className="w-8 h-8 text-teal-600 mb-4" />,
              },
              {
                title: "Proactive Customer Engagement",
                content:
                  "Trigger automated responses based on user behavior, boosting engagement rates.",
                icon: <Smile className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless CRM Integration",
                content: "Integrate with Salesforce, HubSpot, and other CRM tools for a unified customer view.",
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
        <motion.section className="mt-20 space-y-12 max-w-3xl mx-auto" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: 'How can automation improve my customer service?',
                answer: 'By using AI-driven automation, you can resolve queries instantly, personalize interactions, and reduce workload on human agents.',
              },
              {
                question: "Can these solutions integrate with my existing tools?",
                answer:
                  "Yes! Our automation solutions seamlessly integrate with CRM, ERP, and other business platforms.",
              },
              {
                question: "What industries can benefit from CX automation?",
                answer:
                  "Retail, finance, healthcare, SaaS, and telecom are just a few industries seeing massive improvements in CX efficiency.",
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg mb-4 border border-slate-200"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-slate-800 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="mt-20 text-center space-y-8 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-2xl p-12 shadow-lg max-w-4xl mx-auto" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900">
            Automate & Elevate Customer Experiences
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Reduce costs, enhance engagement, and optimize operations with AI-powered CX automation.
          </p>
          <div>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
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