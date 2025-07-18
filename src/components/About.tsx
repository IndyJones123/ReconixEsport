import React from 'react';
import { Users, Trophy, Flame,  Crown, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-fuchsia-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
              The Phoenix Legend
            </h2>
            <Flame className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Born from the eternal cycle of rebirth, RECONIX embodies the mythical phoenix – 
            rising from defeat stronger, wiser, and more determined than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Phoenix Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-900/30 via-purple-900/30 to-indigo-900/30 p-8 rounded-2xl border border-fuchsia-500/30 backdrop-blur-sm hover:border-fuchsia-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Crown className="w-8 h-8 text-fuchsia-400 mr-3" />
                <h3 className="text-2xl font-bold text-fuchsia-300">The Phoenix Awakening</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Like the legendary phoenix that burns itself to ash only to rise again in flames of glory, 
                RECONIX represents the eternal cycle of growth, learning, and triumph in the world of Dota 2.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 via-violet-900/30 to-fuchsia-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-purple-300">The Sacred Mission</h3>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p><span className="text-fuchsia-400 font-bold">REC</span> – <em>Reconnecting</em> the wisdom of veteran phoenixes</p>
                <p><span className="text-purple-400 font-bold">O</span> – <em>Orchestrating</em> perfect team synergy</p>
                <p><span className="text-indigo-400 font-bold">NIX</span> – <em>New birth</em> from the ashes of defeat</p>
              </div>
            </div>
          </div>

          {/* Right Column - Phoenix Values */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Phoenix Unity</h3>
              </div>
              <p className="text-gray-400">
                Five flames burning as one, creating an inferno that consumes all opposition.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Phoenix Excellence</h3>
              </div>
              <p className="text-gray-400">
                Every defeat is fuel for our rebirth, every victory a testament to our eternal flame.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white">Phoenix Innovation</h3>
              </div>
              <p className="text-gray-400">
                From ancient wisdom to cutting-edge strategies, we evolve with each rebirth.
              </p>
            </div>
          </div>
        </div>

        {/* Phoenix Cycle Visualization */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-indigo-900/20 p-8 rounded-full border border-violet-500/30 backdrop-blur-sm">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💀</span>
              </div>
              <p className="text-gray-400 text-sm">Defeat</p>
            </div>
            <div className="text-fuchsia-400 text-2xl animate-pulse">→</div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Flame className="w-8 h-8 text-white animate-pulse" />
              </div>
              <p className="text-fuchsia-400 text-sm">Rebirth</p>
            </div>
            <div className="text-indigo-400 text-2xl animate-pulse">→</div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <p className="text-indigo-400 text-sm">Victory</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
