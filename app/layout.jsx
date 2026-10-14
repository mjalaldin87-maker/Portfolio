import "./globals.css";
import "./legacy-home.css";
import "./theme.css";

export const metadata = {
  title: "Muhammad Jalal Din | Guest Posting, SEO & UGC",
  description: "Guest posting, blogger outreach, off-page SEO, UGC samples, professional profiles, and the Avenqora Vortax publication project.",
  metadataBase: new URL("https://mjalaldin87-maker.github.io")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
