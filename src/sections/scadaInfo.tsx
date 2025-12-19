import Image from "next/image";

const ScadaPlcProgramming = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          SCADA & PLC Programming
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Revolutionizing industrial automation with advanced control systems.
        </p>
      </header>

      {/* Content Section */}
      <section className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What is SCADA?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              SCADA (Supervisory Control and Data Acquisition) is a system used
              to monitor and control industrial processes. It collects real-time
              data, provides graphical interfaces for operators, and ensures
              efficient management of industrial systems.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why PLC Programming?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PLC (Programmable Logic Controller) programming allows
              engineers to automate machines and processes in manufacturing.
              PLCs are robust, reliable, and can execute complex logic
              operations with ease, ensuring seamless integration with SCADA
              systems.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/scada-system.jpg"
              alt="SCADA System"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/plc-programming.jpg"
              alt="PLC Programming"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Applications of SCADA & PLC
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              SCADA and PLC systems are widely used in industries such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Manufacturing and production lines</li>
              <li>Water and wastewater management</li>
              <li>Energy distribution and power plants</li>
              <li>Oil and gas pipelines</li>
              <li>Building automation systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-16">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ScadaPlcProgramming;
