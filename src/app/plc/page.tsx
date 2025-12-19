import React from "react";
import Image from "next/image"; // Import Image component for optimized image handling
import Link from "next/link";

const PLCPage = () => {
  return (
    <div className="bg-gray-100 text-black min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          PLC, HMI, SCADA Software Development
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          Enhancing Industrial Automation with Tailored Solutions
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            SCADA (Supervisory Control and Data Acquisition) or HMI (Human
            Machine Interface) systems allow operators, engineers, supervisors,
            and CEOs of manufacturing facilities to visualize, control, and
            analyze plant floor data to make decisions about improving
            processes.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            Our services include designing, programming, and deploying robust
            PLC, HMI, and SCADA solutions tailored to meet your specific needs.
            Whether modernizing existing systems or starting from scratch, we
            provide end-to-end expertise to enhance your operational efficiency.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            Industrial Automation and Engineering can connect all of your
            Ethernet-based Allen Bradley, Siemens, Omron, or Modbus controllers
            with your SQL databases to create a customized visualization client
            capable of:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg sm:text-xl leading-relaxed">
            <li>Controlling equipment</li>
            <li>Analyzing historical data</li>
            <li>Interfacing with ERP</li>
            <li>Creating production reports</li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="relative">
          <Image
            src="/assets/plc-img.png" // Replace with your actual image path
            alt="PLC, HMI, SCADA Software Development"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p className="text-center mt-4 text-sm text-gray-600">
            A modern PLC system connecting various industrial automation
            components.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-[#ff7d38] text-white py-10 px-6 rounded-lg mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Ready to Upgrade Your Automation Systems?
        </h2>
        <p className="text-center text-lg sm:text-xl leading-relaxed mb-6">
          Let us help you implement state-of-the-art PLC, HMI, and SCADA
          solutions to streamline your operations.
        </p>
        <div className="flex justify-center">
          <Link href="/contactus">
            <button className="bg-white text-[#ff7d38] py-2 px-6 rounded-lg font-semibold hover:bg-gray-100">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PLCPage;
