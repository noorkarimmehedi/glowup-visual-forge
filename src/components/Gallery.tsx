export const Gallery = () => {
  return (
    <div className="bg-gray-50 p-2 md:p-4">
      <div className="max-w-7xl mx-auto space-y-2 md:space-y-4">
        {/* Psychology section */}
        <div className="bg-white rounded-2xl p-0 md:p-0 shadow-sm overflow-hidden aspect-[4/3] flex items-center justify-center mt-0">
          <img 
            src="/my-image-01.png" 
            alt="Gallery Visual" 
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Typography showcase */}
        <div className="bg-lavender rounded-2xl p-0 md:p-0 shadow-sm overflow-hidden aspect-[4/3] flex items-center justify-center">
          <img 
            src="/my-image-02.png" 
            alt="Typography Visual" 
            className="w-full h-full object-cover rounded-xl shadow-md"
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
            <div className="w-6 md:w-8 h-6 md:h-8 bg-coral rounded-full"></div>
            <div className="w-6 md:w-8 h-6 md:h-8 bg-teal rounded-star transform rotate-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
            <div className="w-6 md:w-8 h-6 md:h-8 bg-lavender rounded-lg transform rotate-45"></div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="text-2xl md:text-4xl font-bold text-navy">Parts</div>
            <div className="text-xs text-gray-500">Made in Framer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
