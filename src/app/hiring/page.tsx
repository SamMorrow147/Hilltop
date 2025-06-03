import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiring - Hilltop Bar & Grill",
  description: "Join the Hilltop Bar & Grill team! We're hiring for multiple positions in Historic Hanover, MN.",
};

export default function Hiring() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center mb-12">
            <p className="text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black dark:text-white">
              JOIN OUR TEAM
            </p>
            <h1 className="text-3xl lg:text-5xl font-semibold font-roboto-slab text-black dark:text-white">
              We're Hiring!
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg mb-8 text-center">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Join the Hilltop Family
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                Hey there! We're hiring for many different positions as we prepare to reopen this historic 
                Hanover landmark. Whether you're experienced in hospitality or just starting your career, 
                we'd love to hear from you.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                From kitchen staff to servers, bartenders to management – we're building a team that 
                shares our passion for great food, good drinks, and creating memorable experiences 
                for our community.
              </p>
              <p className="text-black dark:text-white font-medium text-lg mb-8">
                Ready to join our team? Click the button below to fill out your application!
              </p>
              
              <Link 
                href="/application" 
                className="inline-flex items-center text-xl font-medium rounded-full text-white py-4 px-8 lg:px-12 border transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#9B2323', borderColor: '#9B2323' }}
              >
                Fill Out Application
                <svg 
                  className="ml-3 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 