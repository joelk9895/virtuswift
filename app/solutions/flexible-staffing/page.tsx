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
  Settings,
  Rocket,
  BarChart3,
  Shield,
  Globe,
  Handshake,
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

const FlexibleStaffingIT = () => {
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
            Flexible Staffing for IT & SAP Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Scale your workforce on demand** with expert IT and SAP professionals, ensuring seamless project execution.
          </p>
          <p className="text-gray-600">
            Access a global network of **certified IT and SAP specialists** to drive efficiency, accelerate timelines, and control costs.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Flexible IT & SAP Staffing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "On-Demand Expertise",
                content:
                  "Hire **top-tier IT and SAP professionals** whenever you need them, without long-term commitments.",
                style: cardStyles.primary,
                icon: <Users className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Cost-Effective Scaling",
                content:
                  "Eliminate overhead costs by **scaling your workforce up or down** as project needs evolve.",
                style: cardStyles.secondary,
                icon: <BarChart3 className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Certified SAP & IT Specialists",
                content:
                  "Access **pre-vetted, highly skilled** professionals with expertise in SAP, cloud, cybersecurity, and more.",
                style: cardStyles.primary,
                icon: <Briefcase className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Seamless Project Integration",
                content:
                  "Our professionals integrate effortlessly into your workflows, **minimizing disruptions and maximizing productivity.**",
                style: cardStyles.secondary,
                icon: <Handshake className="w-8 h-8 text-green-600 mb-4" />,
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
                title: "Rapid Deployment",
                content: "Get skilled professionals onboarded **within days, not weeks.**",
                icon: <Rocket className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Talent Pool",
                content: "Access **top IT & SAP experts worldwide** for your projects.",
                icon: <Globe className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "100% Compliance",
                content:
                  "We handle **contracts, payroll, and compliance**, so you can focus on delivery.",
                icon: <Shield className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Flexible Engagement Models",
                content: "Choose **contract, project-based, or full-time hires** as per your needs.",
                icon: <Settings className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How quickly can I onboard IT or SAP professionals?",
                answer:
                  "We provide pre-vetted candidates who can start **within 48 hours**, ensuring zero project delays.",
              },
              {
                question: "Do you offer both remote and on-site staffing?",
                answer:
                  "Yes! We offer **flexible staffing models** for on-site, remote, and hybrid teams based on your needs.",
              },
              {
                question: "What SAP modules do your experts specialize in?",
                answer:
                  "Our SAP professionals cover **SAP S/4HANA, SAP FICO, SAP MM, SAP SD, SAP HCM, and more.**",
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
            Build Your IT & SAP Dream Team Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Optimize your workforce, reduce costs, and accelerate project success** with flexible staffing solutions.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Request Talent
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

export default FlexibleStaffingIT;