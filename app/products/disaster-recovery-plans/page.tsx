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
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Lock,
  Globe,
  Database,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-orange-50 to-orange-100",
  feature:
    "bg-gradient-to-br from-white to-orange-50 hover:shadow-lg transition-all duration-300",
};

const MultiCloudBackup = () => {
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
            Multi-Cloud Backup & Disaster Recovery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Fortify Your Data Protection Strategy** with a **resilient, fail-safe** backup and disaster recovery plan across **AWS, Azure, and Google Cloud**.
          </p>
          <p className="text-gray-600">
            Leverage **multi-cloud redundancy** and **automated failover** to ensure business continuity **no matter what happens**.
          </p>
        </motion.section>

        {/* Why Choose Multi-Cloud Backup & Disaster Recovery */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Multi-Cloud Backup & Disaster Recovery?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "100% Business Continuity",
                content:
                  "Never worry about downtime with **instant failover systems** that keep your critical applications running.",
                style: cardStyles.primary,
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Redundancy",
                content:
                  "Store backups **across multiple cloud providers**, ensuring total data resilience with zero vendor lock-in.",
                style: cardStyles.secondary,
                icon: <Cloud className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Cost-Efficient Protection",
                content:
                  "Optimize cloud storage with **AI-driven backup scheduling**, cutting costs without compromising security.",
                style: cardStyles.primary,
                icon: <CircleDollarSign className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Rapid Disaster Recovery",
                content:
                  "Recover entire systems **within minutes**, no matter the **scale or severity** of the failure.",
                style: cardStyles.secondary,
                icon: <Rocket className="w-8 h-8 text-orange-600 mb-4" />,
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
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features of Our Disaster Recovery Solution
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Automated Backups",
                content: "Schedule **AI-powered backups** that adjust dynamically based on system activity and risk assessment.",
                icon: <Database className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Instant Recovery",
                content: "Recover lost data and full applications in **seconds** using cloud snapshots and virtualized environments.",
                icon: <Lock className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Multi-Cloud Storage",
                content: "Split backups across **AWS, Azure, and Google Cloud** for complete disaster-proofing.",
                icon: <Globe className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "AI-Powered Analytics",
                content: "Get **real-time insights** into vulnerabilities, inefficiencies, and compliance status across your backup infrastructure.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
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
          <Accordion
            type="single"
            collapsible
            className="space-y-4 w-full max-w-3xl mx-auto"
          >
            {[
              {
                question: "How fast is disaster recovery?",
                answer:
                  "With automated failover and real-time backup syncing, recovery times range from **seconds to a few minutes**, depending on infrastructure size.",
              },
              {
                question: "Can I integrate this with my existing cloud setup?",
                answer:
                  "Yes, our solution supports **hybrid** and **multi-cloud environments**, allowing seamless integration into your current system.",
              },
              {
                question: "Is this solution secure?",
                answer:
                  "Absolutely. We use **end-to-end encryption, role-based access, and AI-driven threat detection** to keep backups safe.",
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
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-12 shadow-lg"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Secure Your Business with Multi-Cloud Backup
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prevent **data loss and downtime** with a powerful, intelligent, and cost-effective **cloud disaster recovery solution**.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 shadow-lg">
              Get a Free Consultation
            </Button>
            <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 shadow-lg">
              Start Your Free Trial
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default MultiCloudBackup;