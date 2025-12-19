"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo1 from "@/assets/logo1.png";
import Image from "next/image";

interface AboutUsContent {
  heading: string;
  description: string[];
  stats: { value: string | number; label: string }[];
  imageUrl: string;
  leadership: {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
  };
}

const CACHE_KEY = "aboutUsContentCache";
const CACHE_EXPIRATION = 60 * 60 * 1000;

const LearningTransformation: React.FC = () => {
  const [aboutUsContent, setAboutUsContent] = useState<AboutUsContent | null>(null);

  // Placeholder Data
  const placeholderContent: AboutUsContent = {
    heading: "About Us",
    description: [
      "We are manufacturers of custom-made industrial control panels and industrial automation systems with over 3 years of expertise in system integration, plant automation, turnkey projects, and corrective and preventive maintenance.",
      "We offer factory automation products (PLC, SCADA, HMI, VFD, AC Servo) of world-renowned brands, along with custom software development, energy monitoring, industrial safety solutions, and low-voltage distribution panels.",
      "Our focus on high-quality solutions ensures we meet customer needs efficiently with cutting-edge technology.",
    ],
    stats: [
      { value: "9", label: "Years Experience" },
      { value: "24", label: "Project Challenges" },
      { value: "50+", label: "Positive Reviews" },
      { value: "100+", label: "Trusted Clients" },
    ],
    imageUrl : "/assets/logo.png",
    leadership: {
      name: "Mr. Nikhil Sutar",
      role: "Founder & CEO",
      description:
        "With a Diploma and Bachelor's Degree in Electrical Engineering and over 9 years of industry experience, he brings specialized skills in PLC programming and a dedication to precision that have positioned Siddhivinayak Engineers as a trusted provider of automation solutions. Since establishing the firm in 2021, he has focused on delivering reliable and innovative solutions tailored to diverse industrial needs.",
      imageUrl: "/assets/Nikhil_Sutar.jpg",
    },
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cacheTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);

        if (cachedData && cacheTimestamp) {
          const isCacheValid =
            Date.now() - parseInt(cacheTimestamp) < CACHE_EXPIRATION;
          if (isCacheValid) {
            setAboutUsContent(JSON.parse(cachedData));
            return;
          }
        }

        const response = await axios.get("/api/content/aboutUsSection");
        const data = response.data.content;
        setAboutUsContent(data);
        console.log(data.imageUrl);

        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(`${CACHE_KEY}_timestamp`, Date.now().toString());
      } catch (error) {
        console.error("Error fetching about us section content", error);
        const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=nlaUMw9FNa1EIqEuKLu-gjrPZTAxppG7Ziwc7GEhbdRwh2nOrIPC6-BfBnAo2DQlvyS35k0QYkWOAcylyFqhm0OPRqQO4bJym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPqMLSOjrwHZzK4mYvDdiHLGQJ-sHsTjH8OGIT8v3wDXNf-klVZLuzilP1FveXtpdQO_gPawdAHBn8CdIZfxHGG40252Hhbnptz9Jw9Md8uu&lib=MmfELZ3pWjpi07YwspSVeGEoLBlaE9kY8");
        const data = response.data.content;
        setAboutUsContent(data);
      }
    };

    fetchContent();
  }, []);

  const content = aboutUsContent || placeholderContent;

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              {content.heading}
            </h2>
            {content.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Logo Section */}
          <div className="lg:col-span-1 flex justify-center items-center flex-col space-y-6">
            <Image
              src={content.imageUrl}
              alt="Siddhivinayak Engineers Logo"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Leadership Image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <Image
              src={content.leadership.imageUrl}
              alt={content.leadership.name}
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Leadership Details */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Leadership</h2>
            <h3 className="text-3xl font-semibold text-teal-600 mb-2">
              {content.leadership.name}
            </h3>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {content.leadership.description}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FE6D20] text-white p-6 rounded-lg text-center shadow-lg"
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTransformation;
