import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import AboutUs from '@/components/AboutUs';
import FeaturedProjects from '@/components/FeaturedProjects';
import Teams from '@/components/Teams';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import CTABooking from '@/components/CTABooking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Packages />
        <AboutUs />
        <FeaturedProjects />
        <Teams />
        <Testimonials />
        <Blogs />
        <CTABooking />
      </main>
      <Footer />
    </>
  );
}
