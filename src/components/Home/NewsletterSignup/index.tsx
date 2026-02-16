"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

const MAILCHIMP_ACTION =
  "https://hilltophanover.us17.list-manage.com/subscribe/post?u=2db885001ca78924e89ddfc04&id=d290eeb17e&f_id=009bbbe2f0";

const NewsletterSignup = () => {
  const { ref: signupRef, isVisible: signupVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="newsletter-signup" className="py-12" style={{ backgroundColor: "#f4f3e5" }}>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <div
          ref={signupRef}
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-8 transition-all duration-1000 ease-out ${
            signupVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 font-roboto-slab">
              Subscribe for News & Deals
            </h2>
            <p className="text-black text-lg max-w-2xl">
              From happy hour specials to hometown events, get the latest Hilltop news delivered
              straight to your inbox.
            </p>
          </div>
          <div
            id="mc_embed_shell"
            className="flex justify-center md:justify-end w-full md:min-w-[420px] md:max-w-xl"
            style={{ font: "14px Helvetica, Arial, sans-serif" }}
          >
            <div id="mc_embed_signup" className="bg-white/80 rounded-lg p-6 min-w-[320px] w-full max-w-lg sm:min-w-[380px]">
              <form
                action={MAILCHIMP_ACTION}
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required mb-3">
                    <span className="text-gray-600 text-sm">
                      <span className="text-red-600">*</span> indicates required
                    </span>
                  </div>
                  <div className="mc-field-group mb-4">
                    <label htmlFor="mce-EMAIL" className="block text-black font-medium mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      id="mce-EMAIL"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div id="mce-responses" className="clear mb-4">
                    <div
                      className="response text-red-600 text-sm"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    />
                    <div
                      className="response text-green-600 text-sm"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    />
                  </div>
                  {/* Honeypot - do not remove (Mailchimp anti-spam) */}
                  <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                    <input
                      type="text"
                      name="b_2db885001ca78924e89ddfc04_d290eeb17e"
                      tabIndex={-1}
                      defaultValue=""
                      readOnly
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button px-6 py-3 bg-black text-white font-medium rounded-lg cursor-pointer hover:bg-gray-800 transition-colors w-full"
                      value="Subscribe"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
