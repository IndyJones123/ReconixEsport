import React from 'react';
import { ArrowRight, Flame, Zap, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Phoenix Wing Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-fuchsia-900/30 to-indigo-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Phoenix Silhouette Effect */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-violet-500/30 via-fuchsia-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Phoenix Crown */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-28 h-28 bg-gradient-to-br from-violet-400 via-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 group-hover:shadow-violet-500/70 transition-all duration-500">
              <Crown className="w-14 h-14 text-white animate-pulse" />
              <img src="./image.png" className="rounded-full" alt="" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-fuchsia-400 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-violet-400 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-2 -left-4 w-4 h-4 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight relative">
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-2xl">
            RECONIX
          </span>
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-xl -z-10 animate-pulse"></div>
        </h1>

        {/* Subtitle */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <Flame className="w-6 h-6 text-violet-400 animate-pulse" />
          <p className="text-xl md:text-2xl text-violet-200 font-light tracking-wider">
            THE PHOENIX RISES
          </p>
          <Flame className="w-6 h-6 text-violet-400 animate-pulse" />
        </div>

        {/* Tagline */}
        <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
          From the ashes of defeat, we emerge stronger. Reconnecting veteran wisdom with new generation fire.
          <span className="text-violet-400 font-semibold"> The rebirth begins now.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 text-white px-10 py-4 rounded-full font-bold hover:from-violet-600 hover:via-fuchsia-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/30 flex items-center gap-3">
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Witness The Fire
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-violet-400 text-violet-400 px-10 py-4 rounded-full font-bold hover:bg-violet-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/30">
            Join The Phoenix
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-indigo-900/20 p-8 rounded-2xl border border-violet-500/30 backdrop-blur-sm">
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              73%
            </div>
            <div className="text-violet-200 text-sm">Phoenix Win Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              4
            </div>
            <div className="text-violet-200 text-sm">Tournaments</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              2025
            </div>
            <div className="text-violet-200 text-sm">Years Rising</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              5
            </div>
            <div className="text-violet-200 text-sm">Phoenix Warriors</div>
          </div>
        </div>
      </div>

      {/* Embers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping delay-0"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-violet-300 rounded-full animate-ping delay-3000"></div>
      </div>
    </section>
  );
};

export default Hero;
