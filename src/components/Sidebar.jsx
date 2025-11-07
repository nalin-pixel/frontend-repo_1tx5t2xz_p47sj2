import React from 'react';
import { Users, Briefcase, Bookmark } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-20 space-y-4">
        {/* Profile card */}
        <div className="overflow-hidden rounded-xl border bg-white">
          <div className="h-16 bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="-mt-8 px-4 pb-4">
            <div className="h-16 w-16 rounded-full border-4 border-white bg-gray-200" />
            <h3 className="mt-2 font-semibold">Your Name</h3>
            <p className="text-sm text-gray-600">Aspiring professional building a strong network</p>
            <div className="mt-3 grid grid-cols-2 rounded-lg bg-gray-50 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Connections</span>
                <span className="font-semibold text-blue-600">214</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Profile views</span>
                <span className="font-semibold text-blue-600">58</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="rounded-xl border bg-white p-4">
          <h4 className="mb-3 text-sm font-semibold text-gray-700">Shortcuts</h4>
          <div className="space-y-2 text-sm">
            <button className="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-gray-50">
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> Groups</span>
              <span className="text-gray-500">12</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-gray-50">
              <span className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4" /> Jobs</span>
              <span className="text-gray-500">3</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-gray-50">
              <span className="inline-flex items-center gap-2"><Bookmark className="h-4 w-4" /> Saved</span>
              <span className="text-gray-500">7</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
