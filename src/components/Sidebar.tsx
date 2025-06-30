
import { Check } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="h-full bg-white p-8 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-normal text-gray-900 mb-1">
            makeover <span className="text-gray-400">of parts.ifs.tools</span>
          </h1>
        </div>

        {/* Typography section */}
        <div className="mb-8">
          <p className="text-xs text-gray-600 mb-1">Typography selection: <span className="font-medium">Britti Sans</span>,</p>
          <p className="text-xs text-gray-600">
            <span className="font-medium">why?</span> Britti Sans is sharp and structured without feeling cold — clean enough to feel pro, soft enough to still feel human.
          </p>
        </div>

        {/* Why section */}
        <div className="mb-8">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <h2 className="text-base font-medium text-gray-900">Why?</h2>
          </div>
          <p className="text-gray-700 mb-2 font-medium text-sm">You've got a great product.</p>
          <p className="text-gray-700 text-sm">Let's make sure your visuals match.</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 text-xs leading-relaxed">
            Makeover gives your logo, site, app a glow-up that turns heads (and converts).
          </p>
        </div>

        {/* What you will get section */}
        <div className="mb-8">
          <div className="flex items-start gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
            <h3 className="text-base font-medium text-gray-900">What you will get?</h3>
          </div>
          
          <div className="space-y-2 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <Check className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
              <span>Make your brand pop (new color palette, new</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
              <span>Roast/Redesign of your landing page</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
              <span>Redesign of 1-2 screens of your app</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-xl font-bold text-gray-900">$999</span>
            <span className="text-base text-gray-500 line-through">$1279</span>
          </div>
          <p className="text-xs text-gray-600 mb-1">No calls. No fluff. Straight to your inbox.</p>
          <p className="text-xs text-gray-600 mb-4">2 spots available.</p>
        </div>

        {/* Delivery info */}
        <div className="mb-6">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs font-medium text-gray-900">5-7 days delivery time</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Business days are Monday through Friday, excluding Poland public holidays. Due to spikes in demand, some requests could take longer than usual.
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white px-6 py-3 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors w-full">
          $999 - Makeover my product
        </button>
      </div>
    </div>
  );
};
