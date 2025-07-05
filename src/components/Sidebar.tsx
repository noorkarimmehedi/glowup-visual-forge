import { RainbowButton } from "@/components/ui/rainbow-button";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const DELIVERABLES = [
  "Shopify Store development",
  "Development Custom website",
  "Development/Redesign landing page",
  "Development/Redesign the Design systems",
];

export const Sidebar = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="font-open-runde min-h-screen md:h-full bg-white px-2 md:px-8 md:pr-12 py-8 flex flex-col gap-16 justify-between">
      {/* Top Section - Empty for now */}
      <div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-lg mx-auto md:max-w-none">
        {/* Header */}
        <div className="mb-4 flex flex-col items-start gap-1.5">
          <div className="flex flex-col gap-0">
            <h1 className="text-[18px] font-semibold text-gray-900 leading-tight uppercase">
              Off-design Crafting Beautiful
            </h1>
            <span className="text-[20px] text-gray-900 leading-tight uppercase">Stuff for Beautiful "Souls".</span>
          </div>
        </div>

        {/* Why section */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-sm font-medium text-gray-900 flex items-center gap-2 uppercase"><span className="text-gray-400">I.</span> WHAT?</h2>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            Off-design partner with founders and startups to create high-converting, meaningful and purpose-driven design for users.
          </p>
        </div>

        {/* What you will get section */}
        <div className="mb-0">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-sm font-medium text-gray-900 flex items-center gap-2 uppercase"><span className="text-gray-400">II.</span> WHAT DO WE OFFER?</h2>
          </div>
          <div className="flex flex-col gap-1">
            {DELIVERABLES.map((option) => (
              <Checkbox
                key={option}
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
              >
                <span className="font-bold">{option}</span>
              </Checkbox>
            ))}
          </div>
        </div>

        {/* SVG Images Section */}
        <div className="mb-0">
          <div className="flex items-center gap-3 mb-0">
            <img 
              src="/download (3).svg" 
              alt="Icon 3" 
              className="w-[5rem] h-[5rem] opacity-60"
            />
            <img 
              src="/download (1).svg" 
              alt="Icon 1" 
              className="w-[4.5rem] h-[4.5rem] opacity-60"
            />
            <img 
              src="/download (2).svg" 
              alt="Icon 2" 
              className="w-[3rem] h-[3rem] opacity-60"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-gray-700 leading-relaxed">
              "Off-design" has—and still—partners with some of the most successful founders in the world after only launching in 2024.
            </p>
            <p className="text-sm text-gray-500 pb-4">
              © Off-design
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative flex flex-col gap-3 mt-1">
          <a href="https://cal.com/noor-foumnf/15min" target="_blank" rel="noopener noreferrer" className="w-full">
            <RainbowButton className="w-full text-xs px-4 py-3">
              Book a Free Audit Call
            </RainbowButton>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=8801733670129&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full">
            <RainbowButton className="w-full text-xs px-4 py-[0.575rem] flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><g clipPath="url(#clip0_4418_8964)"><path d="M21.98 11.4104C21.64 5.61044 16.37 1.14045 10.3 2.14045C6.12004 2.83045 2.77005 6.22043 2.12005 10.4004C1.74005 12.8204 2.24007 15.1104 3.33007 17.0004L2.44006 20.3104C2.24006 21.0604 2.93004 21.7404 3.67004 21.5304L6.93005 20.6304C8.41005 21.5004 10.14 22.0004 11.99 22.0004C17.63 22.0004 22.31 17.0304 21.98 11.4104ZM16.8801 15.7204C16.7901 15.9004 16.68 16.0704 16.54 16.2304C16.29 16.5004 16.02 16.7004 15.72 16.8204C15.42 16.9504 15.09 17.0104 14.74 17.0104C14.23 17.0104 13.68 16.8905 13.11 16.6405C12.53 16.3905 11.9601 16.0604 11.3901 15.6504C10.8101 15.2304 10.2701 14.7604 9.75005 14.2504C9.23005 13.7304 8.77003 13.1804 8.35003 12.6104C7.94003 12.0404 7.61005 11.4704 7.37005 10.9004C7.13005 10.3304 7.01006 9.78045 7.01006 9.26045C7.01006 8.92044 7.07006 8.59044 7.19006 8.29044C7.31006 7.98044 7.50007 7.70045 7.77007 7.45045C8.09007 7.13045 8.44005 6.98045 8.81005 6.98045C8.95005 6.98045 9.09002 7.01044 9.22002 7.07044C9.35002 7.13044 9.47005 7.22044 9.56005 7.35044L10.72 8.99043C10.81 9.12043 10.88 9.23043 10.92 9.34043C10.97 9.45043 10.99 9.55043 10.99 9.65043C10.99 9.77043 10.9501 9.89045 10.8801 10.0104C10.8101 10.1304 10.72 10.2504 10.6 10.3704L10.22 10.7704C10.16 10.8304 10.1401 10.8904 10.1401 10.9704C10.1401 11.0104 10.15 11.0504 10.16 11.0904C10.18 11.1304 10.1901 11.1604 10.2001 11.1904C10.2901 11.3604 10.45 11.5704 10.67 11.8304C10.9 12.0904 11.1401 12.3604 11.4001 12.6204C11.6701 12.8904 11.9301 13.1304 12.2001 13.3604C12.4601 13.5804 12.68 13.7304 12.85 13.8204C12.88 13.8304 12.9101 13.8504 12.9401 13.8604C12.9801 13.8804 13.0201 13.8804 13.0701 13.8804C13.1601 13.8804 13.2201 13.8504 13.2801 13.7904L13.66 13.4104C13.79 13.2804 13.9101 13.1904 14.0201 13.1304C14.1401 13.0604 14.2501 13.0204 14.3801 13.0204C14.4801 13.0204 14.5801 13.0404 14.6901 13.0904C14.8001 13.1404 14.92 13.2004 15.04 13.2904L16.7001 14.4704C16.8301 14.5604 16.92 14.6704 16.98 14.7904C17.03 14.9204 17.0601 15.0404 17.0601 15.1804C17.0001 15.3504 16.9601 15.5404 16.8801 15.7204Z" fill="white" style={{fill: 'var(--fillg)'}}/></g><defs><clipPath id="clip0_4418_8964"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
              Chat
            </RainbowButton>
          </a>
        </div>
      </div>
    </div>
  );
};
