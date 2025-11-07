import React from 'react';
import { Home, Users, Briefcase, Bell, MessageSquare, Search, Plus } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`flex flex-col items-center gap-1 px-3 py-2 rounded-md transition-colors hover:bg-gray-100/60 ${
      active ? 'text-blue-600' : 'text-gray-600'
    }`}
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
    <span className="text-xs hidden sm:block">{label}</span>
  </button>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white font-bold">
              in
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600 focus-within:ring-2 focus-within:ring-blue-500">
              <Search className="h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none placeholder:text-gray-500 w-64"
              />
            </div>
          </div>

          {/* Center: Nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <NavItem icon={Home} label="Home" active />
            <NavItem icon={Users} label="My Network" />
            <NavItem icon={Briefcase} label="Jobs" />
            <NavItem icon={MessageSquare} label="Messaging" />
            <NavItem icon={Bell} label="Notifications" />
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4" />
              Post
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
