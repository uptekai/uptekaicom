import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly can you do for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're a results-based business focused on solving your specific pain points. You tell us what's slowing you down or holding you back — and we design the systems to fix it. Every solution we build is tailored to one outcome: saving you time and making you money.",
      },
    },
    {
      "@type": "Question",
      name: "What are some of the pain points you solve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle most of our clients' pain points in categories like Revenue & Growth, Bookings & Scheduling, Follow-Up & Retention, Reputation & Reviews, Operations & Admin, Sales Pipeline, Client Experience, Finance & Cash Flow, Hiring & HR, Content & Marketing, Data & Reporting, Partnerships & B2B, and Building an Online Presence.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvements within the first 2–4 weeks of implementation. We prioritize quick wins that deliver immediate ROI while building toward long-term systems that compound results over time.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to change our existing tools or systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We work with what you already have. Our solutions integrate with your existing tools — CRMs, email platforms, scheduling software, and more.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of ROI can we expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clients typically recover 15–30+ hours per week in manual work and see measurable revenue increases from faster lead response, fewer missed opportunities, and streamlined operations.",
      },
    },
    {
      "@type": "Question",
      name: "Is this only for large companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We work with businesses of all sizes — from solo founders to growing teams. Smaller businesses often see the fastest impact.",
      },
    },
    {
      "@type": "Question",
      name: "What if we're not tech-savvy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly who we're built for. You don't need to understand AI — you just need to know what results you want. We handle the technical side completely.",
      },
    },
    {
      "@type": "Question",
      name: "How much does this cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is scoped and priced based on your specific needs and goals. We offer a free consultation where we'll assess your situation and give you a clear picture of what's involved.",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>UpTek AI — Results-Driven AI Automation</title>
        <meta
          name="description"
          content="UpTek AI builds intelligent AI automation systems that streamline operations, eliminate busywork, and unlock new revenue for your business."
        />
        <link rel="canonical" href="https://uptekai.com/" />
        <meta property="og:url" content="https://uptekai.com/" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
