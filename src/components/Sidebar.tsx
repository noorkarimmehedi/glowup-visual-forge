import { RainbowButton } from "@/components/ui/rainbow-button";
import { Logo } from "@/components/ui/logo";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const DELIVERABLES = [
  "Make your brand pop (new color palette)",
  "Roast/Redesign of your landing page",
  "Redesign of 1-2 screens of your app",
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
    <div className="min-h-screen md:h-full bg-white px-6 md:px-8 md:pr-12 py-8 flex flex-col justify-between">
      {/* Top Section - Empty for now */}
      <div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-lg mx-auto md:max-w-none">
        {/* Header */}
        <div className="mb-4 flex flex-col items-start gap-1.5">
          <Logo className="w-5 h-5 text-gray-900" />
          <h1 className="text-xl font-normal text-gray-900">
            makeover <span className="text-gray-400">of parts.its.tools</span>
          </h1>
        </div>

        {/* Why section */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-base font-medium text-gray-900 font-inter flex items-center gap-2"><span className="text-gray-400">I.</span> Why?</h2>
          </div>
          <p className="text-gray-700 mb-2 font-medium text-sm font-geist-mono">You've got a great product.</p>
          <p className="text-gray-700 text-sm font-geist-mono">Let's make sure your <span className="font-bold">visuals match.</span></p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed font-geist-mono">
            Makeover gives your logo, site, app a glow-up that turns heads (and converts).
          </p>
        </div>

        {/* What you will get section */}
        <div className="mb-4">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-base font-medium text-gray-900 font-inter flex items-center gap-2"><span className="text-gray-400">II.</span> What you will get?</h2>
          </div>
          <div className="flex flex-col gap-2">
            {DELIVERABLES.map((option) => (
              <Checkbox
                key={option}
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
              >
                <span className="font-geist-mono">{option}</span>
              </Checkbox>
            ))}
          </div>
        </div>

        {/* Delivery time */}
        <div className="mb-6">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-base font-medium text-gray-900 font-inter flex items-center gap-2"><span className="text-gray-400">III.</span> 5-7 days delivery time</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed font-geist-mono">
            Business days are Monday through Friday, excluding Poland public holidays. Due to spikes in demand, some requests could take longer than usual.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative">
          <RainbowButton className="w-full text-sm font-inter mt-4">
            $999 - Makeover my product
          </RainbowButton>
          <div className="block md:hidden h-px border-t border-dashed border-gray-300 mt-2 mb-0 -mx-6"></div>
        </div>
      </div>
    </div>
  );
};
