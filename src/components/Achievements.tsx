import React from 'react';
import { Trophy, Flame, Crown, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Phoenix Championship",
      description: "2024 SEA Dota Pro Circuit",
      icon: Crown,
      color: "from-indigo-400 via-purple-500 to-fuchsia-500",
      date: "March 2024",
      phoenixLevel: "Legendary"
    },
    {
      title: "Rising Flames Cup",
      description: "Phoenix Dominance Tournament",
      icon: Trophy,
      color: "from-fuchsia-400 via-purple-500 to-indigo-500",
      date: "January 2024",
      phoenixLevel: "Epic"
    },
    {
      title: "Perfect Inferno",
      description: "18-0 Victory Streak",
      icon: Flame,
      color: "from-purple-400 via-fuchsia-500 to-violet-400",
      date: "December 2023",
      phoenixLevel: "Mythical"
    },
    {
      title: "Phoenix Awakening",
      description: "Best New Team Award",
      icon: Zap,
      color: "from-violet-400 via-fuchsia-500 to-purple-500",
      date: "November 2023",
      phoenixLevel: "Rare"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-fuchsia-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Phoenix Victories
            </h2>
            <Trophy className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Each victory marks another rebirth, another rise from the ashes of competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-2xl border border-fuchsia-500/30 hover:border-fuchsia-500/60 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Phoenix Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-fuchsia-500/30`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white font-bold`}>
                    {achievement.phoenixLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">{achievement.description}</p>
                
                <div className="flex items-center justify-center gap-2 text-fuchsia-400 text-sm font-medium bg-fuchsia-500/10 px-3 py-2 rounded-full">
                  <Flame className="w-4 h-4 animate-pulse" />
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phoenix Statistics */}
        <div className="bg-gradient-to-r from-indigo-900/20 via-purple-900/30 to-fuchsia-900/20 p-8 rounded-2xl border border-fuchsia-500/30 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-fuchsia-300 mb-2">Phoenix Power Statistics</h3>
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-5 h-5 text-fuchsia-400 animate-pulse" />
              <p className="text-gray-400">The numbers that fuel our eternal flame</p>
              <Flame className="w-5 h-5 text-fuchsia-400 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                91%
              </div>
              <div className="text-fuchsia-200 font-medium">Phoenix Win Rate</div>
              <div className="text-gray-500 text-sm">Eternal Flame</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                $180K
              </div>
              <div className="text-purple-200 font-medium">Prize Money</div>
              <div className="text-gray-500 text-sm">Phoenix Gold</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                3.1
              </div>
              <div className="text-indigo-200 font-medium">Team KDA</div>
              <div className="text-gray-500 text-sm">Phoenix Power</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                16min
              </div>
              <div className="text-fuchsia-200 font-medium">Avg Match</div>
              <div className="text-gray-500 text-sm">Swift Victory</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
