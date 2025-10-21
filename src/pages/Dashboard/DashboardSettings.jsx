import React from 'react';
import { HashRouter } from "react-router-dom";

export default function DashboardSettings() {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        {/* Profile Settings */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Password Settings */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Password Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" defaultChecked />
              <span className="text-gray-700">Email notifications for new messages</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="text-gray-700">SMS notifications for project updates</span>
            </label>
          </div>
        </section>

        {/* Save Button */}
        <div className="pt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
