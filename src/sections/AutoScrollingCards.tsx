'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const AutoScrollingCards: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/content/projects');
        const projectsList = response.data.content.projectsList;
        setProjects(projectsList.slice(0, 100)); // Limit to 100 projects
      } catch (error) {
        console.error('Error fetching projects:', error);
        const response = await axios.get(
          'https://script.googleusercontent.com/macros/echo?user_content_key=jWiOjkrf2ctn2AgdYjCviqqnE6ug9Aidd_OROLJcY_0LmgfZYVE-7st50YzWi5_2L3aAFqee5F2Ppmd-pptFj4drARAV7L3xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNsCMzeldO4Xb_scTkAnMat5qCrKwegdmpVCvGZHadmqfYT3XWzQJwz-y7I4-Gds87a84TYTPQIyHJ2wmYtgjIjbkze09Tcvtg&lib=MLI_HfzysNsvwOtnrQy7NCvZ1uKL4_q0K'
        );
        const projectsList = response.data.content.projectsList;
        setProjects(projectsList.slice(0, 10));
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1500); // Auto-scroll every 1.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [projects, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % projects.length;
      scrollToCard(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted =
        (prevIndex - 1 + projects.length) % projects.length;
      scrollToCard(prevIndexAdjusted);
      return prevIndexAdjusted;
    });
  };

  const scrollToCard = (index: number) => {
    if (containerRef.current && containerRef.current.children) {
      const targetCard = containerRef.current.children[index] as HTMLElement;

      if (targetCard) {
        containerRef.current.scrollTo({
          left:
            targetCard.offsetLeft - containerRef.current.offsetWidth / 2 + targetCard.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleCardClick = () => {
    router.push(`/projects`);
  };

  if (projects.length === 0) {
    return <div className="text-center text-gray-500">Loading projects...</div>;
  }

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-4xl font-medium text-center mb-8 text-gray-800">
        Featured Projects
      </h2>

      {/* Cards Container */}
      <div
        className="relative gap-[50px] overflow-y-hidden flex overflow-x-auto max-w-[80%] mx-auto h-[55vh] scrollbar-hidden"
        ref={containerRef}
        style={{
          scrollBehavior: 'smooth',
          overflowY: 'hidden',
          overflowX: 'scroll',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For IE & Edge
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex-shrink-0 w-[85%] sm:w-[100%] md:w-[50%] lg:w-[30%] mx-2 transition-transform duration-500 ${
              index === currentIndex ? 'scale-105 z-10' : 'scale-100 opacity-70'
            }`}
            onClick={handleCardClick}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer group h-auto w-full">
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-[40vh] sm:h-[45vh] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title Section */}
              <div className="bg-orange-500 text-white text-center py-2 group-hover:bg-white group-hover:text-orange-500 transition-all duration-300">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Controls */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          className="bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              scrollToCard(index);
            }}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default AutoScrollingCards;
