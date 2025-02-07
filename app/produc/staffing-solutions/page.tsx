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

const StaffingSolutions = () => {
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
            Contract, Temp-to-Hire, & Permanent Staffing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Find the right talent, at the right time.** Whether you need contract professionals, temp-to-hire solutions, or permanent employees, we connect you with top-tier candidates tailored to your needs.
          </p>
          <p className="text-gray-600">
            Our staffing solutions **reduce hiring time, lower costs, and ensure a perfect skill fit** for your organization.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Staffing Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Flexible Hiring Models",
                content:
                  "Hire **on-demand** with contract, temp-to-hire, or permanent staffing solutions.",
                style: cardStyles.primary,
                icon: <Briefcase className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Industry-Specific Talent",
                content:
                  "We specialize in **matching talent to your industry’s unique needs.**",
                style: cardStyles.secondary,
                icon: <Users className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Speed & Efficiency",
                content:
                  "Fill critical roles faster with **AI-powered candidate sourcing.**",
                style: cardStyles.primary,
                icon: <Rocket className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Workforce Access",
                content:
                  "Access **top talent worldwide**, whether remote or on-site.",
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
                title: "AI-Powered Candidate Matching",
                content: "**Identify top candidates instantly** with data-driven insights.",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "End-to-End Hiring Support",
                content: "From sourcing to onboarding, we handle the entire **recruitment process.**",
                icon: <ClipboardCheck className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Compliance & Risk Management",
                content:
                  "**Stay compliant** with background checks, payroll services, and HR regulations.",
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Scalable Workforce Solutions",
                content: "Quickly **scale your team up or down** as business needs evolve.",
                icon: <UserCheck className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "What’s the difference between contract, temp-to-hire, and permanent staffing?",
                answer:
                  "**Contract staffing** provides professionals for short-term projects, **temp-to-hire** allows evaluation before making a full-time commitment, and **permanent staffing** helps secure long-term talent.",
              },
              {
                question: "How long does it take to fill a position?",
                answer:
                  "With our **AI-powered sourcing and pre-vetted talent**, roles can be filled **within days, not weeks.**",
              },
              {
                question: "Do you handle payroll and compliance for contract hires?",
                answer:
                  "Yes! We provide **full payroll, compliance, and benefits administration** for contract employees.",
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
            Find the Right Talent, Right Now
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Hire smarter and faster** with our tailored staffing solutions. Let’s build your perfect team today!
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

export default StaffingSolutions;