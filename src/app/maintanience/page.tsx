import React from "react";

const MaintainPage = () => {
  return (
    <div className="bg-white text-black min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 uppercase">
        Upgrading, Maintenance, and Repair
      </h1>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-justify leading-relaxed">
        {/* First Paragraph */}
        <p className="text-lg sm:text-xl mb-6">
          Your existing controls and automation equipment cannot be ignored and
          needs to be upgraded when system components are no longer available
          or software is no longer supported. We can upgrade your existing
          control and automation equipment, so you no longer have to worry
          about parts availability, software support, or making updates to your
          automation programs.
        </p>

        {/* Second Paragraph */}
        <p className="text-lg sm:text-xl mb-6">
          We offer to monitor and service your control system remotely utilizing
          remote VPN access capabilities, saving you time and money. We will
          recommend any preventative maintenance procedures and train your
          personnel to perform maintenance items.
        </p>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Why Remote Maintenance and Service?
        </h2>

        {/* Paragraph with Bullet Points */}
        <p className="text-lg sm:text-xl mb-6">
          Maintenance and ongoing service from your system integrators is
          essential to a well-running system. We are able to provide remote
          maintenance to locations throughout North America.
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Eliminates travel costs for service</li>
          <li>Eliminates the &rsquo;wait&rsquo; time for service to begin</li>
          <li>We are the backup support to your staff for your system maintenance or repair</li>
          <li>
            Disaster recovery: we save a copy of your programs and updates on
            our file server, providing you with off-site backup for recovery if
            needed
          </li>
        </ul>

        {/* Contact Section */}
        <p className="text-lg sm:text-xl">
          <span className="font-bold text-red-600">Contact us</span> for
          assistance
        </p>
      </div>
    </div>
  );
};

export default MaintainPage;
