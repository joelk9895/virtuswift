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
  Lock,
  Building,
  Shield,
  BarChart3,
  Cloud,
  CircleDollarSign,
  Server,
  Globe,
} from 'lucide-react';

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

const SecureCloudBanking = () => {
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
            Secure Cloud Solutions for Banking & Finance
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your financial operations with state-of-the-art, secure cloud solutions.
            Ensure compliance, security, and scalability while enhancing customer experience.
          </p>
        </motion.section>

        {/* Why Choose Our Solution */}
        <motion.section className="mt-20 space-y-12" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Secure Cloud Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Advanced Security',
                content: 'Enterprise-grade encryption and AI-powered threat detection.',
                style: cardStyles.primary,
                icon: <Lock className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Regulatory Compliance",
                content: "Built-in GDPR, PCI DSS, and financial industry compliance.",
                style: cardStyles.secondary,
                icon: <Shield className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Cost Efficiency",
                content: "Reduce IT overhead with scalable cloud infrastructure.",
                style: cardStyles.primary,
                icon: <CircleDollarSign className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Global Scalability",
                content: "Expand operations with high-performance cloud networks.",
                style: cardStyles.secondary,
                icon: <Globe className="w-8 h-8 text-indigo-600 mb-4" />,
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
        <motion.section className="mt-20 space-y-12" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI-Powered Fraud Detection',
                content: 'Identify and prevent fraudulent transactions in real-time.',
                icon: <Building className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Secure Cloud Infrastructure",
                content: "Ensure data integrity with highly secure cloud hosting.",
                icon: <Cloud className="w-8 h-8 text-orange-600 mb-4" />,
              },
              {
                title: "Automated Compliance Monitoring",
                content: "Real-time audit logs and reporting for regulatory needs.",
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Seamless Core Banking Integration",
                content: "Integrate effortlessly with existing banking platforms.",
                icon: <Server className="w-8 h-8 text-orange-600 mb-4" />,
              },
            ].map((feature, index) => (
              <Card key={index} className={cardStyles.feature}>
                <CardHeader className="text-center space-y-4">
                  {feature.icon}
                  <CardTitle className="font-bold text-slate-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{feature.content}</CardContent>
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
                question: 'How secure is cloud banking?',
                answer: 'Our cloud banking solutions implement bank-grade encryption, multi-factor authentication, and AI-driven threat detection to ensure maximum security for all financial operations.',
              },
              {
                question: 'Can we integrate with existing banking systems?',
                answer: 'Yes! Our solutions seamlessly integrate with core banking platforms including Oracle, SAP, and Finastra, ensuring smooth operation with your existing infrastructure.',
              },
              {
                question: 'Do you provide disaster recovery options?',
                answer: 'Absolutely! We offer comprehensive geo-redundant backups and failover strategies to maintain 24/7 operation continuity for your critical banking services.',
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
            Transform Your Financial Institution Today
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Future-proof your banking infrastructure with cutting-edge, secure cloud solutions.
            Improve efficiency, security, and customer experience today.
          </p>
          <div>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule a Demo
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default SecureCloudBanking;