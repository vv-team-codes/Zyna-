import { createFileRoute } from "@tanstack/react-router";
import {
  Navbar, Hero, Problem, MidCta, HowItWorks, Features, Waitlist, Results, Comparison, Pricing, Faq, FinalCta, Contact, Footer,
} from "@/components/zyna/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZYNA — The 24/7 AI receptionist for appointment businesses" },
      { name: "description", content: "ZYNA answers customer messages, books and reschedules appointments, and sends reminders around the clock." },
      { property: "og:title", content: "ZYNA — The 24/7 AI receptionist" },
      { property: "og:description", content: "Never miss a booking again. ZYNA replies, books and reminds — day and night." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <MidCta />
        <HowItWorks />
        <Features />
        <Waitlist />
        <Results />
        <Comparison />
        <Pricing />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
