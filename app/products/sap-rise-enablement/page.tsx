'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import MegaMenu from '@/app/components/megamenu';
import Footer from '@/app/components/footer';
import {
  Boxes,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Globe,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cardStyles = {
  primary: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-none',
  secondary: 'bg-gradient-to-br from-orange-50 to-orange-100 border-none',
  feature: 'bg-white hover:bg-orange-50 border-none shadow-md hover:shadow-xl transition-all duration-300',
};

const SAPRISEEnablementSuite = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-white'>
      <MegaMenu />
      <div className='container mx-auto px-4 lg:px-8 pt-32 pb-16 space-y-20'>
        {/* Hero Section */}
        <motion.section
          className='text-center space-y-6 max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight'>
            SAP RISE Enablement Suite
          </h1>
          <p className='text-lg md:text-xl text-gray-600'>
            Accelerate your journey to the intelligent enterprise with the SAP RISE Enablement Suite. Simplify, streamline, and scale your business transformation today.
          </p>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section className='space-y-10' {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose SAP RISE Enablement Suite?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Simplified Transformation",
                content:
                  "Streamline complex processes with pre-configured, integrated solutions tailored for your business needs.",
                style: cardStyles.primary,
                icon: (
                  <Rocket
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Scalable Solutions",
                content:
                  "Grow at your own pace with flexible, scalable tools built to support your expanding operations.",
                style: cardStyles.secondary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Actionable Insights",
                content:
                  "Leverage advanced analytics and data-driven decision-making for faster and smarter operations.",
                style: cardStyles.primary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost Efficiency",
                content:
                  "Optimize resources and reduce costs with intelligent solutions that maximize your ROI.",
                style: cardStyles.secondary,
                icon: (
                  <CircleDollarSign
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
        <motion.section className='space-y-10' {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features of SAP RISE Enablement Suite
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI-Driven Insights",
                content:
                  "Enable predictive analytics with AI to stay ahead of market trends.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "End-to-End Automation",
                content: "Minimize manual tasks with intelligent automation tools.",
                icon: <Boxes className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Resilient Cloud Framework",
                content:
                  "Ensure business continuity with highly secure and scalable cloud infrastructure.",
                icon: <Shield className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Seamless Integrations",
                content:
                  "Connect effortlessly to existing systems with simplified integrations.",
                icon: <Rocket className="w-8 h-8 text-indigo-600 mb-4" />,
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
          <Accordion type='single' collapsible className='space-y-4'>
            {[
              {
                question: 'How does SAP RISE differ from traditional solutions?',
                answer: 'SAP RISE is a holistic solution that simplifies cloud migration while providing tailored tools for innovation.',
              },
              {
                question: 'Can I migrate my current SAP system to the RISE platform?',
                answer: 'Yes, the suite includes comprehensive migration services for seamless transitions.',
              },
              {
                question: 'What industries can benefit from SAP RISE Enablement Suite?',
                answer: 'From manufacturing to retail and healthcare, SAP RISE is versatile and serves diverse industries.',
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className='bg-white rounded-lg shadow-sm border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-lg font-semibold hover:text-orange-600 hover:no-underline'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4 text-gray-600'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className='text-center space-y-8 bg-gradient-to-br from-indigo-50 via-white to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg'
          {...fadeIn}
        >
          <h2 className='text-3xl font-bold text-gray-900'>
            Elevate Your Business with SAP RISE Enablement Suite
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Start your intelligent enterprise journey today with SAP RISE. Transform faster, innovate smarter, and scale seamlessly.
          </p>
          <div className='space-x-4'>
            <Button 
              className='bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-6 h-auto text-lg font-semibold hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-xl transition-all duration-300'
            >
              Get in Touch
            </Button>
            <Button 
              className='bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-6 h-auto text-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 shadow-md hover:shadow-xl transition-all duration-300'
            >
              Learn More
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SAPRISEEnablementSuite;