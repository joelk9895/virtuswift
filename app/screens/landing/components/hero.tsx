"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Accelerating your success through SAP",
    subtitle: "Get started by having a consultation with us",
    video:
      "https://videos.pexels.com/video-files/2928382/2928382-hd_1920_1080_30fps.mp4",
    category: "Consultation",
  },
  {
    title: "Empowering your business with innovative solutions",
    subtitle: "Discover our range of services",
    video:
      "https://videos.pexels.com/video-files/3209829/3209829-uhd_2560_1440_25fps.mp4",
    category: "Services",
  },
  {
    title: "Transforming your vision into reality",
    subtitle: "Partner with us for seamless integration",
    video:
      "https://videos.pexels.com/video-files/2675511/2675511-hd_1920_1080_24fps.mp4",
    category: "Integration",
  },
  {
    title: "Driving innovation with cutting-edge technology",
    subtitle: "Explore our tech-driven solutions",
    video:
      "https://videos.pexels.com/video-files/1957727/1957727-hd_1920_1080_30fps.mp4",
    category: "Innovation",
  },
  {
    title: "Optimizing your workflows for maximum efficiency",
    subtitle: "Streamline your processes with our expertise",
    video:
      "https://videos.pexels.com/video-files/2887461/2887461-hd_1920_1080_25fps.mp4",
    category: "Efficiency",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setTransitioning(false);
      }, 1000); // Match the fade-out duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleCategoryClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-black min-h-fit relative">
      <section className="text-white text-center min-h-[95vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <div
          className={`absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-1000 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            key={currentSlide}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Blue Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-orange-500 via-indigo-800 to-transparent opacity-70 z-0"></div>

        {/* Text Content */}
        <div className="z-10 flex flex-col items-start pl-[5vw] w-full">
          <AnimatePresence mode="wait">
            {/* Title Animation */}
            <motion.h1
              key={slides[currentSlide].title}
              className={`text-8xl font-medium  w-[60%] text-left `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle Animation */}
            <motion.p
              key={slides[currentSlide].subtitle}
              className="text-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.button
              className="mt-4 bg-white text-black px-2 py-1 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              Read Story
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Category Buttons */}
        <div className="absolute bottom-10 flex gap-4 z-10 w-[90vw] justify-between">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              {/* Progress Bar */}
              {index === currentSlide && (
                <motion.div
                  className="absolute top-[-6px] left-0 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  style={{ width: "100%" }}
                />
              )}
              {/* Button */}
              <button
                onClick={() => handleCategoryClick(index)}
                className={`text-white font-bold ${
                  index === currentSlide ? "opacity-100" : "opacity-80"
                }`}
              >
                / {slide.category}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
