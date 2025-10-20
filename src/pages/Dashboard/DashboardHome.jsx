import React from 'react';

export default function DashboardHome() {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-700 mb-8">
        Here’s a quick overview of your account and recent activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
        </div>

        {/* Stats Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Stats</h2>
          <p className="text-gray-600">Projects Completed: 12</p>
          <p className="text-gray-600">Active Projects: 3</p>
        </div>

        {/* Notifications Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>New message from Alice</li>
            <li>Project deadline approaching</li>
            <li>Update available for your plan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
