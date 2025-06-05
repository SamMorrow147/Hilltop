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
                id="JotFormIFrame-251536213151042"
                title="Job Application Form"
                allowTransparency={true}
                allowFullScreen={true}
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/251536213151042"
                frameBorder="0"
                style={{
                  minWidth: '100%',
                  maxWidth: '100%',
                  height: '3500px',
                  border: 'none'
                }}
                scrolling="no"
              >
              </iframe>
              <script 
                dangerouslySetInnerHTML={{
                  __html: `
                    window.handleIFrameMessage = function(e) {
                      if (typeof e.data === 'object') { return; }
                      var args = e.data.split(':');
                      if (args.length > 2) {
                        var iframe = document.getElementById('JotFormIFrame-' + args[(args.length - 1)]);
                        if (iframe && args[1]) {
                          iframe.style.height = args[1] + 'px';
                        }
                      }
                    };
                    if (window.addEventListener) {
                      window.addEventListener('message', handleIFrameMessage, false);
                    } else if (window.attachEvent) {
                      window.attachEvent('onmessage', handleIFrameMessage);
                    }
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