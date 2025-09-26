import React from "react";
import "./Footer.css";
import startItUpLogo from "./assets/start-it-up logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-8 font-helvetica">
      <div className="max-w-6xl mx-auto">
        {/* Top section with logo and initiative text */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <img src={startItUpLogo} alt="startitup logo" />
          <div className="text-left sm:text-right mt-4 sm:mt-0">
            <div className="text-lg mb-2">An Initiative By</div>
            <div className="text-4xl font-bold">BRIK</div>
          </div>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-4xl font-extrabold tracking-tight mb-10">
              Quick Links
            </h3>
            <nav className="space-y-4 text-left">
              <div>
                <a href="#" className="text-xl  hover:underline">
                  About
                </a>
              </div>
              <div>
                <a href="#" className="text-xl  hover:underline">
                  Partners
                </a>
              </div>
              <div>
                <a
                  href="https://app.makemypass.com/event/start-it-up"
                  className="text-xl  hover:underline"
                >
                  Apply Now
                </a>
              </div>
            </nav>
          </div>

          {/* Contact Section (Right Aligned) */}
          <div className="flex flex-col items-end">
            <h3 className="text-4xl font-extrabold tracking-tight mb-8">
              Contact
            </h3>
            <div className="flex flex-col items-end gap-1 text-lg text-right">
              <p>BRIK COMMUNITY</p>
              <p>Kerala, India</p>
              <p>
                <strong className="font-bold">Email:</strong>{" "}
                brikcommunity@gmail.com
              </p>
              <p>
                <strong className="font-bold">Phone/WhatsApp:</strong>{" "}
                +91-9961020050
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
