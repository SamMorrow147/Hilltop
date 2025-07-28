import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Application - Hilltop Bar & Grill",
  description: "Apply for a position at Hilltop Bar & Grill in Historic Hanover, MN.",
};

export default function Application() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center mb-12">
            <p className="text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black dark:text-white">
              JOIN OUR TEAM
            </p>
            <h1 className="text-3xl lg:text-5xl font-semibold font-roboto-slab text-black dark:text-white">
              Job Application
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
              Fill out the form below to apply for a position at Hilltop Bar & Grill
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            {/* JotForm Embed - Using iframe approach */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <iframe
                id="JotFormIFrame-252027161193147"
                title="Clone of Hilltop Application Jotform"
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/252027161193147"
                frameBorder="0"
                style={{
                  minWidth: '100%',
                  maxWidth: '100%',
                  height: '6000px',
                  border: 'none'
                }}
                scrolling="no"
              >
              </iframe>
              <script 
                dangerouslySetInnerHTML={{
                  __html: `
                    window.jotformEmbedHandler("iframe[id='JotFormIFrame-252027161193147']", "https://form.jotform.com/");
                  `
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 