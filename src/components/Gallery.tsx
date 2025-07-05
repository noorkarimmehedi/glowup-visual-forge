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
            src="/my-image-07.webp" 
            alt="Gallery Visual 5" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Sixth image section */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-iamge-06.webp" 
            alt="Gallery Visual 6" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Seventh image section */}
        <div className="bg-[#ffffff] rounded-md">
          <img 
            src="/my-image-08.webp" 
            alt="Gallery Visual 7" 
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Quote section */}
        <div className="bg-coral rounded-2xl p-6 md:p-8 text-white shadow-sm">
          <h2 className="text-2xl md:text-3xl font-light mb-4">If music be the food of love, play on.</h2>
          <p className="text-base md:text-lg font-light mb-6">Be not afraid of greatness.</p>
          <p className="text-sm opacity-90 mb-8">Some are born great, some achieve greatness and some have greatness thrust upon them.</p>
          <a href="https://cal.com/noor-foumnf/15min" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-coral px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Book Your Slot!
            </button>
          </a>
        </div>

        {/* Image section */}
        <div className="bg-[#ffffff] rounded-md relative">
          <img 
            src="/F3gZWEqX0AwYpJp.webp" 
            alt="Background Image" 
            className="w-full h-64 md:h-[32rem] object-cover rounded-md shadow-md"
          />
          <img 
            src="/imgi_51_678aaf5fa6566867d7c1e23c_Off-Menu_Walsh_Gif_FlyingCar-ezgif.com-gif-to-webp-converter-p-500.webp" 
            alt="Flying Car" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 object-contain"
          />
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
