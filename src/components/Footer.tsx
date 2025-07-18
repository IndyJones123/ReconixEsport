import React from 'react';
import { Flame, Heart, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-fuchsia-500/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Phoenix Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                <img src="./image.png" className='rounded-full' alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                  RECONIX
                </h3>
                <p className="text-xs text-fuchsia-300/80 font-medium">THE PHOENIX RISES</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              From the eternal flames of rebirth, we rise stronger. Reconnecting veteran wisdom 
              with new generation fire, RECONIX embodies the phoenix spirit in competitive Dota 2.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Flame className="w-4 h-4 text-fuchsia-400 animate-pulse" />
              <p className="text-fuchsia-300 text-sm italic">Forever rising, never falling</p>
              <Flame className="w-4 h-4 text-fuchsia-400 animate-pulse" />
            </div>
          </div>

          {/* Phoenix Links */}
          <div>
            <h4 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Phoenix Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Phoenix Legend</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Phoenix Squadron</a></li>
              <li><a href="#achievements" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Phoenix Victories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Join Phoenix</a></li>
            </ul>
          </div>

          {/* Phoenix Social */}
          <div>
            <h4 className="text-indigo-300 font-bold mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 animate-pulse" />
              Phoenix Network
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Phoenix Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Phoenix Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Phoenix Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Phoenix Twitch</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-fuchsia-400 animate-pulse" />
              <p className="text-gray-400 flex items-center gap-2">
                Forged with <Heart className="w-4 h-4 text-pink-500 animate-pulse" /> by the Phoenix Squadron
              </p>
              <Flame className="w-5 h-5 text-fuchsia-400 animate-pulse" />
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 RECONIX Phoenix Esports. All flames reserved. | The Phoenix Never Dies
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600">
              <span>REC - Reconnecting Veterans</span>
              <span>•</span>
              <span>O - Orchestrating Victory</span>
              <span>•</span>
              <span>NIX - New Birth from Ashes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
