import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscountBanner from "@/components/DiscountBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <DiscountBanner />
      <WhyChooseUs />
      <Menu />
      <Story />
      <Reviews />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}