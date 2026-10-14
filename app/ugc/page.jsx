import UGCShowcase from "../UGCShowcase";

export const metadata = {
  title: "Jordan Maison | UGC Creator Portfolio",
  description: "UGC-style video samples for fashion, grooming, lifestyle, and product demonstrations. AI-generated models are clearly disclosed.",
  alternates: { canonical: "https://mjalaldin87-maker.github.io/Portfolio/ugc/" },
  openGraph: {
    title: "Jordan Maison | UGC Creator Portfolio",
    description: "Explore UGC-style product demos, fashion, grooming, and lifestyle video concepts.",
    url: "https://mjalaldin87-maker.github.io/Portfolio/ugc/"
  }
};

export default function UGCPage() {
  return <UGCShowcase />;
}
