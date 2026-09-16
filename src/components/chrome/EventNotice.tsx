"use client";

import { useEffect, useState } from "react";
import { hasOrderUrl, site } from "@/data/site";

const DISMISS_KEY = "fk-event-notice-dismissed";

// One-off private-event heads-up (Sat Sep 19, 2026, 6–11 PM, America/Edmonton
// = UTC-6 in September). Hard-coded end-of-day cutoff so this notice retires
// itself the day after and never needs a follow-up removal commit.
const EVENT_ENDS = new Date("2026-09-20T00:00:00-06:00").getTime();

/**
 * Sticky "we're booked for a private event" notice — bottom-right on every
 * page, closed envelope icon that pops open into a hand-lettered note on
 * first visit each browser session. Dismissible; reopenable from the same
 * envelope fab afterwards.
 */
export function EventNotice() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (Date.now() > EVENT_ENDS) return;
    setReady(true);
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Storage can throw in locked-down browser contexts — just fall back
      // to auto-opening every load rather than tracking dismissal.
    }
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 700);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!ready) return null;

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Nothing to persist to — the fab still lets them reopen this load.
    }
  }

  const orderHref = hasOrderUrl() ? site.orderUrl : "/order";
  const orderExternal = hasOrderUrl();

  return (
    <div className="fixed bottom-[84px] right-[22px] z-50 flex justify-end md:bottom-[22px]">
      {open ? (
        <div className="letter-card relative w-[min(300px,calc(100vw-40px))] rounded-card border-[1.5px] border-brown bg-cream p-s5 shadow-lift">
          <button
            type="button"
            onClick={close}
            aria-label="Dismiss notice"
            className="absolute right-s3 top-s3 flex h-[24px] w-[24px] items-center justify-center rounded-button text-stone transition-colors hover:bg-[color-mix(in_srgb,var(--brown)_14%,transparent)] hover:text-ink"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          <p className="m-0 pr-s5 font-script text-[1.9rem] leading-[1.15] text-gold-deep">
            A little note!
          </p>
          <p className="m-0 mt-s3 text-body leading-[1.7] text-ink">
            We&rsquo;re booked for a private event on <strong>Saturday, September 19</strong> from
            6&ndash;11&nbsp;PM, so dine-in won&rsquo;t be available that evening.
          </p>
          <p className="m-0 mt-s3 text-body leading-[1.7] text-ink">
            <a href={orderHref} target={orderExternal ? "_blank" : undefined} rel={orderExternal ? "noopener noreferrer" : undefined} className="link-underline text-gold-deep no-underline">
              Takeout
            </a>
            , Uber Eats, and DoorDash are open as always — see you there!
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Show event notice"
          className="envelope-fab flex h-[52px] w-[52px] items-center justify-center rounded-card border-[1.5px] border-gold bg-emerald text-gold-bright shadow-lift transition-transform hover:scale-[1.05]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M3.5 6.5l8.5 6.5 8.5-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
