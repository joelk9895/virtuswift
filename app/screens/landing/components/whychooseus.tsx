"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, animate } from "framer-motion";
import { interpolate } from "flubber";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [pathD, setPathD] = useState("");

  // SVG paths for morphing
  const svgPaths = {
    trackRecord:
      "M11.875 20q.1 0 .2-.05t.15-.1l8.2-8.2q.3-.3.438-.675t.137-.75q0-.4-.137-.763t-.438-.637l-4.25-4.25q-.275-.3-.638-.437T14.776 4q-.375 0-.75.138t-.675.437l-.275.275l1.85 1.875q.375.35.55.8t.175.95q0 1.05-.712 1.763t-1.763.712q-.5 0-.962-.175t-.813-.525L9.525 8.4L5.15 12.775q-.075.075-.112.163T5 13.125q0 .2.15.363t.35.162q.1 0 .2-.05t.15-.1l2.7-2.7q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.075-.112.163t-.038.187q0 .2.15.35t.35.15q.1 0 .2-.05t.15-.1l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.05-.112.15t-.038.2q0 .2.15.35t.35.15q.1 0 .188-.038t.162-.112l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.7 2.7q-.075.075-.112.163t-.038.187q0 .2.163.35t.362.15m-.025 2q-.925 0-1.637-.612t-.838-1.538q-.85-.125-1.425-.7t-.7-1.425q-.85-.125-1.412-.712T5.15 15.6q-.95-.125-1.55-.825t-.6-1.65q0-.5.188-.962t.537-.813L8.1 6.975Q8.675 6.4 9.513 6.4t1.412.575L12.8 8.85q.05.075.15.113t.2.037q.225 0 .375-.137t.15-.363q0-.1-.038-.2t-.112-.15L9.95 4.575q-.275-.3-.637-.437T8.55 4q-.375 0-.75.138t-.675.437L3.6 8.125q-.35.35-.5.825t-.075.95q.075.425-.175.75t-.675.375t-.75-.188t-.375-.662q-.15-.95.138-1.862T2.175 6.7L5.7 3.175Q6.3 2.6 7.038 2.3T8.55 2t1.513.3t1.312.875l.275.275l.275-.275q.6-.575 1.338-.875t1.512-.3t1.513.3t1.312.875L21.825 7.4q.575.575.875 1.325t.3 1.525t-.3 1.513t-.875 1.312l-8.2 8.175q-.35.35-.812.55t-.963.2M9.4 8",
    users:
      "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z",
    lightbulb:
      "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z",
    clock:
      "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z",
  };

  const content = [
    {
      title: "Proven Track Record",
      description:
        "Years of successful implementations with industry-leading companies across the globe. Our experience spans multiple industries and technologies, delivering consistent results and measurable impact.",
      path: svgPaths.trackRecord,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your success is our priority. We align our solutions with your business objectives, ensuring every implementation drives value and meets your specific needs. Our collaborative approach keeps you involved at every step.",
      path: svgPaths.users,
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with our innovative solutions powered by the latest technological advancements. We continuously evolve our offerings to incorporate emerging technologies and best practices.",
      path: svgPaths.lightbulb,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock expert support ensuring your business operations run smoothly. Our dedicated team is always ready to assist, providing quick resolution to any challenges you encounter.",
      path: svgPaths.clock,
    },
  ];

  useEffect(() => {
    // Get the current and next paths
    const currentPath = content[activeCard].path;
    const prevIndex = (activeCard - 1 + content.length) % content.length;
    const prevPath = content[prevIndex].path;

    // Create interpolation function
    const interpolator = interpolate(prevPath, currentPath, {
      maxSegmentLength: 2,
    });

    // Animate the path
    animate(0, 1, {
      duration: 0.4,
      ease: "easeInOut",
      onUpdate: (progress) => {
        setPathD(interpolator(progress));
      },
    });
  }, [activeCard]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 35%", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <section
      className="bg-gradient-to-br from-gray-900 to-indigo-900 relative"
      ref={ref}
    >
      <div className="sticky top-10 left-0 right-0 z-10 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent py-16 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-center text-white">
          Why Partner with VirtuSwift?
        </h2>
      </div>

      <div className="flex items-center justify-center px-4">
        <div className="pt-24 flex">
          <motion.div
            animate={{
              backgroundColor:
                backgroundColors[activeCard % backgroundColors.length],
            }}
            className="relative flex flex-col lg:flex-row justify-between items-start gap-16 min-h-[90vh] p-8 rounded-lg shadow-lg"
          >
            <div className="lg:w-1/2 sticky top-32">
              <div className="max-w-2xl">
                {content.map((item, index) => (
                  <div key={item.title + index} className="mb-40">
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0,
                        scale: activeCard === index ? 1 : 0.8,
                      }}
                      className="text-3xl font-bold text-white"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0,
                        scale: activeCard === index ? 1 : 0.9,
                      }}
                      className="text-lg text-gray-300 max-w-sm mt-6"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-[50vh] translate-y-[-50%] bg-white shadow-2xl rounded-lg">
              <div
                style={{ background: backgroundGradient }}
                className="h-60 w-96 rounded-lg overflow-hidden mx-auto flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 24 24"
                  className="w-24 h-24"
                >
                  <path
                    d={pathD || content[activeCard].path}
                    fill="rgb(234 88 12)"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
