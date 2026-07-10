import React from 'react';
import { navItems } from '../data';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Professional Resume
      </div>

      <nav className="space-x-6 hidden md:block">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              item.primary
                ? 'bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg font-semibold transition-opacity'
                : 'hover:text-white transition-colors'
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
