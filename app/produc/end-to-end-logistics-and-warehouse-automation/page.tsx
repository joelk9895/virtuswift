"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import MegaMenu from "@/app/components/megamenu";
import Footer from "@/app/components/footer";
import {
  Boxes,
  Shield,
  BarChart3,
  CircleDollarSign,
  Rocket,
  Factory,
  Truck,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardStyles = {
  primary: "bg-gradient-to-br from-blue-50 to-blue-100",
  secondary: "bg-gradient-to-br from-green-50 to-green-100",
  feature:
    "bg-gradient-to-br from-white to-green-50 hover:shadow-lg transition-all duration-300",
};

const LogisticsAutomation = () => {
  return (
    <div className="min-w-screen bg-gray-50 flex flex-col items-center">
      <MegaMenu />
      <div className="flex flex-col pt-32 w-[60%] items-center px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            End-to-End Logistics and Warehouse Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your supply chain with next-generation automation. From
            warehouses to last-mile delivery, we streamline operations for
            unparalleled efficiency.
          </p>
          <p className="text-gray-600">
            Drive agility, reduce costs, and scale effortlessly with
            cutting-edge technology tailored to your logistics needs.
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Why Automate with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Seamless Integration",
                content:
                  "Integrate automation tools into your existing workflows without disrupting operations.",
                style: cardStyles.primary,
                icon: (
                  <Factory
                    className="w-8 h-8 text-blue-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "End-to-End Visibility",
                content:
                  "Gain real-time insights into every stage of your supply chain for smarter decisions.",
                style: cardStyles.secondary,
                icon: (
                  <BarChart3
                    className="w-8 h-8 text-green-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Enhanced Productivity",
                content:
                  "Leverage robotics and IoT to reduce manual tasks and improve efficiency across your operations.",
                style: cardStyles.primary,
                icon: (
                  <Truck
                    className="w-8 h-8 text-blue-600 mb-4"
                    strokeWidth={1.5}
                  />
                ),
              },
              {
                title: "Optimized Costs",
                content:
                  "Minimize operational costs with intelligent automation that scales with your business.",
                style: cardStyles.secondary,
                icon: (
                  <CircleDollarSign
                    className="w-8 h-8 text-green-600 mb-4"
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
        <motion.section className="space-y-8" {...fadeIn}>
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Smart Warehousing",
                content:
                  "Automated picking, packing, and inventory management for faster fulfillment.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <Boxes
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "AI-Driven Analytics",
                content:
                  "Predict demand and optimize routes with machine learning insights.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-green-500 to-yellow-600 flex items-center justify-center relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <Shield
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "Scalable Automation",
                content:
                  "Expand capabilities as your business grows with modular solutions.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <Rocket
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "24/7 Support",
                content:
                  "Round-the-clock support to ensure smooth operations, no matter the time.",
                icon: (
                  <div className="w-24 h-24 mx-auto mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-green-500 to-yellow-600 flex items-center justify-center relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <BarChart3
                        className="w-12 h-12 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ),
              },
            ].map((feature, index) => (
              <Card key={index} className={cardStyles.feature}>
                <div className="mt-10"> {feature.icon}</div>
                <CardHeader>
                  <CardTitle className="text-slate-800 text-center font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-slate-600">
                  {feature.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center space-y-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-12 shadow-lg border border-green-100"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the leaders in logistics automation and unlock new levels of
            efficiency and innovation.
          </p>
          <div className="space-x-4 pt-4">
            <Button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </Button>
            <Button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-4 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Request a Demo
            </Button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default LogisticsAutomation;
