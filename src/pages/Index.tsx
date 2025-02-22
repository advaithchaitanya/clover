import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Newsletter } from "@/components/sections/Newsletter";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
const Index = () => {
  return <div className="min-h-screen bg-black mx-0">
      <Navbar />
      <Sidebar />
      <main className="ml-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;