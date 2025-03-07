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
  ClipboardCheck,
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

const ITTalentAcquisition = () => {
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
            Expert IT Talent Acquisition
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Hire top-tier IT professionals with precision and speed.** Our AI-driven recruitment solutions connect you with the best talent worldwide.
          </p>
          <p className="text-gray-600">
            From software engineers to cloud architects, we help you **build elite IT teams** that drive innovation and success.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our IT Talent Acquisition Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Powered Recruitment",
                content:
                  "Leverage **machine learning** to identify, screen, and match the best candidates for your IT roles.",
                style: cardStyles.primary,
                icon: <Rocket className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Industry-Specific Experts",
                content:
                  "We specialize in sourcing IT professionals **tailored to your industry needs.**",
                style: cardStyles.secondary,
                icon: <Briefcase className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Faster Hiring Process",
                content:
                  "Reduce hiring time with **pre-vetted candidates** ready to make an immediate impact.",
                style: cardStyles.primary,
                icon: <UserCheck className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Talent Network",
                content:
                  "Access **top IT talent worldwide**, including remote, contract, and full-time hires.",
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
                title: "AI-Driven Candidate Matching",
                content: "**Identify the best talent instantly** using data-driven insights.",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "End-to-End Hiring Support",
                content: "From sourcing to onboarding, we handle the entire **recruitment lifecycle.**",
                icon: <ClipboardCheck className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Cybersecurity & Compliance",
                content:
                  "**Secure hiring practices** that align with GDPR and data protection laws.",
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Flexible Hiring Models",
                content: "Choose from **contract, full-time, and remote hiring solutions**.",
                icon: <Users className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How fast can we hire IT professionals?",
                answer:
                  "With our **AI-powered matching system**, most companies fill roles **within days, not weeks.**",
              },
              {
                question: "Can you source specialized IT roles?",
                answer:
                  "Yes! We specialize in **software development, cloud engineering, cybersecurity, DevOps, and more.**",
              },
              {
                question: "Do you offer contract and remote hiring?",
                answer:
                  "Absolutely! We provide **contract, remote, and permanent hiring options** tailored to your needs.",
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
            Hire IT Experts with Confidence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Find and hire the best IT talent faster.** Let’s build your dream team today!
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

export default ITTalentAcquisition;