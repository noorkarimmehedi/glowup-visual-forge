import { RainbowButton } from "@/components/ui/rainbow-button";
import { Logo } from "@/components/ui/logo";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const DELIVERABLES = [
  "Make your brand pop (new color palette)",
  "Roast/Redesign of your landing page",
  "Redesign the Design systems",
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
          <Logo className="w-7 h-7 text-gray-900" />
          <div className="flex flex-col gap-0">
            <h1 className="text-xl font-semibold text-gray-900 leading-tight">
              Makeovers Crafting Beautiful
            </h1>
            <span className="text-2xl text-gray-900 leading-tight">Stuff for Beautiful "Souls".</span>
          </div>
        </div>

        {/* Why section */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-base font-medium text-gray-900 flex items-center gap-2"><span className="text-gray-400">I.</span> Why?</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Makeovers partner with founders and startups to create high-converting, meaningful and purpose-driven design for users.
          </p>
        </div>

        {/* What you will get section */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-base font-medium text-gray-900 flex items-center gap-2"><span className="text-gray-400">II.</span> What you will get?</h2>
          </div>
          <div className="flex flex-col gap-2">
            {DELIVERABLES.map((option) => (
              <Checkbox
                key={option}
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
              >
                <span>{option}</span>
              </Checkbox>
            ))}
          </div>
        </div>

        {/* Delivery time */}
        <div className="mb-6">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-base font-medium text-gray-900 flex items-center gap-2"><span className="text-gray-400">III.</span> 5-7 days delivery time</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Business days are Monday through Friday, excluding London public holidays. Due to spikes in demand, some requests could take longer than usual.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative">
          <RainbowButton className="w-full mx-auto text-xs mt-4 px-4">
            $999 - Makeover my product
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};
