import React from 'react';
import { Compass, MessageSquareCode, UserCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Compass,
      title: 'Local Property Guidance',
      description: 'Connect with a team focused on property opportunities in the Madurai area.',
      number: '01',
    },
    {
      icon: MessageSquareCode,
      title: 'Responsive Communication',
      description: 'Make it easy for prospective clients to reach us with their property questions.',
      number: '02',
    },
    {
      icon: UserCheck,
      title: 'Personalized Assistance',
      description: 'Share your requirements and discuss suitable property options.',
      number: '03',
    },
    {
      icon: HeartHandshake,
      title: 'Client-Focused Service',
      description: 'Designed around clear communication and a straightforward inquiry experience.',
      number: '04',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F5F2EB] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
            Our Service Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Why Choose Samee Reale Estates
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            A grounded, transparent, and responsive approach to real estate brokering and property consultation in Madurai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const IconComponent = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-stone-200/80 flex items-center justify-center text-[#C5A059] group-hover:bg-[#111518] group-hover:text-white group-hover:border-[#111518] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-xl font-medium text-stone-300 group-hover:text-[#C5A059] transition-colors">
                      {f.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">
                    {f.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-stone-400 group-hover:text-[#C5A059] transition-colors">
                  <span>Sambakulam &middot; Madurai</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
