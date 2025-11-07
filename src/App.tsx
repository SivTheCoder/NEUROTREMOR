import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Technical from './components/Technical';
import Impact from './components/Impact';
import Prototype from './components/Prototype';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Technical />
      <Impact />
      <Prototype />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
