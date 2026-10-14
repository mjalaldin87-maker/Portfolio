"use client";

import Link from "next/link";

const siteSectionTabs = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about-me" },
  { label: "Contact", href: "/#contact" }
];

const routeNames = [
  { slug: "fiverr", label: "Fiverr" },
  { slug: "upwork", label: "Upwork" },
  { slug: "linkedin", label: "LinkedIn" },
  { slug: "avenqora", label: "Avenqora Vortax" }
];

const fiverrGigs = [
  {title:"High-DA Technology Guest Posts with SaaS Backlinks", niche:["Technology","SaaS","Tech Link Building"], metrics:[["Impressions","205"],["Clicks","2"],["Orders","1"],["Cancellations","0%"]], blurb:"Guest-post and backlink support for technology and SaaS link-building campaigns."},
  {title:"Health & Fitness Guest Posts with Medical Backlinks", niche:["Health","Fitness","Medical"], metrics:[["Impressions","67"],["Clicks","1"],["Orders","0"],["Cancellations","0%"]], blurb:"Niche-specific guest-post outreach for health, fitness, and medical-related campaigns."},
  {title:"Business, Finance & Home Improvement Guest Posts", niche:["Business","Finance","Home Improvement"], metrics:[["Impressions","34"],["Clicks","0"],["Orders","0"],["Cancellations","0%"]], blurb:"Guest-post opportunities for business, finance, and home-improvement campaigns."},
  {title:"Fashion Guest Posts on High-DA Fashion Blogs", niche:["Fashion","Beauty","Travel","Lifestyle"], metrics:[["Impressions","94"],["Clicks","4"],["Orders","0"],["Cancellations","0%"]], blurb:"Fashion guest-post outreach, with the related gig listing also covering beauty, travel, and lifestyle sites."}
];

const upworkSkills = [
  "Search Engine Optimization","Link Building","Guest Post","Digital Marketing","Lead Generation",
  "Vendor & Supplier Outreach","SEO Backlinking","SEO Keyword Research","Off-Page SEO","Cold Email",
  "Email Outreach","B2B Lead Generation","Competitor Backlink Analysis","Backlink Analysis","Content Marketing",
  "On-Page SEO","Local SEO","Outreach Strategy","Outreach Email Copywriting","SEO Strategy"
];

const data = {
  fiverr: {
    label:"Fiverr",
    eyebrow:"Freelance profile · Off-page SEO",
    title:"Build High-Quality Backlinks to Support Website SEO",
    lead:"Muhammad Jalal’s Fiverr profile focuses on Off-Page SEO, guest posting, and link building through manual outreach and niche-relevant backlink opportunities, with an emphasis on genuine value and long-term SEO support.",
    snapshots:[["Profile name","Muhammad Jalal"],["Focus","Off-Page SEO"],["Primary services","Guest Posting · Link Building"],["Gig snapshot","Last 30 days"]],
    sections:[
      {title:"Profile Overview", icon:"fa-user-tie", cards:[
        {title:"Fiverr headline",text:"I Will Build High Quality Backlinks to Improve Your Website SEO"},
        {title:"About",text:"I am an SEO specialist specializing in Off-Page SEO, Guest Posting, and Link Building. I help websites improve search visibility and authority through clean, manual outreach, high-quality backlinks, and niche-relevant guest posts. My focus is genuine value and long-term results for clients."},
        {title:"Work experience",text:"SEO & Link Building Expert · Self-Employed / Freelance · June 2026 – Present",list:["Research niche-relevant websites and review domain metrics","Manage outreach opportunities across technology, business, and lifestyle categories","Support guest-post and link-insertion strategies"]}
      ]},
      {title:"Active Gigs · Last 30 Days", icon:"fa-chart-column", gigs:true},
      {title:"Skills & Education", icon:"fa-graduation-cap", cards:[
        {title:"Profile skills (listed as Intermediate)",list:["Guest Posting","Link Building","Off-Page SEO","Google SEO","Backlinks","Backlink Analysis"]},
        {title:"Education",text:"Board of Intermediate and Secondary Education Lahore · Arts"},
        {title:"Certification listed on Fiverr",text:"SEMRUSH Academy On-Page SEO and AI Essentials with Semrush · 2026"}
      ]}
    ],
    note:"Activity figures are the last-30-days metrics supplied for your Fiverr profile, not lifetime totals. This page deliberately does not invent package prices, package quantities, indexing guarantees, or site metrics beyond what you supplied.",
    cta:"View Fiverr Profile",
    url:"https://www.fiverr.com/s/xrrPDj4"
  },
  upwork: {
    label:"Upwork",
    eyebrow:"Professional profile · SEO & outreach",
    title:"SEO, Guest Posting & Manual Outreach Specialist",
    lead:"Specialist helping businesses improve search visibility and website authority with guest posting, niche-relevant backlink research, manual outreach, and competitor backlink analysis. The following profile facts are reproduced from the information you supplied.",
    snapshots:[["Hourly rate","$15.00 / hr"],["Availability","30+ hrs / week"],["Contract","Open to contract-to-hire"],["Location","Basirpur, Pakistan"],["Profile identity","Muhammad J. · Verified"],["Profile indicators","ID verified · Veteran status listed"]],
    sections:[
      {title:"Core Services",icon:"fa-link",cards:[{title:"SEO & outreach services",list:["Guest posting and guest-post outreach","High-DA/DR link insertion opportunities","Niche-relevant backlink building","Manual SEO outreach and publisher prospecting","Competitor backlink analysis and opportunity research"]}]},
      {title:"Target Industries",icon:"fa-earth-americas",cards:[{title:"Niche coverage",tags:["Technology & SaaS","Business & Finance","Health & Fitness","Home Improvement","Fashion & Beauty","Lifestyle","Travel"]}]},
      {title:"Experience & Workflow",icon:"fa-envelope-open-text",cards:[{title:"Nextage Solutions",text:"Guest Blogging and SEO Intern | Link Building & Outreach Specialist · July 2026 – Present",list:["Prospect research and niche targeting across Technology, SaaS, and Business","Reviewing domain metrics with SEMrush and SEOquake","Writing personalized email pitches"]}]},
      {title:"Languages",icon:"fa-language",cards:[{title:"Languages listed",list:["English — Basic","Urdu — Native or Bilingual","Panjabi / Punjabi — Conversational"]}]},
      {title:"Education & Certifications",icon:"fa-award",cards:[
        {title:"Education",list:["Government High School Rohela Tejeka — Arts","Board of Intermediate & Secondary Education, Lahore — Arts"]},
        {title:"SEMrush Academy · Local SEO Essentials",text:"Issued September 2026 · Expires September 2027",url:"https://static.semrush.com/academy/certificates/1843394581/muhammad-jalal-din_25.pdf",linkLabel:"Open existing certificate PDF"},
        {title:"SEMrush Academy · Off-Page SEO and AI Search Essentials",text:"Issued September 2026 · Expires September 2027",url:"https://static.semrush.com/academy/certificates/4f1d545f31/muhammad-jalal-din_25.pdf",linkLabel:"Open existing certificate PDF"},
        {title:"SEMrush Academy · Keyword Research Essentials",text:"Issued September 2026 · Expires September 2027",url:"https://static.semrush.com/academy/certificates/c3155321e7/muhammad-jalal-din_25.pdf",linkLabel:"Open existing certificate PDF"}
      ]},
      {title:"Skills Listed on Upwork",icon:"fa-list-check",cards:[{title:"Self-reported profile skills",tags:upworkSkills}]}
    ],
    note:"Rate, availability, languages, skills, history, and education are shown as supplied. Check Upwork for the current profile state before relying on time-sensitive availability details.",
    cta:"View Upwork Profile",
    url:"https://upwork.com/freelancers/~mjalaldin"
  },
  linkedin: {
    label:"LinkedIn",
    eyebrow:"Professional profile · SEO & creator work",
    title:"SEO & Link Building Expert",
    lead:"High-authority guest posts, content outreach, and organic-growth support, alongside UGC-style fashion, grooming, and lifestyle storytelling through the Jordan Maison creator identity.",
    snapshots:[["Name","Muhammad Jalal-din"],["Location","Lahore, Punjab, Pakistan"],["SEO focus","Guest Posts & Content Outreach"],["Creator identity","Jordan Maison · UGC"]],
    sections:[
      {title:"LinkedIn Headline",icon:"fa-id-card",cards:[{title:"Profile headline",text:"SEO & Link Building Expert | High Authority Guest Posts & Content Outreach | Driving Organic Growth."}]},
      {title:"Core Expertise",icon:"fa-link",cards:[
        {title:"SEO & Link Building",text:"High-authority guest posts, content outreach, and link building focused on organic-growth support."},
        {title:"Jordan Maison · UGC",text:"A creator identity for UGC-style short video production in fashion, grooming, and lifestyle, including menswear concepts and visual storytelling.",list:["Fashion styling recreations","Precision-tailoring and menswear storytelling","Grooming and lifestyle brand concepts"]},
        {title:"Brand-inspired fashion concepts",text:"Fashion recreations such as Gucci-inspired menswear are creative concepts only; they do not imply brand affiliation or endorsement."}
      ]},
      {title:"Professional Training",icon:"fa-graduation-cap",cards:[
        {title:"Nextage.Solutions.private",text:"Professional Certificate Training program in Web Page, Digital/Multimedia and Information Resources Design.",list:["Listed dates: July 2026 – November 2026","Focus described in supplied profile: strategic link building, content outreach, and high-authority editorial collaborations"]}
      ]},
      {title:"Licenses & Certifications",icon:"fa-award",cards:[
        {title:"On-Page SEO and AI Search Essentials with Semrush",text:"Issued September 2026 · Expires September 2027",badge:"Credential ID: 818486"},
        {title:"Local SEO Essentials with Semrush",text:"Issued September 2026 · Expires September 2027",badge:"Credential ID: 818447"}
      ]}
    ],
    note:"Details on this view are based on the LinkedIn profile information you supplied.",
    cta:"View LinkedIn Profile",
    url:"https://linkedin.com/in/mjalaldin"
  },
  avenqora: {
    label:"Avenqora Vortax",
    eyebrow:"Owned publication · Website project",
    title:"A Global Technology Publication & Practical Learning Hub",
    lead:"Avenqora Vortax connects technology, cybersecurity, B2B guides, and structured student lessons in a growing digital publication. This portfolio view highlights the site's actual public structure and editorial resources.",
    snapshots:[["Project role","Owner & CEO"],["Editorial areas","Tech · Cybersecurity · B2B"],["Learning hub","4 learning areas"],["Website","avenqoravortax.com"]],
    sections:[
      {title:"Publication Areas",icon:"fa-layer-group",cards:[
        {title:"Tech & SaaS",text:"Practical articles across SaaS, cloud computing, APIs, AI assistants, product development, data, product analytics, and modern digital operations.",url:"https://avenqoravortax.com/tech-saas.html",linkLabel:"Explore Tech & SaaS"},
        {title:"Cybersecurity",text:"Guides around phishing awareness, account protection, privacy, network security, zero trust, data security, and incident response.",url:"https://avenqoravortax.com/cybersecurity.html",linkLabel:"Explore Cybersecurity"},
        {title:"B2B Solutions",text:"Content covering customer relationships, CRM, business automation, digital transformation, vendor management, project delivery, and business performance.",url:"https://avenqoravortax.com/b2b.html",linkLabel:"Explore B2B Solutions"},
        {title:"Student Hub",text:"Step-by-step learning areas in Technology, Cybersecurity, Business, and Digital Skills for foundational knowledge and practical learning.",url:"https://avenqoravortax.com/student-hub.html",linkLabel:"Explore Student Hub"}
      ]},
      {title:"Discovery & Editorial Framework",icon:"fa-book-open",cards:[
        {title:"Content discovery",text:"The site has subject collections, on-site search, a sitemap, and links between relevant content.",url:"https://avenqoravortax.com/search.html",linkLabel:"Open Site Search"},
        {title:"Editorial Policy",text:"The published policy describes its approach to research, sources, originality, corrections, attribution, responsible AI use, and commercial-content transparency.",url:"https://avenqoravortax.com/editorial-policy.html",linkLabel:"Read Editorial Policy"},
        {title:"Contact the publication",text:"A public contact page separates general inquiries from editorial matters.",url:"https://avenqoravortax.com/contact.html",linkLabel:"Contact Avenqora Vortax"}
      ]}
    ],
    note:"This page describes Avenqora Vortax as a website/publication project. It does not claim third-party awards, traffic numbers, or SEO results that have not been provided.",
    cta:"Visit Avenqora Vortax",
    url:"https://avenqoravortax.com"
  }
};

function ExternalLink({ href, children, secondary = false }) {
  if (!href) return null;
  return <a className={secondary ? "profile-cta profile-cta-secondary" : "profile-cta"} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Card({ card, gigMode = false }) {
  return (
    <article className="profile-card">
      <h3>{card.icon && <i className={"fa-solid " + card.icon} aria-hidden="true" />}{card.title}</h3>
      {card.text && <p>{card.text}</p>}
      {card.badge && <div className="profile-tags"><span>{card.badge}</span></div>}
      {card.tags && <div className="profile-tags">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
      {card.list && <ul>{card.list.map((item) => <li key={item}>{item}</li>)}</ul>}
      {card.url && <a className="profile-text-link" href={card.url} target="_blank" rel="noopener noreferrer">{card.linkLabel || "Open resource"} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>}
      {gigMode && card.metrics && <div className="profile-metrics">{card.metrics.map(([label,value]) => <div className="profile-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}
    </article>
  );
}

export default function ProfileView({ slug }) {
  const profile = data[slug] || data.fiverr;
  return (
    <main className="profile-page">
      <div className="profile-page-inner">
        <nav className="portfolio-profile-tabs profile-page-tabs" aria-label="Main site and profile pages">
          {siteSectionTabs.map((item) => (
            <Link key={item.label} className="profile-section-tab" href={item.href}>
              {item.label}
            </Link>
          ))}
          {routeNames.map((item) => (
            <Link
              key={item.slug}
              className="portfolio-profile-tab"
              href={"/" + item.slug}
              aria-current={item.slug === slug ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <header className="profile-topbar">
          <Link className="profile-brand" href="/">AVENQORA VORTAX<small>Professional Portfolio</small></Link>
          <Link className="profile-back" href="/"><i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Portfolio</Link>
        </header>

        <section className="profile-hero">
          <p className="profile-eyebrow">{profile.eyebrow}</p>
          <h1>{profile.title}</h1>
          <p className="profile-lead">{profile.lead}</p>
        </section>

        <section className="profile-snapshot-grid" aria-label={profile.label + " summary"}>
          {profile.snapshots.map(([label,value]) => <article className="profile-snapshot" key={label}><span>{label}</span><strong>{value}</strong></article>)}
        </section>

        {profile.sections.map((section) => (
          <section className="profile-block" key={section.title}>
            <h2 className="profile-block-heading"><i className={"fa-solid " + section.icon} aria-hidden="true" />{section.title}</h2>
            {section.gigs ? (
              <div className="profile-card-grid">
                {fiverrGigs.map((gig) => (
                  <article className="profile-card" key={gig.title}>
                    <h3>{gig.title}</h3>
                    <p>{gig.blurb}</p>
                    <div className="profile-tags">{gig.niche.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="profile-metrics">
                      {gig.metrics.map(([label,value]) => <div className="profile-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="profile-card-grid">
                {section.cards.map((card) => <Card key={card.title} card={card} />)}
              </div>
            )}
          </section>
        ))}

        {profile.note && <p className="profile-footer">{profile.note}</p>}

        <div className="profile-cta-row">
          <ExternalLink href={profile.url}><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />{profile.cta}</ExternalLink>
          <Link className="profile-cta profile-cta-secondary" href="/"><i className="fa-solid fa-house" aria-hidden="true" /> Return to Portfolio Home</Link>
        </div>


      </div>
    </main>
  );
}
