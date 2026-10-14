"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { legacyBodyHTML, legacyScripts } from "./legacy-data";

export default function LegacyHome() {
  const rootRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!rootRef.current) return;

    // Initialise the original language toggle, UGC categories, and platform selector scripts.
    // They run only after the preserved homepage HTML is present in the DOM.
    try {
      new Function(legacyScripts)();
    } catch (error) {
      console.error("Some legacy homepage interactions could not initialise.", error);
    }

    // The four profile/project cards now open their dedicated SPA views without a browser reload.
    const cards = Array.from(rootRef.current.querySelectorAll("[data-platform]"));
    const handlers = [];
    cards.forEach((card) => {
      const handler = (event) => {
        const slug = card.getAttribute("data-platform");
        if (!["fiverr", "upwork", "linkedin", "avenqora"].includes(slug)) return;
        event.preventDefault();
        router.push("/" + slug);
      };
      card.addEventListener("click", handler);
      handlers.push([card, handler]);
    });

    return () => handlers.forEach(([card, handler]) => card.removeEventListener("click", handler));
  }, [router]);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: legacyBodyHTML }} />;
}
