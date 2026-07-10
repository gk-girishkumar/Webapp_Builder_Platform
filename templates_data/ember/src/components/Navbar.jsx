import React from 'react';
import { navItems } from '../data';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Ember
      </div>

      <nav className="space-x-6 hidden md:block">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#"
          className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg font-semibold transition-opacity"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
