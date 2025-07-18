import React from 'react';
import { Flame } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Jikroy",
      role: "Carry",
      icon: "./carry.png",
      description: "Young fire with the heart of a phoenix",
      stats: { kda: "3.2", winrate: "21" },
      phoenixTitle: "The Rising Inferno"
    },
    {
      name: "Inyourdream",
      role: "Midlane",
      icon: "./midlane.png",
      description: "The eternal flame that leads from the front",
      stats: { kda: "3.8", winrate: "27" },
      phoenixTitle: "The Immortal Flame"
    },
    {
      name: "Fbz",
      role: "Offlane",
      icon: "./offlaner.png",
      description: "Veteran wisdom burning bright",
      stats: { kda: "2.4", winrate: "24" },
      phoenixTitle: "The Ancient Spark"
    },
    {
      name: "Dalul",
      role: "Support",
      icon: "./softsupport.png",
      description: "New phoenix learning to soar",
      stats: { kda: "2.1", winrate: "22" },
      phoenixTitle: "The Newborn Fire"
    },
    {
      name: "Varizh",
      role: "HardSupport",
      icon: "./hardsup.png",
      description: "The flame that lights the path to victory",
      stats: { kda: "1.8", winrate: "28" },
      phoenixTitle: "The Guiding Light"
    },
    {
      name: "SundaBule",
      role: "HeadCoach",
      icon: "./coach.png",
      description: "The strategist behind the flame — guiding each rebirth with wisdom and clarity.",
      stats: { kda: "1.8", winrate: "28" },
      phoenixTitle: "The Mind of the Flame"
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-fuchsia-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
              The Phoenix Squadron
            </h2>
            <Flame className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Five flames united as one, each phoenix bringing their unique fire to create an unstoppable inferno
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-2xl border border-fuchsia-500/30 hover:border-fuchsia-500/60 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Phoenix Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-fuchsia-500/30">
                    <img src={member.icon} alt={member.name} className="w-full h-full rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-fuchsia-400 text-sm font-medium">{member.role}</p>
                    <p className="text-indigo-400 text-xs italic">{member.phoenixTitle}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{member.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700 group-hover:border-fuchsia-500/30 transition-colors">
                  <div className="text-center">
                    <div className="text-fuchsia-400 font-bold text-lg">{member.stats?.kda}</div>
                    <div className="text-gray-500 text-xs">KDA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-violet-400 font-bold text-lg">{member.stats.winrate}</div>
                    <div className="text-gray-500 text-xs">Age</div>
                  </div>
                  <div className="text-center">
                    <Flame className="w-5 h-5 text-indigo-400 mx-auto animate-pulse" />
                    <div className="text-gray-500 text-xs">Phoenix</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phoenix Formation */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-violet-900/20 via-purple-900/30 to-indigo-900/20 p-8 rounded-2xl border border-fuchsia-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-fuchsia-300 mb-6">The Phoenix Formation</h3>
            <div className="grid grid-cols-6 gap-4 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg shadow-fuchsia-500/30">
                    <img src={member.icon} className="w-12 h-12 object-cover rounded-full" alt="" />
                  </div>
                  <p className="text-fuchsia-400 text-xs font-medium">{member.name}</p>
                  <p className="text-gray-500 text-xs">{member.role.split(' ')[0]}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 text-fuchsia-400 animate-pulse" />
              <p className="text-gray-300 text-sm italic">United we burn, divided we fall</p>
              <Flame className="w-5 h-5 text-fuchsia-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
