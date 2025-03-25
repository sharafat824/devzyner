import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Team } from '../components/sections/Team';
import { Testimonials } from '../components/sections/Testimonials';
import { Process } from '../components/sections/Process'; // Create this similar to others

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process /> {/* Add your process/workflow section */}
      <Team />
      <Testimonials />
    </main>
  );
}