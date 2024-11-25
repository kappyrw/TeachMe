"use client"

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TutoringPlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: '3200+', label: 'Expert Tutors' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'Subjects' },
    { value: '100K+', label: 'Students' },
    { value: '4.8', label: 'Rating Average' }
  ];

  const navItems = [
    { label: 'Find Tutor', href: '#' },
    { label: 'Become a Tutor', href: '#' },
    { label: 'How it Works', href: '#' },
    { label: 'Resources', href: '#' },
  ];

  const subjects = Array(6).fill({
    icon: '👨‍🏫',
    title: 'English Tutors',
    count: '20,499 teachers'
  });

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Existing gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-900/20 via-purple-900/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TeachMe
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  EN <ChevronDown size={16} />
                </button>
                <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded">English</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded">Spanish</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded">Kinyarwanda</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded">French</a>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                Login
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-32">
        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Learn Without Limits
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with world-class tutors and unlock your full potential through personalized learning experiences.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="border border-white/20 bg-black backdrop-blur-sm px-8 py-3 rounded-full text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-black border border-white/10 hover:bg-white/5 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Subjects Grid Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <a
                key={index}
                href="#"
                className="group flex items-center justify-between p-6 rounded-xl bg-black border border-white/10 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-xl">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4L3 8L12 12L21 8L12 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 12L12 16L21 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400">English Tutors</h3>
                    <p className="text-sm text-gray-400">20,499 teachers</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            ))}
          </div>
          <button className="mt-8 w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-gray-400 hover:text-white">
            <span>Show more</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* New Image Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              
              
           
            <Image
                src="/7.png"
                alt="Learning Experience 1"
                layout='fill'
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Personal Learning</h3>
                  <p className="text-gray-200">Customize your learning journey</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
            <Image
                src="/4 .png"
                alt="Learning Experience 1"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Personal Learning</h3>
                  <p className="text-gray-200">Customize your learning journey</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
            <Image
                src="/5 .png"
                alt="Learning Experience 1"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Personal Learning</h3>
                  <p className="text-gray-200">Customize your learning journey</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              <Image
                src="/4 .png"
                alt="Learning Experience 2"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Expert Guidance</h3>
                  <p className="text-gray-200">Learn from the best tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TutoringPlatform;