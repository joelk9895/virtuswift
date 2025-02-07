'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
  Lock,
  Shield,
  Globe,
  CircleDollarSign,
  BarChart3,
  Rocket,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-none',
  secondary: 'bg-gradient-to-br from-orange-50 to-orange-100 border-none',
  feature: 'bg-gradient-to-br from-white to-orange-50 hover:shadow-xl transition-all duration-300 border-none',
};

const SecurityIntelligenceForSAP = () => {
  const router = useRouter();

  return (
    <div className='min-w-screen bg-slate-50 flex flex-col items-center'>
      <MegaMenu />
      <div className='flex flex-col pt-32 w-full max-w-[1400px] items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16'>
        <motion.section
          className='text-center space-y-8 w-full max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight'>
            Security Intelligence for SAP
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Elevate your SAP security with cutting-edge intelligence tools. Proactively safeguard sensitive data, detect anomalies, and neutralize threats before they escalate.
          </p>
          <p className='text-gray-600'>
            Stay ahead with comprehensive, real-time protection designed to adapt to your dynamic business environment.
          </p>
        </motion.section>

        {/* Why Choose Security Intelligence for SAP */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Security Intelligence Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-Time Threat Detection",
                content:
                  "Identify and neutralize threats with instant, AI-driven insights into potential vulnerabilities.",
                style: cardStyles.primary,
                icon: (
                  <Shield
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Regulatory Compliance",
                content:
                  "Ensure full compliance with global regulations, avoiding fines and maintaining trust.",
                style: cardStyles.secondary,
                icon: (
                  <Globe
                    className="w-8 h-8 text-orange-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Secure Data Management",
                content:
                  "Protect sensitive SAP data with robust encryption, role-based access, and advanced monitoring.",
                style: cardStyles.primary,
                icon: (
                  <Lock
                    className="w-8 h-8 text-indigo-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Cost Optimization",
                content:
                  "Avoid unnecessary costs with efficient threat prevention tools that protect your SAP systems.",
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
        <motion.section className='space-y-8 w-full' {...fadeIn}>
          <h2 className='text-3xl font-bold text-slate-900 text-center'>
            Key Features of Security Intelligence
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: "Proactive Monitoring",
                content:
                  "Monitor all SAP activities in real-time to spot and respond to anomalies instantly.",
                icon: <BarChart3 className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Predictive Threat Analysis",
                content:
                  "Leverage AI to predict vulnerabilities and address them before they pose risks.",
                icon: <Rocket className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Incident Reporting",
                content:
                  "Generate detailed reports with actionable insights for faster decision-making.",
                icon: <Globe className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Multi-Layer Protection",
                content:
                  "Fortify your SAP ecosystem with end-to-end security tools for peace of mind.",
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
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
          <Accordion type='single' collapsible className='w-full'>
            {[
              {
                question: 'How does real-time monitoring work?',
                answer: 'Our tools continuously track all SAP activities and provide instant alerts for anomalies.',
              },
              {
                question: 'Is this solution scalable for large enterprises?',
                answer: 'Yes, it is built to scale, ensuring consistent protection as your organization grows.',
              },
              {
                question: 'How does it simplify compliance?',
                answer: 'The tools come with built-in compliance frameworks, automating regulatory monitoring and reporting.',
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className='border border-gray-200 rounded-lg mb-4 hover:shadow-md transition-shadow'
              >
                <AccordionTrigger className='px-4 py-3 text-lg font-semibold'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='px-4 py-3'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className='text-center space-y-8 bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg w-full max-w-4xl mx-auto'
          {...fadeIn}
        >
          <h2 className='text-3xl font-bold text-gray-900'>
            Secure Your SAP Ecosystem Today
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Future-proof your SAP systems with the ultimate in security intelligence. Protect, detect, and thrive in a dynamic digital landscape.
          </p>
          <div className='space-x-4'>
            <Button 
              className='bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-6 py-3 shadow-lg transition-all duration-300'
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </Button>
            <Button 
              className='bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 text-white px-6 py-3 shadow-lg transition-all duration-300'
            >
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SecurityIntelligenceForSAP;