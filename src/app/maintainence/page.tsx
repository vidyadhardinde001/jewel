import React from "react";

const MaintainPage = () => {
  return (
    <div className="bg-white text-black min-h-screen py-12 px-6 sm:px-10 lg:px-16">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-800">
        Upgrading, Maintenance, and Repair Services
      </h1>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto text-justify leading-relaxed mb-12">
        <p className="text-lg sm:text-xl mb-6">
          In today&rsquo;s rapidly evolving technological landscape, keeping your control and automation systems updated is crucial for ensuring operational efficiency, safety, and reliability. Aging equipment and outdated software can result in costly downtime and pose significant risks to your operations.
        </p>
        <p className="text-lg sm:text-xl mb-6">
          At <span className="font-semibold text-[#ff7d38]">Siddhivinayak Engineers</span>, we specialize in providing end-to-end upgrading, maintenance, and repair services for control systems across industries. Our expert team ensures your systems are always at peak performance, helping you avoid unnecessary disruptions and maximize productivity.
        </p>
      </div>

      {/* Why Upgrading is Essential */}
      <section className="bg-gray-50 py-10 px-6 shadow-md rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#ff7d38]">
          Why Upgrade Your Control Systems?
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-justify mb-6">
          Upgrading your control systems offers several benefits that extend beyond basic functionality:
        </p>
        <ul className="list-disc pl-8 text-lg sm:text-xl leading-relaxed space-y-4">
          <li>
            <strong>Enhanced Reliability:</strong> Modern systems are more robust and less prone to failures.
          </li>
          <li>
            <strong>Improved Efficiency:</strong> Take advantage of the latest technology to optimize your operations.
          </li>
          <li>
            <strong>Cost Savings:</strong> Avoid the escalating costs of maintaining outdated equipment.
          </li>
          <li>
            <strong>Increased Safety:</strong> Newer systems comply with the latest safety standards, ensuring a safer workplace.
          </li>
          <li>
            <strong>Scalability:</strong> Prepare for future growth with systems designed to handle expansion.
          </li>
        </ul>
      </section>

      {/* Our Services */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#ff7d38] text-center">
          Comprehensive Maintenance and Repair Services
        </h2>
        <p className="text-lg sm:text-xl mb-6 text-justify">
          We provide a wide range of maintenance and repair solutions tailored to meet your specific needs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-gray-800">
              Preventative Maintenance
            </h3>
            <p>
              Proactively identify and resolve issues before they cause downtime. Our team provides scheduled inspections, cleaning, and calibration for long-term system health.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-gray-800">
              Emergency Repairs
            </h3>
            <p>
              Unexpected breakdowns? Our rapid-response team ensures minimal downtime with quick and effective repair services.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-gray-800">
              Remote Monitoring & Support
            </h3>
            <p>
              Save time and reduce costs with our remote monitoring solutions. Utilizing VPN access, we can diagnose and resolve issues without needing an on-site visit.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-gray-800">
              Disaster Recovery
            </h3>
            <p>
              We securely store backups of your control programs and system updates, providing quick recovery in case of data loss or system failure.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Choosing Us */}
      <section className="bg-[#ff7d38] text-white py-12 px-6 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-8 text-lg sm:text-xl leading-relaxed space-y-4">
          <li>Over a decade of experience in control system integration and maintenance.</li>
          <li>Certified engineers and technicians trained on the latest tools and standards.</li>
          <li>Proven track record of delivering on-time, high-quality solutions.</li>
          <li>Dedicated customer support for all your queries and needs.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mt-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&rsquo;s Elevate Your Systems Today!
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Contact us to learn more about how our services can benefit your operations.
          </p>
          <a
            href="/contactus"
            className="inline-block bg-[#ff7d38] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#e66d2d] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default MaintainPage;
