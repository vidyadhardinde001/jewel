"use client"; // Add this at the top of the file

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // v2


interface Testimonial {
  testimonial: string;
  name: string;
  company: string;
  image: string;
}

const CACHE_KEY = "testimonialsCache";
const CACHE_EXPIRATION = 60 * 60 * 1000; // 1 hour

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cacheTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);

        if (cachedData && cacheTimestamp) {
          const isCacheValid =
            Date.now() - parseInt(cacheTimestamp) < CACHE_EXPIRATION;
          if (isCacheValid) {
            setTestimonials(JSON.parse(cachedData));
            return;
          }
        }

        const response = await axios.get("/api/content/testimonial");
        const data = response.data.content;

        if (data && Array.isArray(data.testimonialList)) {
          setTestimonials(data.testimonialList);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data.testimonialList));
          localStorage.setItem(
            `${CACHE_KEY}_timestamp`,
            Date.now().toString()
          );
        }
      } catch (error) {
        console.error("Error fetching testimonials", error);
        const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=gANT39kqQv4E2y1lrKmrphqFeLR1DAHRchg5DC0vvczwYtW1IDSEBdVfW2KV7ZzaloGsbT47X1nE7AQ0m5Txysy31atGWnnhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLFuKCgEWsBYL5ih1GLrw_2Aq1_nbXwB7Ez55Ds0baFPdUl_v-59Hr7ddiIy0rv5e0pIllKAJq6KhAu4ukK2YssAX6upMKUJlA&lib=M7zoeFMcLY1Nf1brj8mesNvZ1uKL4_q0K");
        const data = response.data.content;
        setTestimonials(data.testimonialList);
      }
    };

    fetchTestimonials();

    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    updateOrientation();
    window.addEventListener("resize", updateOrientation);

    return () => {
      window.removeEventListener("resize", updateOrientation);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const cardsToShow = isPortrait ? 1 : 3;

  return (
    <section className="p-8 bg-[#232323]">
      <h2 className="text-3xl py-5 text-white lg:text-5xl sm:text-3xl text-center mb-10">Testimonials</h2>
      <div className="flex flex-col items-center">

        {/* Testimonials */}
        <div className="flex space-x-4 overflow-hidden mb-4">
          {testimonials
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-gray-700 italic mb-4">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="text-center">
                  <p className="text-lg font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-[#ff7d38] rounded-full flex items-center justify-center text-white hover:bg-[#ffae82] transform transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-[#ff7d38] rounded-full flex items-center justify-center text-white hover:bg-[#ffae82] transform transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
