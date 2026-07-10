import { ReactNode } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import JordBanner from '@/components/JordBanner';
import Nav from '@/components/Nav';
import References from '@/components/References';
import Services from '@/components/Services';
import TopBar from '@/components/TopBar';

const Home = (): ReactNode => (
  <main className="min-h-screen bg-black bg-grid-pattern relative">
    <TopBar />
    <Nav />
    
    <div className="divide-y divide-white/10">
      <Hero />
      <About />
      <References />
      <JordBanner />
      <Services />
      <Contact />  
      <Footer />
    </div>
  </main>
);

export default Home;