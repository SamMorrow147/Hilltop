"use client"
import Script from "next/script";

const Hiring = () => {
    return (
        <section id="hiring-section" className="py-16" style={{ backgroundColor: '#e6e2c0' }}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <p className="text-lg font-normal mb-3 tracking-widest uppercase font-roboto-slab text-black">
                        JOIN OUR TEAM
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-semibold font-roboto-slab text-black">
                        We're Hiring!
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-lg mb-8 text-center shadow-lg">
                        <h3 className="text-2xl font-semibold text-black mb-4">
                            Join the Hilltop Family
                        </h3>
                        <p className="text-gray-600 text-lg mb-4">
                            Hey there! We're hiring for many different positions as we prepare to reopen this historic 
                            Hanover landmark. Whether you're experienced in hospitality or just starting your career, 
                            we'd love to hear from you.
                        </p>
                        <p className="text-gray-600 text-lg mb-6">
                            From kitchen staff to servers, bartenders to management – we're building a team that 
                            shares our passion for great food, good drinks, and creating memorable experiences 
                            for our community.
                        </p>
                        <p className="text-black font-medium text-lg">
                            Fill out the form below and let's start the conversation!
                        </p>
                    </div>

                    {/* JotForm Embed */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <Script 
                            type="text/javascript" 
                            src="https://form.jotform.com/jsform/251536213151042"
                            strategy="lazyOnload"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hiring; 