import Commitment from "@/components/Commitment";
import EventShowcase from "@/components/EventShowcase";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Commitment />
      <EventShowcase />
    </div>
  );
}
