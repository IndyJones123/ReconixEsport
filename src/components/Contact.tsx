import React from 'react';
import { Mail, MessageSquare, Users, Flame, Crown, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-fuchsia-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Join The Phoenix
            </h2>
            <Flame className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to rise from the ashes with us? Connect with the phoenix squadron for partnerships, 
            sponsorships, or to witness our eternal flame
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-fuchsia-500/30">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">Phoenix Mail</h3>
              <p className="text-gray-400 mb-3">Send your message through the flames</p>
              <a href="mailto:contact@reconix.gg" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                contact@reconix.gg
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-fuchsia-500/30">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Phoenix Nest</h3>
              <p className="text-gray-400 mb-3">Join our community of flames</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                discord.gg/reconix
              </a>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">Phoenix Social</h3>
              <p className="text-gray-400 mb-3">Follow our flight across the digital sky</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">Twitter</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">Instagram</a>
              </div>
            </div>
          </div>

          {/* Phoenix Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-2xl border border-fuchsia-500/30 backdrop-blur-sm relative overflow-hidden">
            {/* Phoenix Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-indigo-500/5"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Crown className="w-6 h-6 text-fuchsia-400" />
                  <h3 className="text-2xl font-bold text-white">Send Message to the Phoenix</h3>
                  <Crown className="w-6 h-6 text-fuchsia-400" />
                </div>
                <p className="text-gray-400">Your words will be carried by the eternal flame</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-fuchsia-300 mb-2 font-medium">Phoenix Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg border border-fuchsia-500/30 focus:border-fuchsia-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your Phoenix Name"
                    />
                  </div>
                  <div>
                    <label className="block text-fuchsia-300 mb-2 font-medium">Phoenix Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg border border-fuchsia-500/30 focus:border-fuchsia-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="your@phoenix.email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-fuchsia-300 mb-2 font-medium">Message Subject</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg border border-fuchsia-500/30 focus:border-fuchsia-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="What brings you to the phoenix?"
                  />
                </div>
                <div>
                  <label className="block text-fuchsia-300 mb-2 font-medium">Phoenix Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg border border-fuchsia-500/30 focus:border-fuchsia-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Share your thoughts with the eternal flame..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white py-4 rounded-lg font-bold hover:from-fuchsia-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-fuchsia-500/30 flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 animate-pulse" />
                  Send to the Phoenix
                  <Flame className="w-5 h-5 animate-pulse" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
