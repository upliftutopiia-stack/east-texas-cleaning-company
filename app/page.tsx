"use client";

import { useState, type FormEvent } from "react";

const PHONE_DISPLAY = "(903) 331-4585";
const PHONE = "+19033314585";
const INSTAGRAM =
  "https://www.instagram.com/east_texas_cleaning_company/";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [cleaningDetails, setCleaningDetails] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [copied, setCopied] = useState(false);

  const message = [
    "Hello East Texas Cleaning Company!",
    "I'd like to ask about cleaning availability and a quote.",
    "",
    `Name: ${name || "Not provided"}`,
    `My phone: ${phone || "Not provided"}`,
    `Area: ${location || "Not provided"}`,
    `Preferred date: ${preferredDate || "Flexible"}`,
    `Details: ${
      cleaningDetails || "Please contact me for details."
    }`,
  ].join("\n");

  function sendRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const smsHref = `sms:${PHONE}?body=${encodeURIComponent(message)}`;
    window.location.href = smsHref;
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.alert(
        "Copy isn't available in this browser. Please use the text message button instead."
      );
    }
  }

  return (
    <>
      <div className="concept-bar">
        INDEPENDENT WEBSITE CONCEPT · NOT THE OFFICIAL BUSINESS WEBSITE
      </div>

      <header className="site-header" id="home">
        <a
          className="brand"
          href="#home"
          aria-label="East Texas Cleaning Company home"
        >
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <span className="brand-name">
            EAST TEXAS
            <strong>CLEANING CO.</strong>
            <small>LONGVIEW · EAST TEXAS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={`tel:${PHONE}`}>
          CALL {PHONE_DISPLAY} <Arrow diagonal />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5L19 19M19 5L5 19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 6H21M3 12H21M3 18H21" />
            </svg>
          )}
        </button>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label} <Arrow />
          </a>
        ))}

        <a
          href={`tel:${PHONE}`}
          onClick={() => setMenuOpen(false)}
        >
          Call the company <Arrow />
        </a>
      </nav>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="dot" />
              LOCAL CLEANING ENQUIRIES · EAST TEXAS
            </p>

            <h1 id="hero-heading">
              A FRESHER SPACE.
              <br />
              <em>A BETTER DAY.</em>
            </h1>

            <p className="hero-lead">
              A cleaner space starts with a simple conversation.
              Connect with East Texas Cleaning Company to ask
              about services, availability, and a quote.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                REQUEST A QUOTE <Arrow diagonal />
              </a>
              <a className="button button-outline" href={`tel:${PHONE}`}>
                CALL THE COMPANY <Arrow diagonal />
              </a>
            </div>

            <div className="hero-note">
              <span className="sparkle">✳</span>
              <span>
                Serving enquiries from Longview and the surrounding
                East Texas area. Confirm service coverage directly
                with the company.
              </span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Decorative illustration of a clean, sunlit interior"
            role="img"
          >
            <div className="sun-disc" />
            <div className="window-frame">
              <div className="window-cross-v" />
              <div className="window-cross-h" />
            </div>
            <div className="floor-line" />
            <div className="vase">
              <div className="stem stem-one" />
              <div className="stem stem-two" />
              <div className="stem stem-three" />
              <div className="vase-body" />
            </div>
            <div className="side-table">
              <div className="table-top" />
              <div className="table-leg left" />
              <div className="table-leg right" />
            </div>
            <div className="visual-label">
              A LITTLE MORE ROOM TO BREATHE <span>✦</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            FRESH SPACES <span>✳</span> EASY ENQUIRIES{" "}
            <span>✳</span> EAST TEXAS <span>✳</span>{" "}
            FRESH SPACES <span>✳</span> EASY ENQUIRIES{" "}
            <span>✳</span> EAST TEXAS <span>✳</span>
          </div>
        </div>

        <section className="intro section-pad" id="about">
          <div className="section-kicker">
            01 / THE DIFFERENCE
          </div>
          <div className="intro-grid">
            <h2>
              MAKE SPACE FOR
              <br />
              <em>WHAT MATTERS.</em>
            </h2>
            <div>
              <p>
                Whether you are planning a one-time cleaning
                or looking for ongoing help, the first step is
                finding out what works for your space.
              </p>
              <p>
                This website concept makes it easy to reach
                East Texas Cleaning Company directly and
                discuss your needs.
              </p>
              <a className="text-link" href="#contact">
                START AN ENQUIRY <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="explore">
          <div className="section-top">
            <div>
              <div className="section-kicker">
                02 / LET&apos;S TALK ABOUT YOUR SPACE
              </div>
              <h2>
                YOUR SPACE.
                <br />
                <em>YOUR NEEDS.</em>
              </h2>
            </div>
            <p>
              Ask the company what cleaning options are
              available for your property. The examples
              below are enquiry topics, not a confirmed
              service menu.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-number">01</span>
              <div className="service-art art-home">
                <div className="house-roof" />
                <div className="house-body" />
                <div className="house-door" />
                <div className="house-window" />
              </div>
              <h3>Home cleaning enquiries</h3>
              <p>
                Tell the team about your home and the
                areas you want help with.
              </p>
              <a href="#contact">
                ASK ABOUT OPTIONS <Arrow />
              </a>
            </article>

            <article className="service-card">
              <span className="service-number">02</span>
              <div className="service-art art-calendar">
                <div className="calendar-top" />
                <div className="calendar-body">
                  <span>✦</span>
                </div>
              </div>
              <h3>Recurring cleaning enquiries</h3>
              <p>
                Interested in regular visits? Ask about
                current scheduling and availability.
              </p>
              <a href="#contact">
                ASK ABOUT OPTIONS <Arrow />
              </a>
            </article>

            <article className="service-card">
              <span className="service-number">03</span>
              <div className="service-art art-sparkles">
                <span>✦</span>
                <span>✧</span>
                <span>✦</span>
              </div>
              <h3>Custom cleaning enquiries</h3>
              <p>
                Have a specific request? Share the details
                and ask whether it can be accommodated.
              </p>
              <a href="#contact">
                ASK ABOUT OPTIONS <Arrow />
              </a>
            </article>
          </div>

          <p className="service-disclaimer">
            Service categories are illustrative enquiry prompts
            only. Confirm offered services, coverage, pricing,
            and availability with the business.
          </p>
        </section>

        <section className="quote-band">
          <div className="quote-band-inner">
            <span className="large-star">✳</span>
            <blockquote>
              “A clean space is a little reset for your everyday.”
            </blockquote>
            <span className="quote-credit">
              A THOUGHT BEHIND THIS WEBSITE CONCEPT ·
              NOT A CUSTOMER REVIEW
            </span>
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-kicker">
            03 / SIMPLE NEXT STEPS
          </div>

          <div className="process-grid">
            <div>
              <h2>
                LET&apos;S GET
                <br />
                <em>STARTED.</em>
              </h2>
              <p>
                No complicated process. Just reach out,
                share a few details, and ask what is possible.
              </p>
              <a className="button button-primary" href="#contact">
                SEND AN ENQUIRY <Arrow diagonal />
              </a>
            </div>

            <div className="steps">
              <div className="step">
                <span>01</span>
                <div>
                  <h3>Tell us about your space</h3>
                  <p>
                    Share your area, preferred timing,
                    and what you would like cleaned.
                  </p>
                </div>
              </div>

              <div className="step">
                <span>02</span>
                <div>
                  <h3>Contact the business</h3>
                  <p>
                    Your message opens in your phone&apos;s
                    texting app so you can send it directly.
                  </p>
                </div>
              </div>

              <div className="step">
                <span>03</span>
                <div>
                  <h3>Discuss the details</h3>
                  <p>
                    The company can confirm whether it can
                    help, along with pricing and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-grid">
            <div className="contact-copy">
              <div className="section-kicker">
                04 / SAY HELLO
              </div>

              <h2>
                READY FOR
                <br />
                <em>A FRESH START?</em>
              </h2>

              <p>
                Send a quick enquiry. This demo does not
                store or submit your information to a website
                database; it prepares a text message for you
                to review and send.
              </p>

              <div className="contact-method">
                <span>CALL OR TEXT</span>
                <a href={`tel:${PHONE}`}>
                  {PHONE_DISPLAY} <Arrow diagonal />
                </a>
              </div>

              <div className="contact-method">
                <span>FOLLOW ALONG</span>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM <Arrow diagonal />
                </a>
              </div>

              <p className="contact-footnote">
                For accurate services, hours, service areas,
                and booking details, please confirm with
                East Texas Cleaning Company directly.
              </p>
            </div>

            <form className="contact-form" onSubmit={sendRequest}>
              <div className="form-heading">
                TELL US WHAT YOU NEED <span>✳</span>
              </div>

              <div className="field-row">
                <label>
                  Your name
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your full name"
                    required
                    maxLength={100}
                  />
                </label>

                <label>
                  Your phone
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Best number to reach you"
                    type="tel"
                    required
                    maxLength={40}
                  />
                </label>
              </div>

              <label>
                Where are you located?
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="City or neighborhood"
                  required
                  maxLength={120}
                />
              </label>

              <label>
                Preferred date (optional)
                <input
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                  type="date"
                />
              </label>

              <label>
                Tell us about your space
                <textarea
                  value={cleaningDetails}
                  onChange={(event) =>
                    setCleaningDetails(event.target.value)
                  }
                  placeholder="What would you like help cleaning? Any details we should know?"
                  rows={5}
                  required
                  maxLength={1200}
                />
              </label>

              <button
                className="button button-primary submit-button"
                type="submit"
              >
                OPEN TEXT MESSAGE <Arrow diagonal />
              </button>

              <button
                className="copy-button"
                type="button"
                onClick={copyRequest}
              >
                {copied
                  ? "✓ MESSAGE COPIED"
                  : "OR COPY YOUR MESSAGE"}
              </button>

              <p className="form-note">
                Your SMS app will open with the message
                prefilled. Review and tap send yourself.
                Carrier messaging rates may apply.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            EAST TEXAS
            <br />
            <strong>CLEANING CO.</strong>
          </div>

          <div>
            <p>LONGVIEW / EAST TEXAS</p>
            <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>
          </div>

          <a className="back-top" href="#home">
            BACK TO TOP ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 EAST TEXAS CLEANING COMPANY LLC · WEBSITE CONCEPT
          </span>
          <span>
            INDEPENDENT DEMO · NOT AFFILIATED WITH OR
            ENDORSED BY THE BUSINESS
          </span>
        </div>
      </footer>

      <a className="mobile-quote" href="#contact">
        REQUEST A QUOTE <Arrow diagonal />
      </a>
    </>
  );
}