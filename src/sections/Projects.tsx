"use client";

import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Projects: React.FC = () => {

  const initialProjects: Project[] = [
    {
      id: 1,
      title: "Mixer Plant Automation",
      description: "Control Panel, PLC, VFD, Programming, SCADA Software Development, Commissioning of Plant. Integration of Instrumentation like Temperature, Weight etc.PID loop for temperature control.",
      image: "https://drive.google.com/uc?export=view&id=1wCCLHVT9Ns9r_gRhNpWc60fbLEQhyKTA",
      category: "Market research",
    },
    {
      id: 2,
      title: "Incinerators Plant Automation",
      description: "Scope Of Work : Turnkey Electric Project including Distribution Panel, Control Panel, Field wiring, PLC, VFD, SCADA with IOT functions Instrumentation integrated like Temperature , Pressure, Flow, Burner Control System etc. VFD Synchronization with change in temperature.",
      image: "https://drive.google.com/uc?export=view&id=1txzHviodjayVGIdK19xkGsVCpf3FKAL1",
      category: "Market research",
    },
    {
      id: 3,
      title: "Water Treatment Plant Automation",
      description: "Scope Of Work: Turn Key Electrical Project, Distribution Panels, Control Panels, MCC Panels, Field wiring, PLC, VFD, SCADA, Remote I/O Instrumentation Integrated: Actuators for Valves, Ultrasonic Level Sensors, Ph, Turbidity, Flow, Pressure etc.",
      image: "https://drive.google.com/uc?export=view&id=1d52YS5EnJL_h3_HhDp3NymXZrrHbgf2w",
      category: "Branding strategies",
    },
    {
      id: 4,
      title: "Wire Stranding Machine",
      description: "Scope OF Supply: Control Panel, PLC, VFD, Field Wiring etc., Giving and Taking Command & Feedback to Robot ",
      image: "https://drive.google.com/uc?export=view&id=1HgSmKAYGggF-R13A83xXIcGpYCVrTt24",
      category: "Branding strategies",
    },
    {
      id: 5,
      title: "Special Purpose Machines",
      description: "Scope OF Supply: Control Panel, PLC, Servo, etc., Control Panel, Field wiring, PLC, VFD .Instrumentation integrated like Temperature , Pressure, Flow, Servo Motion Control System etc.",
      image: "https://drive.google.com/uc?export=view&id=1Y8us2yl1BH9uZkfbd4cpWzh2GOF07bzA",
      category: "Branding strategies",
    },
    {
      id: 6,
      title: "Robo Interfacing With SPMs",
      description: "Scope OF Supply: Control Panel, PLC, VFD, etc., VVFD Synchronization With Respect to Speed By Taking Encoder feedback .Instrumentation integrated like Temperature , Pressure,.",
      image: "https://drive.google.com/uc?export=view&id=1C1FtKzzHlobf9kQRS1XjFoPWx1SKTSS8",
      category: "Branding strategies",
    },
    {
      id: 7,
      title: "Foundry Core Making Machine",
      description: "Scope OF Supply: Control Panel, PLC, VFD, etc., VVFD Synchronization With Respect to Speed By Taking Encoder feedback .Instrumentation integrated like Temperature , Pressure,. ",
      image: "https://drive.google.com/uc?export=view&id=1-30m_3aG9Xqpwi0AbgjHd55s2a6dGvhM",
      category: "Branding strategies",
    },
    {
      id: 8,
      title: "Heating Oven Temperature Traveling Recorder(TTR)",
      description: "Scope OF Supply : Electrical Panel, HMI, Programming",
      image: "https://drive.google.com/uc?export=view&id=1h2u0xLyN3RH6Hs1Ei1NtpFHDWbvvmb9u",
      category: "Branding strategies",
    },
    {
      id: 9,
      title: "Rubber Winding Machine",
      description: "Scope of Work: PLC , HMI Program Devlopment, Electrical Control Panel",
      image: "https://drive.google.com/uc?export=view&id=17bM4LNNJ7N2W8AISy4CIVDo7S8_dL3PA",
      category: "Branding strategies",
    },
  ];
  


  const [projectsData, setProjectsData] = useState<Project[]>(initialProjects); // Default state is initialProjects

  // const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const CACHE_KEY = "projectsData";
  const CACHE_TIMESTAMP_KEY = "projectsCacheTimestamp";
  const CACHE_EXPIRATION_MS = 60 * 60 * 1000; // 1 hour

  useEffect(() => {
    const fetchProjects = async () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

      if (cachedData && cachedTimestamp) {
        const cacheAge = Date.now() - parseInt(cachedTimestamp, 10);

        if (cacheAge < CACHE_EXPIRATION_MS) {
          setProjectsData(JSON.parse(cachedData));
          // setLoading(false);
          return;
        }
      }

      try {
        const response = await axios.get("/api/content/projects");
        const projectsList = response.data.content.projectsList;
        setProjectsData(projectsList);
        localStorage.setItem(CACHE_KEY, JSON.stringify(projectsList));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching projects data:", error);
        const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=jWiOjkrf2ctn2AgdYjCviqqnE6ug9Aidd_OROLJcY_0LmgfZYVE-7st50YzWi5_2L3aAFqee5F2Ppmd-pptFj4drARAV7L3xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNsCMzeldO4Xb_scTkAnMat5qCrKwegdmpVCvGZHadmqfYT3XWzQJwz-y7I4-Gds87a84TYTPQIyHJ2wmYtgjIjbkze09Tcvtg&lib=MLI_HfzysNsvwOtnrQy7NCvZ1uKL4_q0K");
        const projectsList = response.data.content.projectsList;
        setProjectsData(projectsList);
        // setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const closeLightbox = () => {
    setSelectedImage(null); // Clear the selected image to close the lightbox
  };

  const projectsList = useMemo(
    () =>
      projectsData.map((project) => (
        <div
          key={project.id}
          className="bg-[#232323] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 cursor-pointer"
          onClick={() => setSelectedImage(project.image)} // Open lightbox on click
        >
          <Image
            src={project.image}
            alt={project.title}
            width={700}
            height={400}
            className="w-full h-[350px] object-cover"
          />
          <div className="p-4">
            <h2
              className={`text-xl font-bold mb-2 ${
                project.category === "Ads Production"
                  ? "text-[#ff7d38]"
                  : "text-[#ff7d38]"
              }`}
            >
              {project.title}
            </h2>
            <p className="text-white text-sm mb-4">{project.description}</p>
          </div>
        </div>
      )),
    [projectsData]
  );

  return (
    <div id="projects-section" className="w-full px-4 py-8 bg-white">
      <h1 className="text-5xl font-medium mb-12 text-center text-black">
        Our Projects
      </h1>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {projectsList}
        </div>
      

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected project"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
