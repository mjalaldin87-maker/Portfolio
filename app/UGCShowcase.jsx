"use client";

import { useEffect, useRef } from "react";
import { legacyBodyHTML, legacyScripts } from "./legacy-data";

const originalBody = legacyBodyHTML;
const originalScripts = legacyScripts;
const ugcStart = originalBody.indexOf('<article class="ugc-production-note"');
const ugcEnd = originalBody.indexOf("</section>", ugcStart);
const ugcMarkup = originalBody.slice(ugcStart, ugcEnd).replaceAll('href="#work"', 'href="#ugc-showcase"');
const categoryStart = originalScripts.indexOf("// Group current and future UGC cards");
const categoryEnd = originalScripts.indexOf("})();", categoryStart) + 5;
const categoryScript = originalScripts.slice(categoryStart, categoryEnd);

export default function UGCShowcase() {
  const showcaseRef = useRef(null);

  useEffect(() => {
    if (!showcaseRef.current || !categoryScript || showcaseRef.current.dataset.ready === "true") return;
    // Reuse the original category grouping logic so the same 30 cards retain their content and 9:16 video frames.
    new Function(categoryScript)();
    showcaseRef.current.dataset.ready = "true";
  }, []);

  return (
    <main className="ugc-only-page" ref={showcaseRef}>
      <div className="ugc-only-shell">
        <a className="ugc-return-link" href="https://mjalaldin87-maker.github.io/Portfolio/">← Main portfolio</a>

        <section className="ugc-creator-hero" aria-labelledby="ugc-creator-title">
          <div className="ugc-creator-mark" aria-hidden="true">JM</div>
          <div className="ugc-creator-copy">
            <p className="ugc-creator-eyebrow">UGC CREATOR PORTFOLIO</p>
            <h1 id="ugc-creator-title">Jordan Maison</h1>
            <p className="ugc-creator-role">Fashion · Grooming · Lifestyle · Product Demos</p>
            <p className="ugc-creator-intro">Short-form creator-style video concepts featuring product demonstrations, fashion presentation, lifestyle storytelling, and polished visual hooks for social content.</p>
            <div className="ugc-creator-tags" aria-label="UGC content categories">
              <span>Product demos</span><span>Fashion</span><span>Grooming</span><span>Lifestyle</span><span>Short-form video</span>
            </div>
            <p className="ugc-ai-disclosure"><strong>Transparency:</strong> The featured models are AI-generated, and the videos are portfolio samples/concepts. They are not presented as paid brand partnerships or real customer testimonials.</p>
            <div className="ugc-creator-actions">
              <a href="mailto:avenqoravortax@gmail.com?subject=UGC%20Video%20Inquiry" className="ugc-contact-button">Discuss a UGC project</a>
              <a href="#ugc-showcase" className="ugc-secondary-button">Watch the samples ↓</a>
            </div>
          </div>
        </section>

        <section className="ugc-samples-section" id="ugc-showcase" aria-labelledby="ugc-samples-title">
          <div className="ugc-samples-heading">
            <p className="ugc-creator-eyebrow">SELECTED WORK</p>
            <h2 id="ugc-samples-title">UGC Video Samples</h2>
            <p>Browse the sample videos by category. Each card includes its original preview, topic, niche, and short description.</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: ugcMarkup }} />
        </section>

        <footer className="ugc-only-footer">
          <span>Jordan Maison · UGC Creator Portfolio</span>
          <a href="mailto:avenqoravortax@gmail.com?subject=UGC%20Video%20Inquiry">Contact for UGC projects</a>
        </footer>
      </div>
    </main>
  );
}
