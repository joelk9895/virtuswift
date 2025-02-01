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
  Lightbulb,
  TrendingUp,
  Shield,
  BarChart3,
  CheckCircle,
  FileText,
  Users,
  Target,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature: "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const BestPractices = () => {
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
            Industry-Leading Best Practices
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Stay ahead of the competition** with proven strategies, expert insights, and cutting-edge methodologies that drive **business success.**
          </p>
          <p className="text-gray-600">
            Learn from the **top industry leaders** and adopt best practices that maximize efficiency, **optimize performance**, and **boost innovation.**
          </p>
        </motion.section>

        {/* Why Choose Our Best Practices? */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Follow Our Best Practices?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Proven Success Strategies",
                content: "Gain access to **battle-tested** methodologies that drive measurable success across industries.",
                style: cardStyles.primary,
                icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Risk Mitigation",
                content: "Leverage **data-driven insights** to minimize risks and make strategic business decisions with confidence.",
                style: cardStyles.secondary,
                icon: <Shield className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Efficiency Optimization",
                content: "**Streamline workflows, automate tasks, and eliminate inefficiencies** for peak performance.",
                style: cardStyles.primary,
                icon: <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Industry Compliance",
                content: "**Stay compliant** with evolving regulations and implement standards that safeguard your business.",
                style: cardStyles.secondary,
                icon: <CheckCircle className="w-8 h-8 text-green-600 mb-4" />,
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
            Key Features of Our Best Practices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Insights",
                content: "**Get guidance** from top industry professionals who have mastered success.",
                icon: <Lightbulb className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Comprehensive Guides",
                content: "**Step-by-step tutorials** and whitepapers to implement best practices effortlessly.",
                icon: <FileText className="w-8 h-8 text-green-600 mb-4" />,
              },
              {
                title: "Collaborative Learning",
                content: "**Engage with industry leaders and peers** to refine your strategies.",
                icon: <Users className="w-8 h-8 text-indigo-600 mb-4" />,
              },
              {
                title: "Goal-Oriented Frameworks",
                content: "**Adopt structured methodologies** designed to achieve business goals efficiently.",
                icon: <Target className="w-8 h-8 text-green-600 mb-4" />,
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
                question: "How do I implement these best practices?",
                answer: "We provide **step-by-step guidance, real-world examples, and toolkits** to help you adopt best practices efficiently.",
              },
              {
                question: "Are these best practices industry-specific?",
                answer: "Our frameworks are designed to be **adaptable across various industries** while maintaining **universal effectiveness.**",
              },
              {
                question: "Can I collaborate with experts?",
                answer: "Yes! Join our **exclusive webinars, forums, and discussion groups** to interact with thought leaders.",
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
            Elevate Your Business with Proven Best Practices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            **Implement industry-leading methodologies today** and watch your business thrive.
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 shadow-lg">
              Get Started
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default BestPractices;