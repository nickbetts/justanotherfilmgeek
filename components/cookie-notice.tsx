"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "jafg_cookie_notice_accepted";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY) === "true";
    setVisible(!accepted);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <p>
        This site only uses a basic cookie/local storage flag to remember this notice. No analytics
        or ad tracking is enabled.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-primary" type="button" onClick={accept}>
          Accept
        </button>
        <Link className="btn btn-ghost" href="/privacy">
          Learn more
        </Link>
      </div>
    </aside>
  );
}
