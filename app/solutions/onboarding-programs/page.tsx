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
  HeartHandshake,
  Star,
  Rocket,
  Shield,
  BarChart3,
  Globe,
  ThumbsUp,
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

const OnboardingRetentionPrograms = () => {
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
            Onboarding & Retention Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Engage, retain, and empower** your workforce with world-class onboarding and retention strategies.
          </p>
          <p className="text-gray-600">
            Build a high-performing team with **seamless onboarding experiences** and **proven retention solutions** that drive success.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Onboarding & Retention Programs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Faster Employee Integration",
                content:
                  "Get new hires **fully productive in record time** with structured onboarding workflows.",
                style: cardStyles.primary,
                icon: <Rocket className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Higher Retention Rates",
                content:
                  "Reduce turnover by **enhancing job satisfaction** and building long-term engagement.",
                style: cardStyles.secondary,
                icon: <HeartHandshake className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data-Driven Workforce Insights",
                content:
                  "Leverage **advanced analytics** to understand trends and proactively retain top talent.",
                style: cardStyles.primary,
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable & Customizable Solutions",
                content:
                  "Adapt onboarding and retention programs **to your business size and industry needs.**",
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
                title: "Automated Onboarding",
                content: "Streamline HR processes with **digital workflows and self-service portals.**",
                icon: <Users className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "AI-Powered Employee Engagement",
                content: "**Personalized training, mentorship, and real-time feedback** for continuous improvement.",
                icon: <Star className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Retention-Boosting Recognition",
                content:
                  "Increase loyalty with **custom incentives, rewards, and appreciation programs.**",
                icon: <ThumbsUp className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Predictive Analytics & Insights",
                content: "Use **AI-driven data** to anticipate workforce trends and prevent attrition.",
                icon: <Shield className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How does AI improve employee onboarding?",
                answer:
                  "AI automates paperwork, facilitates personalized training, and **enhances engagement through interactive modules.**",
              },
              {
                question: "What makes a successful retention program?",
                answer:
                  "A strong mix of **mentorship, career growth opportunities, and employee recognition** helps drive retention.",
              },
              {
                question: "Can your solutions be tailored to our company size?",
                answer:
                  "Yes! Our onboarding and retention programs are **customizable for startups, mid-sized businesses, and enterprises.**",
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
            Create a Workforce That Stays & Thrives
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Improve employee retention, enhance engagement, and drive workforce success** with our onboarding and retention solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Get a Free Consultation
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

export default OnboardingRetentionPrograms;