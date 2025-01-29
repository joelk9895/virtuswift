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
  Video,
  BookOpen,
  FileText,
  BarChart3,
  Lightbulb,
  Users,
  Globe,
  Bookmark,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-yellow-50 to-yellow-100",
  feature: "bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300",
};

const LearningResources = () => {
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
            Webinars, Tutorials, and Whitepapers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            **Stay ahead of the curve** with expert-led **webinars, in-depth tutorials, and exclusive whitepapers** designed to empower your business.
          </p>
          <p className="text-gray-600">
            Gain insights from industry leaders, master cutting-edge technologies, and access valuable resources that drive innovation and success.
          </p>
        </motion.section>

        {/* Why Choose Our Learning Resources? */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Choose Our Learning Resources?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert-Led Webinars",
                content: "Gain **exclusive access** to thought leaders and industry experts sharing game-changing insights.",
                style: cardStyles.primary,
                icon: <Video className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Step-by-Step Tutorials",
                content: "Hands-on **learning modules** covering the latest trends and best practices in your industry.",
                style: cardStyles.secondary,
                icon: <BookOpen className="w-8 h-8 text-yellow-600 mb-4" />,
              },
              {
                title: "Exclusive Whitepapers",
                content: "Deep-dive into **market trends, research reports, and future-ready strategies.**",
                style: cardStyles.primary,
                icon: <FileText className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Learning Community",
                content: "Engage with **like-minded professionals** and stay updated with the latest industry shifts.",
                style: cardStyles.secondary,
                icon: <Users className="w-8 h-8 text-yellow-600 mb-4" />,
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
            Key Features of Our Learning Hub
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "On-Demand Webinars",
                content: "**Watch anytime, anywhere** with our library of past and upcoming webinar sessions.",
                icon: <Bookmark className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Interactive Learning",
                content: "**Live Q&A sessions, hands-on labs, and real-world case studies.**",
                icon: <Lightbulb className="w-8 h-8 text-yellow-600 mb-4" />,
              },
              {
                title: "Industry-Specific Insights",
                content: "Tailored content covering **technology, finance, healthcare, logistics, and more.**",
                icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
              },
              {
                title: "Global Access",
                content: "**Stay connected with experts worldwide** and network with industry professionals.",
                icon: <Globe className="w-8 h-8 text-yellow-600 mb-4" />,
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
                question: "Are the webinars free to access?",
                answer: "Yes! We offer a mix of free and premium content. Sign up to explore our exclusive learning hub.",
              },
              {
                question: "Can I download the whitepapers?",
                answer: "Absolutely! Once you register, you gain access to **downloadable PDFs** of all our whitepapers.",
              },
              {
                question: "Do you provide certifications?",
                answer: "Yes! Many of our tutorials come with **certifications** to help validate your skills and expertise.",
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
            Start Learning Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock expert insights, **master new skills, and gain industry-leading knowledge.**  
            Join now and explore **webinars, tutorials, and whitepapers!**
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 shadow-lg">
              Register Now
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default LearningResources;