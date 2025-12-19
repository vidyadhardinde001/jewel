import React from "react";
import Link from "next/link";

const ControlPage = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen py-10 px-4 sm:px-6 lg:px-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-black">
        Control Panel Manufacturing
      </h1>

      {/* Hero Section */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <img
          src="/assets/control-panel.jpg" // Replace with your actual image path
          alt="Control Panel Manufacturing"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center px-4">
            Excellence in Control Panel Manufacturing
          </h2>
        </div>
      </div>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#ff7d38]">
          What is Control Panel Manufacturing?
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Control panel manufacturing is a critical process in various industries, involving the design, assembly, and wiring of panels that house electrical and electronic components. These panels are essential for controlling machinery and processes efficiently.
        </p>

      </section>

      {/* Process Section */}
      <section className="bg-white py-10 px-6 shadow-inner rounded-lg mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#ff7d38] text-center">
          Steps in Control Panel Manufacturing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">1. Planning & Design</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Using tools like AutoCAD or EPLAN, the layout and design are meticulously planned to ensure efficient use of space and ease of maintenance.
            </p>
          </div>
          {/* Step 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">2. Component Selection</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Components such as circuit breakers, relays, PLCs, and power supplies are selected based on system requirements and standards like IEC or UL.
            </p>
          </div>
          {/* Step 3 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">3. Assembly</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Enclosures are fabricated, and components are securely mounted, ensuring safety and precision in the assembly process.
            </p>
          </div>
          {/* Step 4 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">4. Wiring</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Following detailed schematics, precise wiring ensures all components are interconnected seamlessly.
            </p>
          </div>
          {/* Step 5 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">5. Testing</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Every panel undergoes rigorous testing for functionality, safety, and compliance with industry standards.
            </p>
          </div>
          {/* Step 6 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg sm:text-xl mb-2">6. Delivery</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Panels are packaged and delivered with detailed documentation and installation guides.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#ff7d38]">
          Why Choose Us for Control Panel Manufacturing?
        </h2>
        <ul className="list-disc pl-6 text-lg sm:text-xl leading-relaxed space-y-4">
          <li>Expertise in designing panels for various industrial applications.</li>
          <li>Use of high-quality components from trusted brands.</li>
          <li>Strict adherence to international standards and safety protocols.</li>
          <li>On-time delivery and exceptional customer support.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-[#ff7d38] text-white py-10 px-6 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Ready to Start Your Project?
        </h2>
        <p className="text-center text-lg sm:text-xl leading-relaxed mb-6">
          Get in touch with us today for customized control panel solutions.
        </p>
        <div className="flex justify-center">
          <Link href="/contactus">
            <button className="bg-white text-green-800 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ControlPage;
