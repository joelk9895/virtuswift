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
  ShieldCheck,
  FileText,
  Lock,
  ClipboardCheck,
  BarChart3,
  Globe,
  Users,
  CheckCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const cardStyles = {
  primary: 'bg-gradient-to-br from-orange-50/80 to-orange-100/80 backdrop-blur-sm',
  secondary: 'bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 backdrop-blur-sm',
  feature: 'bg-white/90 backdrop-blur-sm hover:bg-orange-50/90 hover:shadow-xl transition-all duration-300',
};

const HealthcareCompliance = () => {
  const router = useRouter();
  
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <MegaMenu />
      <div className='container mx-auto px-4 lg:px-8 pt-32 pb-16'>
        <motion.section
          className='text-center space-y-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight'>
            Healthcare Compliance Solutions
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Ensure regulatory compliance with cutting-edge solutions. 
            Protect patient data, streamline operations, and stay ahead of evolving healthcare regulations.
          </p>
          <p className='text-gray-600'>
            Stay compliant with HIPAA, GDPR, and other healthcare regulations with robust automation, real-time tracking, and expert guidance.
          </p>
        </motion.section>

        {/* Feature Cards */}
        <motion.section className='mt-20 space-y-12' {...fadeIn}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: "Regulatory Expertise",
                content: "Stay ahead of industry changes with real-time compliance updates and expert advisory.",
                style: cardStyles.primary,
                icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Automated Compliance Audits",
                content: "Eliminate manual errors with AI-driven audits and compliance reporting.",
                style: cardStyles.secondary,
                icon: <FileText className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Data Security & Encryption",
                content: "Ensure patient confidentiality with enterprise-grade security measures.",
                style: cardStyles.primary,
                icon: <Lock className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless Policy Management",
                content: "Manage healthcare policies and ensure staff compliance with automated workflows.",
                style: cardStyles.secondary,
                icon: <ClipboardCheck className="w-8 h-8 text-green-600 mb-4" />,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='group'
              >
                <Card className={`${card.style} group-hover:scale-105 transition-all duration-300 h-full py-6 border-0 shadow-lg`}>
                  <CardHeader className='h-1/2'>
                    <div className='flex flex-col items-center justify-center h-full'>
                      {card.icon}
                      <CardTitle className='text-slate-800 font-bold text-center'>
                        {card.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className='text-slate-600 text-center'>
                    {card.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section className='mt-20 space-y-12' {...fadeIn}>
          <h2 className='text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: "Real-Time Compliance Monitoring",
                content: "Track compliance status across all departments with live dashboards.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Global Standards Adherence",
                content: "Ensure compliance with HIPAA, GDPR, and other international regulations.",
                icon: <Globe className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Employee Training & Certification",
                content: "Automate staff compliance training with custom learning paths and tracking.",
                icon: <Users className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Incident Reporting & Risk Management",
                content: "Quickly identify and address compliance gaps with automated alerts.",
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
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
        <motion.section className='mt-20 space-y-12 max-w-3xl mx-auto' {...fadeIn}>
          <h2 className='text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-8'>
            Frequently Asked Questions
          </h2>
          <Accordion type='single' collapsible className='w-full space-y-4'>
            {[
              {
                question: 'What regulations do your solutions support?',
                answer: 'Our comprehensive solutions ensure compliance with HIPAA, GDPR, HITECH, and other major healthcare regulations worldwide. We constantly update our systems to adapt to new regulatory requirements.',
              },
              {
                question: 'How does automation improve compliance?',
                answer: 'Automation significantly reduces human error, provides real-time compliance tracking, and streamlines policy enforcement. Our AI-powered systems can detect potential compliance issues before they become problems.',
              },
              {
                question: 'Can this integrate with my existing systems?',
                answer: 'Yes, our solutions offer seamless integration with major EHRs, CRMs, and compliance management platforms. We provide dedicated support to ensure smooth implementation with your existing infrastructure.',
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className='bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 overflow-hidden'
              >
                <AccordionTrigger className='px-6 py-4 text-lg font-semibold text-slate-800 hover:text-orange-600 transition-colors'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4 text-slate-600'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className='mt-20 text-center space-y-8 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden group'
          {...fadeIn}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100/50 to-indigo-50 opacity-80'></div>
          <div className='absolute inset-0 backdrop-blur-[2px]'></div>
          <div className='relative z-10 space-y-6'>
            <h2 className='text-3xl font-bold text-slate-900'>
              Ensure Compliance & Protect Patient Data
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto'>
              Stay ahead of regulatory changes and reduce risk with our AI-powered compliance solutions.
            </p>
            <Button 
              onClick={() => router.push('/contact')}
              className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
            >
              Get a Free Consultation
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default HealthcareCompliance;