"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo1.png";
import FacebookIcon from "@/assets/social-facebook.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";

import { useEffect, useState } from "react";

export const Footer = () => {

  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    // Fetch the logo URL from the API
    const fetchLogo = async () => {
      try {
        const response = await fetch("/api/content/aboutUsSection"); // Replace with your actual API endpoint
        const data = await response.json();
        setLogoUrl(data.content.imageUrl); // Assuming API response contains `imageUrl`
        console.log(data.content.imageUrl);
      } catch (error) {
        console.error("Error fetching logo:", error);
        const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=nlaUMw9FNa1EIqEuKLu-gjrPZTAxppG7Ziwc7GEhbdRwh2nOrIPC6-BfBnAo2DQlvyS35k0QYkWOAcylyFqhm0OPRqQO4bJym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPqMLSOjrwHZzK4mYvDdiHLGQJ-sHsTjH8OGIT8v3wDXNf-klVZLuzilP1FveXtpdQO_gPawdAHBn8CdIZfxHGG40252Hhbnptz9Jw9Md8uu&lib=MmfELZ3pWjpi07YwspSVeGEoLBlaE9kY8"); // Replace with your actual API endpoint
        const data = await response.json();
        setLogoUrl(data.content.imageUrl);
      }
    };

    fetchLogo();
  }, []);

  return (
    <footer
      className="relative text-white py-12"
      style={{
        backgroundImage: `url('/assets/wallpaper.jpg')`,
        backgroundAttachment: "fixed", // Enables parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="text-left mb-8 lg:mb-0">
            <div className="mb-4">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="Company Logo"
                  width={200}
                  height={200}
                  className="mx-auto md:mx-0 bg-white rounded-lg"
                />
              ) : (
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={200}
                  height={200}
                  className="mx-auto md:mx-0 bg-white rounded-lg"
                />
              )}
            </div>
            <p className="text-sm md:text-base">
              We are committed to developing custom automation and controls
              solutions that meet and exceed your expectations.
            </p>
          </div>

          {/* Our Services */}
          <div className="text-left mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-4 text-orange-400">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>SCADA/HMI</li>
              <li>Industrial Controls</li>
              <li>System Automation</li>
              <li>Maintenance and Repair</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-left mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-4 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="text-left">
  <h3 className="text-lg font-bold text-orange-400 mb-4">
    Get In Touch
  </h3>
  <ul className="space-y-2">
    <li className="flex items-start text-sm md:text-lg text-white">
      <span className="text-xl mr-3">📍</span>
      <div>
        <span className="block font-semibold">Arjunwad, Tal-Shirol, Dist-Kolhapur 416120</span>
        <span className="block font-semibold text-white">Maharashtra, India</span>
      </div>
    </li>
    <li className="flex items-start text-sm md:text-lg text-white">
      <span className="text-xl mr-3">📞</span>
      <div>
        <span className="block font-semibold">+91 7057272626</span>
      </div>
    </li>
    <li className="flex items-start text-sm md:text-lg text-white">
      <span className="text-xl mr-3">📧</span>
      <div className="max-w-full">
        <a
          href="mailto:siddhivinayakengineers19@gmail.com"
          className="underline text-white break-words"
        >
          siddhivinayakengineers19@gmail.com
        </a>
      </div>
    </li>
    <li className="flex items-start text-sm md:text-lg text-white">
      <span className="text-xl mr-3">⏱</span>
      <div>
        <span className="block font-semibold">24/7 Emergency Service</span>
      </div>
    </li>
  </ul>
</div>


        </div>

        {/* Social Media */}
        <div className="mt-12 flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/siddhivinayakengineers19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <SocialInsta className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <SocialLinkedIn className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="https://www.facebook.com/SiddhivinayakEngineerss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FacebookIcon className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400 relative z-10">
        &copy; 2024 Siddhivinayak Engineers, Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
