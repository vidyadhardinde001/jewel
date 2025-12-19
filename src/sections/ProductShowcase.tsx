"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Use public folder images for better performance
const productImage = "/product-image.png";
const pyramidImage = "/pyramid.png";
const tubeImage = "/tube.png";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Slight variation in movement for better parallax effect
  const translateYPrimary = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateYSecondary = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-x-clip">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]"></div>

      <div className="container relative z-10">
        {/* Text content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive SaaS website in just minutes with this template.
          </p>
        </div>

        {/* Product Image & Floating Elements */}
        <div className="relative flex justify-center mt-10">
          <Image src={productImage} alt="Product dashboard showcasing features" width={600} height={400} />

          {/* Floating Pyramid */}
          <motion.img
            src={pyramidImage}
            alt="3D pyramid shape floating animation"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY: translateYPrimary }}
          />

          {/* Floating Tube */}
          <motion.img
            src={tubeImage}
            alt="3D tube shape floating animation"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY: translateYSecondary }}
          />
        </div>
      </div>
    </section>
  );
};
