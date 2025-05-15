import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftSell - Resell Your Unused Software Licenses</title>
        <meta name="description" content="SoftSell helps you resell your unused software licenses quickly and securely." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeToggle />
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </main>
    </>
  );
} 