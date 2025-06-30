
export const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Psychology section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-3 gap-8 items-center mb-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-coral rounded-full mx-auto mb-4"></div>
              <h3 className="font-medium text-gray-900 mb-2">Exile</h3>
              <p className="text-sm text-gray-600 italic">Strong emotions, pain, attraction</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-teal rounded-star mx-auto mb-4 transform rotate-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Firefighter</h3>
              <p className="text-sm text-gray-600 italic">Anchored stability, sense of safety, protective shield</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-lavender rounded-lg mx-auto mb-4 transform rotate-45"></div>
              <h3 className="font-medium text-gray-900 mb-2">Manager</h3>
              <p className="text-sm text-gray-600 italic">Strategic structured thinker</p>
            </div>
          </div>
        </div>

        {/* Typography showcase */}
        <div className="bg-lavender rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-6xl font-bold text-navy mb-4">Aa</div>
              <div className="space-y-1">
                <div className="text-sm text-navy/70">Regular</div>
                <div className="text-lg font-medium text-navy">Medium</div>
                <div className="text-xl font-semibold text-navy">Semibold</div>
                <div className="text-2xl font-bold text-navy">Bold</div>
              </div>
            </div>
            <div className="text-xs text-navy/60 max-w-xs">
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>0123456789#$%&@!{"}{"}</p>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="bg-coral rounded-2xl p-8 text-white shadow-sm">
          <h2 className="text-3xl font-light mb-4">If music be the food of love, play on.</h2>
          <p className="text-lg font-light mb-6">Be not afraid of greatness.</p>
          <p className="text-sm opacity-90 mb-8">Some are born great, some achieve greatness and some have greatness thrust upon them.</p>
          <button className="bg-white text-coral px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Join Founding Circle
          </button>
        </div>

        {/* Color palette */}
        <div className="grid grid-cols-5 gap-4">
          <div className="h-32 bg-coral rounded-lg"></div>
          <div className="h-32 bg-teal rounded-lg"></div>
          <div className="h-32 bg-lavender rounded-lg"></div>
          <div className="h-32 bg-navy rounded-lg"></div>
          <div className="h-32 bg-sage rounded-lg"></div>
        </div>

        {/* Bottom color dots and branding */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-coral rounded-full"></div>
            <div className="w-8 h-8 bg-teal rounded-star transform rotate-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
            <div className="w-8 h-8 bg-lavender rounded-lg transform rotate-45"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-navy">Parts</div>
            <div className="text-xs text-gray-500">Made in Framer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
