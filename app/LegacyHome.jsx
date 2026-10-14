"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { legacyBodyHTML, legacyScripts } from "./legacy-data";

const profileTabs = [
  { slug: "fiverr", label: "Fiverr" },
  { slug: "upwork", label: "Upwork" },
  { slug: "linkedin", label: "LinkedIn" },
  { slug: "avenqora", label: "Avenqora Vortax" }
];

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

    // Add a visible four-tab navigation directly into the existing fixed header.
    // The original homepage HTML and every video-card frame remain untouched.
    const siteHeader = rootRef.current.querySelector("header");
    const navContainer = siteHeader?.querySelector(".nav-container");
    const handlers = [];
    let profileNav = null;

    if (siteHeader && navContainer && !siteHeader.querySelector(".portfolio-home-tabs")) {
      profileNav = document.createElement("nav");
      profileNav.className = "portfolio-profile-tabs portfolio-home-tabs";
      profileNav.setAttribute("aria-label", "Profile and project pages");
      const basePath = window.location.pathname.startsWith("/Portfolio") ? "/Portfolio" : "";

      profileTabs.forEach((item) => {
        const link = document.createElement("a");
        link.className = "portfolio-profile-tab";
        link.href = basePath + "/" + item.slug + "/";
        link.textContent = item.label;
        link.setAttribute("data-profile-tab", item.slug);
        const handler = (event) => {
          // Keep in-app tab navigation within the SPA, including GitHub Pages basePath.
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          router.push("/" + item.slug);
        };
        link.addEventListener("click", handler);
        handlers.push([link, handler]);
        profileNav.appendChild(link);
      });
      navContainer.insertAdjacentElement("afterend", profileNav);
    }

    // The four profile/project cards also open their dedicated SPA views without a browser reload.
    const cards = Array.from(rootRef.current.querySelectorAll("[data-platform]"));
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

    return () => {
      handlers.forEach(([element, handler]) => element.removeEventListener("click", handler));
      profileNav?.remove();
    };
  }, [router]);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: legacyBodyHTML }} />;
}
