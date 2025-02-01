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
  Globe,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cardStyles = {
  primary: 'bg-gradient-to-br from-indigo-50 via-white to-indigo-100 border-none',
  secondary: 'bg-gradient-to-br from-orange-50 via-white to-orange-100 border-none',
  feature: 'bg-white/80 hover:bg-orange-50/80 backdrop-blur-sm border-none shadow-md hover:shadow-xl transition-all duration-300',
};

const SAPOnGoogleCloud = () => {
  return (
    <div className='min-w-screen min-h-screen bg-slate-50/90 flex flex-col items-center'>
      <MegaMenu />
      <div className='flex flex-col pt-24 md:pt-32 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16'>
        <motion.section
          className='text-center space-y-6 max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight'>
            SAP on Google Cloud
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Supercharge your SAP workloads with the power of Google Cloud. Harness industry-leading tools for innovation, scalability, and intelligent business transformation.
          </p>
          <p className='text-gray-600'>
            Unlock the future of ERP systems with streamlined operations and insights delivered in real-time.
          </p>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section className='space-y-10 w-full' {...fadeIn}>
          <h2 className='text-3xl font-bold text-slate-900 text-center'>
            Why Choose SAP on Google Cloud?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: "Intelligent Scaling",
                content:
                  "Effortlessly scale SAP workloads with Google’s robust global network and tools.",
                style: cardStyles.primary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Smarter Decision-Making",
                content:
                  "Leverage Google’s AI and machine learning to drive real-time business insights.",
                style: cardStyles.secondary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enhanced Cost Efficiency",
                content:
                  "Save with Google Cloud’s flexible pricing and intelligent resource optimization.",
                style: cardStyles.primary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Fortified Security",
                content:
                  "Ensure enterprise-grade security with Google's multilayered protection for mission-critical data.",
                style: cardStyles.secondary,
                icon: (
                  <Shield
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
        <motion.section className='space-y-10 w-full' {...fadeIn}>
          <h2 className='text-3xl font-bold text-slate-900 text-center'>
            Key Features of SAP on Google Cloud
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: "Seamless Deployment",
                content:
                  "Deploy SAP applications faster with Google’s pre-built migration tools.",
                icon: <Rocket className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Real-Time Insights",
                content:
                  "Tap into powerful analytics for smarter, data-driven decisions.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "High Uptime",
                content: "Minimize downtime with Google’s global reliability.",
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Cost Optimization",
                content: "Optimize cloud spending with intelligent resource scaling.",
                icon: (
                  <CircleDollarSign className="w-8 h-8 text-orange-600 mb-4" />
                ),
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
        <motion.section className='space-y-8 w-full max-w-3xl mx-auto' {...fadeIn}>
          <h2 className='text-3xl font-bold text-slate-900 text-center'>
            Frequently Asked Questions
          </h2>
          <Accordion type='single' collapsible className='space-y-4 w-full'>
            {[
              {
                question: 'Why should I use Google Cloud for SAP?',
                answer: 'Google Cloud offers intelligent scalability, integrated analytics, and robust security for running SAP applications efficiently.',
              },
              {
                question: 'How secure is SAP on Google Cloud?',
                answer: 'SAP on Google Cloud employs enterprise-grade encryption and compliance certifications, ensuring top-notch data security.',
              },
              {
                question: 'Can Google Cloud integrate with my current SAP setup?',
                answer: 'Yes, Google provides seamless integration and migration tools to ensure a smooth transition.',
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className='bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm'
              >
                <AccordionTrigger className='px-4 py-3 text-lg font-semibold hover:no-underline'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='px-4 pb-3 text-gray-600'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className='text-center space-y-8 bg-gradient-to-br from-white via-indigo-50/50 to-orange-50/50 rounded-2xl p-8 md:p-12 shadow-lg w-full max-w-4xl mx-auto'
          {...fadeIn}
        >
          <h2 className='text-3xl font-bold text-gray-900'>
            Future-Proof Your Business with SAP on Google Cloud
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Experience transformative scalability and intelligent solutions with SAP on Google Cloud. Join the future of cloud-driven innovation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 shadow-lg w-full sm:w-auto'>
              Contact Us
            </Button>
            <Button className='bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-3 shadow-lg w-full sm:w-auto'>
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPOnGoogleCloud;