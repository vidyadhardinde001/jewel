import React from "react";
import Link from "next/link";

const FieldPage = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen py-10 px-4 sm:px-6 lg:px-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-black">
        Field Wiring
      </h1>

      {/* Hero Section */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <img
          src="/assets/wiring.jpg" // Replace with your actual image path
          alt="Field Wiring"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center px-4">
            Precision and Excellence in Field Wiring
          </h2>
        </div>
      </div>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
          What is Field Wiring?
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Field wiring refers to the installation and connection of electrical
          wiring between control panels, machines, sensors, actuators, and other
          equipment at an industrial site or in a building. It plays a vital
          role in implementing automation and electrical systems, ensuring
          seamless signal and power transfer for efficient operation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <img
            src="/assets/machine-wiring.jpg" // Replace with your actual image path
            alt="Machine Wiring"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="/assets/connections.jpg" // Replace with your actual image path
            alt="Control to Machine Connections"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-10 px-6 shadow-inner rounded-lg mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#ff7d38] text-center">
          Key Steps in Field Wiring
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              1. Site Inspection
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Assessing the site to understand the layout, machinery locations,
              and wiring paths for optimal installation.
            </p>
          </div>
          {/* Step 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              2. Cable Selection
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Choosing appropriate cables based on factors like power
              requirements, insulation, and environmental conditions.
            </p>
          </div>
          {/* Step 3 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              3. Cable Routing
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Planning and installing cable trays, conduits, and wireways to
              guide the cables safely and efficiently.
            </p>
          </div>
          {/* Step 4 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">4. Connection</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Connecting the cables to machines, sensors, and control panels,
              ensuring proper terminations and polarity.
            </p>
          </div>
          {/* Step 5 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">5. Testing</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Verifying the continuity, insulation resistance, and functionality
              of the wiring to ensure safety and performance.
            </p>
          </div>
          {/* Step 6 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              6. Documentation
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Providing detailed as-built drawings and wiring schematics for
              future reference and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Field Wiring Matters Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#ff7d38]">
          Why Field Wiring is Critical
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Field wiring is essential for ensuring safe and reliable operation of
          industrial systems. Poor or incorrect wiring can lead to downtime,
          equipment damage, and safety hazards. High-quality field wiring
          ensures:
        </p>
        <ul className="list-disc pl-6 text-lg sm:text-xl leading-relaxed space-y-4 mt-4">
          <li>Efficient communication between devices and control systems.</li>
          <li>Minimal power loss and optimal signal integrity.</li>
          <li>Compliance with industry standards and regulations.</li>
          <li>Enhanced durability in harsh environments.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-[#ff7d38] text-white py-10 px-6 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Need Assistance with Field Wiring?
        </h2>
        <p className="text-center text-lg sm:text-xl leading-relaxed mb-6">
          Contact us today for expert solutions in field wiring installation and
          support.
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

export default FieldPage;
