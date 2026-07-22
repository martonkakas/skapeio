import { ReactNode } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ImprintDialog from '@/components/ImprintDialog';
import JordBanner from '@/components/JordBanner';
import Nav from '@/components/Nav';
import References from '@/components/References';
import Services from '@/components/Services';
import TopBar from '@/components/TopLink';


const classNames = {
  content: `divide-y divide-white/10`
}

const Home = (): ReactNode => (
  <main>
    <TopBar />
    <Nav />
    <div className={classNames.content}>
      <Hero />
      <About />
      <References />
      <JordBanner />
      <Services />
      <Contact />  
      <Footer />
      <ImprintDialog />
    </div>
  </main>
);

export default Home;