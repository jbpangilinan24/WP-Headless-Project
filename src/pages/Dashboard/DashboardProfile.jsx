import React from 'react';
import { HashRouter } from "react-router-dom";

export default function DashboardProfile() {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="max-w-3xl bg-white shadow rounded-lg p-6">
        {/* Profile Info */}
        <div className="flex items-center mb-6">
          <img
            src="https://placehold.co/80x80"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        {/* Account Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-medium">Username:</span> johndoe</p>
            <p><span className="font-medium">Member Since:</span> January 2020</p>
            <p><span className="font-medium">Role:</span> Frontend Developer</p>
            <p><span className="font-medium">Location:</span> Melbourne, Australia</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
