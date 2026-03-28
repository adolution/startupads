import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { Star, Zap, Shield, Heart, Download, Play, Settings, User, Mail, Phone } from "lucide-react";

function Default() {
  return (
    <BorderRotate className="w-96 h-65">
    </BorderRotate>
  );
}

function CustomColor() {
  return (
    <BorderRotate
      gradientColors={{
        primary: '#0f172a',
        secondary: '#1e40af',
        accent: '#60a5fa'
      }}
      backgroundColor="#1e1b4b"
      className="p-6"
    >
      <div className="text-white text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Zap className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
        <p className="text-gray-300 mb-4">Blue gradient theme with high contrast</p>
        <div className="flex gap-2 justify-center items-center">
          <Play className="w-5 h-5" />
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all transform hover:scale-105">
            Launch Now
          </button>
          <Settings className="w-5 h-5 ml-2 cursor-pointer hover:rotate-90 transition-transform" />
        </div>
      </div>
    </BorderRotate>
  );
}

function FastAnimation() {
  return (
    <BorderRotate
      animationSpeed={0.5}
      gradientColors={{
        primary: '#7f1d1d',
        secondary: '#dc2626',
        accent: '#f87171'
      }}
      backgroundColor="#7f1d1d"
      className="p-6"
    >
      <div className="text-white text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Shield className="w-8 h-8 text-red-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Security First</h3>
        <p className="text-gray-300 mb-4">0.5s rotation speed with vivid red theme</p>
        <div className="grid grid-cols-2 gap-3">
          <button className="px-3 py-2 bg-red-600 hover:bg-red-500 rounded-lg transition-colors text-sm">
            <Shield className="w-4 h-4 inline mr-1" />
            Secure
          </button>
          <button className="px-3 py-2 border border-red-400 hover:border-red-300 rounded-lg transition-colors text-sm">
            <Download className="w-4 h-4 inline mr-1" />
            Download
          </button>
        </div>
      </div>
    </BorderRotate>
  );
}

function HoverToRotate() {
  return (
    <BorderRotate
      animationMode="rotate-on-hover"
      gradientColors={{
        primary: '#064e3b',
        secondary: '#059669',
        accent: '#34d399'
      }}
      backgroundColor="#064e3b"
      className="p-6"
    >
      <div className="text-white text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Heart className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Eco Friendly</h3>
        <p className="text-gray-300 mb-4">Animation starts on hover - green theme</p>
        <div className="flex flex-col gap-2">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-all">
            <Heart className="w-4 h-4 inline mr-2" />
            Join Movement
          </button>
          <div className="flex gap-2 justify-center">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </BorderRotate>
  );
}

function StopOnHover() {
  return (
    <BorderRotate
      animationMode="stop-rotate-on-hover"
      gradientColors={{
        primary: '#581c87',
        secondary: '#7c3aed',
        accent: '#a855f7'
      }}
      backgroundColor="#581c87"
      className="p-6"
    >
      <div className="text-white text-center space-y-4">
        <div className="flex justify-center mb-4">
          <User className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">User Profile</h3>
        <p className="text-gray-300 mb-4">Animation pauses on hover - purple theme</p>
        <div className="space-y-3">
          <div className="flex gap-2 justify-center">
            <button className="px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors">
              <Mail className="w-4 h-4 inline mr-1" />
              Message
            </button>
            <button className="px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors">
              <Phone className="w-4 h-4 inline mr-1" />
              Call
            </button>
          </div>
          <div className="text-sm text-purple-300">
            Premium Member Since 2024
          </div>
        </div>
      </div>
    </BorderRotate>
  );
}

function CustomBorder() {
  return (
    <BorderRotate
      borderRadius={8}
      borderWidth={4}
      animationSpeed={10}
      gradientColors={{
        primary: '#9a3412',
        secondary: '#ea580c',
        accent: '#fb923c'
      }}
      backgroundColor="#9a3412"
      className="p-6"
    >
      <div className="text-white text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Settings className="w-8 h-8 text-orange-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Customizable</h3>
        <p className="text-gray-300 mb-4">4px width, 8px radius, slow animation</p>
        <div className="grid grid-cols-3 gap-2">
          <button className="px-2 py-2 bg-orange-600 hover:bg-orange-500 rounded transition-colors">
            <div className="w-4 h-4 bg-orange-300 rounded mx-auto"></div>
          </button>
          <button className="px-2 py-2 bg-orange-600 hover:bg-orange-500 rounded transition-colors">
            <div className="w-4 h-4 bg-orange-400 rounded mx-auto"></div>
          </button>
          <button className="px-2 py-2 bg-orange-600 hover:bg-orange-500 rounded transition-colors">
            <div className="w-4 h-4 bg-orange-500 rounded mx-auto"></div>
          </button>
        </div>
        <button className="px-6 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors w-full">
          Configure Settings
        </button>
      </div>
    </BorderRotate>
  );
}

function Feature() {
  return (
    <BorderRotate
      className="p-8"
      animationMode="rotate-on-hover"
      animationSpeed={1}
      gradientColors={{
        primary: '#1f2937',
        secondary: '#4f46e5',
        accent: '#8b5cf6'
      }}
    >
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Enhanced Feature Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Lightning Speed</h3>
            <p className="text-gray-300 text-sm mb-3">Ultra-fast performance with optimized rendering</p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-xs">
              Try Now
            </button>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Secure & Safe</h3>
            <p className="text-gray-300 text-sm mb-3">Enterprise-grade security for your data</p>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors text-xs">
              Learn More
            </button>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Premium Quality</h3>
            <p className="text-gray-300 text-sm mb-3">Professional-grade animated components</p>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors text-xs">
              Upgrade
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </BorderRotate>
  );
}

export {
  Default,
  CustomColor,
  FastAnimation,
  HoverToRotate,
  StopOnHover,
  CustomBorder,
  Feature
};
