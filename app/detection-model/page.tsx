"use client";

import React from 'react';
import Link from 'next/link';
import Footer from './footer2'; // Adjust the path if needed

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col dark bg-[hsl(0,0%,3.9%)] text-[hsl(0,0%,98%)]">
      {/* Header */}
      <header className="bg-[hsl(240,3.7%,15.9%)] border-b border-[hsl(0,0%,14.9%)]">
        <nav className="container mx-auto py-4 px-6 flex justify-center space-x-6">
          <Link href="/" className="text-[hsl(0,0%,98%)] hover:text-[hsl(224.3,76.3%,48%)] transition font-medium">
            Home
          </Link>
          <Link href="/emergency" className="text-[hsl(0,0%,98%)] hover:text-[hsl(224.3,76.3%,48%)] transition font-medium">
            Emergency
          </Link>
          <Link href="/live-accident" className="text-[hsl(0,0%,98%)] hover:text-[hsl(224.3,76.3%,48%)] transition font-medium">
            Live Accident
          </Link>
          <Link href="/gps-map" className="text-[hsl(0,0%,98%)] hover:text-[hsl(224.3,76.3%,48%)] transition font-medium">
            GPS Map
          </Link>
          <Link href="/collision-history" className="text-[hsl(0,0%,98%)] hover:text-[hsl(224.3,76.3%,48%)] transition font-medium">
            Collision History
          </Link>
          <Link href="/about" className="text-[hsl(0,0%,98%)] hover:text-[hsl(224.3,76.3%,48%)] transition font-medium">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[hsl(0,0%,3.9%)]">
        <div className="container mx-auto py-12 px-6">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4 text-[hsl(0,0%,98%)]">Welcome to the Accident Detection Model</h1>
            <p className="text-[hsl(0,0%,63.9%)] mb-8 max-w-2xl mx-auto">
              Our AI-powered accident detection system ensures safety by providing real-time alerts and monitoring.
            </p>
            <button className="bg-[hsl(224.3,76.3%,48%)] hover:bg-[hsl(224.3,76.3%,40%)] text-white font-medium py-2 px-6 rounded transition">
              Go Live
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Emergency Services */}
            <div className="bg-[hsl(0,0%,14.9%)] p-6 rounded-lg border border-[hsl(0,0%,14.9%)]">
              <h2 className="text-xl font-medium text-[hsl(224.3,76.3%,48%)] mb-4 text-center">Emergency Services</h2>
              <p className="text-[hsl(0,0%,63.9%)] text-center">
                Instantly connect with emergency responders in case of an accident.
              </p>
            </div>

            {/* Live Accident Detection */}
            <div className="bg-[hsl(0,0%,14.9%)] p-6 rounded-lg border border-[hsl(0,0%,14.9%)]">
              <h2 className="text-xl font-medium text-[hsl(224.3,76.3%,48%)] mb-4 text-center">Live Accident Detection</h2>
              <p className="text-[hsl(0,0%,63.9%)] text-center">
                View real-time accident reports and alerts as they happen.
              </p>
            </div>

            {/* GPS Mapping */}
            <div className="bg-[hsl(0,0%,14.9%)] p-6 rounded-lg border border-[hsl(0,0%,14.9%)]">
              <h2 className="text-xl font-medium text-[hsl(224.3,76.3%,48%)] mb-4 text-center">GPS Mapping</h2>
              <p className="text-[hsl(0,0%,63.9%)] text-center">
                Track accident locations and navigate safely using an interactive map.
              </p>
            </div>

            {/* Collision History */}
            <div className="bg-[hsl(0,0%,14.9%)] p-6 rounded-lg border border-[hsl(0,0%,14.9%)]">
              <h2 className="text-xl font-medium text-[hsl(224.3,76.3%,48%)] mb-4 text-center">Collision History</h2>
              <p className="text-[hsl(0,0%,63.9%)] text-center">
                Access past accident records and analyze incident trends.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
