"use client";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Transition.module.css";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendVerificationEmail = async () => {
    setErrorMessage(null);
    try {
      const response = await fetch(
        "https://sdofficial-r1zr.onrender.com/api/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      if (!response.ok) throw new Error("Error sending verification email");

      // alert("Verification email sent. Please check your inbox.");
      const data = await response.json();
      console.log(data);
    if (data.message === 'Verification email sent') {
      alert("Verification email sent. Please check your inbox.");
      setEmailVerified(true);
      // setEmailVerified(true);
      // setErrorMessage(null); 
      // alert("Email Verified Successfully!");
      console.log("Email Verified:", emailVerified);
    } else {
      throw new Error(data.message || "Verification failed");
    }
    if (data.verified) {
      setEmailVerified(true);
      console.log("Email Verified:", emailVerified);
      alert("Email successfully verified! You can now submit the form.");
    } 
    } catch (error) {
      setErrorMessage("Failed to verify email. Please try again.");
      console.error("Failed to send verification email:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setMessageSent(false);

    if (!emailVerified) {
      setErrorMessage("Please verify your email before submitting.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://sdofficial-r1zr.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Error sending message");

      setMessageSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      // setEmailVerified(false);
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CSSTransition in={true} timeout={300} classNames={styles} unmountOnExit>
      <div className={styles.fade}>
        <section className="max-w-screen-xl mx-auto px-4 py-12 bg-gradient-to-r from-white to-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-start mx-auto lg:mx-[200px] mb-[100px]">
            {/* Left Side: Contact Info */}
            <div className="w-full md:w-6/12 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-sm tracking-[10px] text-gray-500 font-medium">CONTACT</h2>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-medium text-black leading-tight">
                Any Questions? <br /> Write or call us. <br /> We will respond within 12hrs :)
              </h2>
              <div className="mt-8 space-y-4 text-gray-700">
                <p className="flex items-center justify-center md:justify-start">
                  📞 +91 7057272626
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  📧 siddhivinayakengineers19@gmail.com
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  📍 Arjunwad, Tal-Shirol, Dist-Kolhapur 416120
                  Maharashtra, India
                </p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122237.18993477206!2d74.628396!3d16.781044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12102e1214d0b%3A0x1527ff323ff45359!2sSiddhivinayak%20Engineers!5e0!3m2!1sen!2sus!4v1727588966231!5m2!1sen!2sus"
                width="100%"
                height="250"
                className="mt-8 border border-gray-300 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full md:w-5/12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6D20]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6D20]"
                  required
                />
                <button
                  type="button"
                  onClick={sendVerificationEmail}
                  className={`w-full py-2 rounded ${
                    emailVerified ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                  }`}
                  disabled={emailVerified}
                >
                  Verify Email
                </button>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6D20]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE6D20]"
                  required
                ></textarea>

                <div className="flex items-start space-x-2 mt-4">
                  <input type="checkbox" className="mt-1" required />
                  <p className="text-sm text-gray-500">
                    I consent to the processing of my personal data by the Administrator in accordance with the Privacy Policy <span className="text-[#FE6D20]">*</span>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-[#FE6D20] hover:bg-[#000000] text-white rounded-md font-semibold tracking-wide flex justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </form>

              {messageSent && <p className="text-green-600 mt-4">Message sent successfully!</p>}
              {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
            </div>
          </div>
        </section>
      </div>
    </CSSTransition>
  );
};

export default ContactSection;
