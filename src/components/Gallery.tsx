export const Gallery = () => {
  return (
    <div className="p-2 md:p-0">
      <div className="space-y-2 md:space-y-4">
        {/* Psychology section */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-image-01.webp" 
            alt="Gallery Visual" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Typography showcase */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-image-04.webp" 
            alt="Typography Visual" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Third image section */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-image-03.webp" 
            alt="Gallery Visual 3" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Fourth image section */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-image-05.webp" 
            alt="Gallery Visual 4" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Fifth image section */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-iamge-06.webp" 
            alt="Gallery Visual 5" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Quote section */}
        <div className="bg-coral rounded-2xl p-6 md:p-8 text-white shadow-sm">
          <h2 className="text-2xl md:text-3xl font-light mb-4">If music be the food of love, play on.</h2>
          <p className="text-base md:text-lg font-light mb-6">Be not afraid of greatness.</p>
          <p className="text-sm opacity-90 mb-8">Some are born great, some achieve greatness and some have greatness thrust upon them.</p>
          <button className="bg-white text-coral px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Join Founding Circle
          </button>
        </div>

        {/* Color palette */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          <div className="h-24 md:h-32 bg-coral rounded-lg"></div>
          <div className="h-24 md:h-32 bg-teal rounded-lg"></div>
          <div className="h-24 md:h-32 bg-lavender rounded-lg"></div>
          <div className="h-24 md:h-32 bg-navy rounded-lg"></div>
          <div className="h-24 md:h-32 bg-sage rounded-lg"></div>
        </div>

        {/* Bottom color dots and branding */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="text-2xl md:text-4xl font-bold text-navy">OFF-DESIGN</div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/imgi_1_VJV5gSNbkcz7AdLESCPRkV5WFk.png" 
              alt="Logo" 
              className="h-8 md:h-12 w-auto animate-spin-fast"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
