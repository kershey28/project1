import { useRef, useEffect, useState } from 'react';
import { About, Cta, Features, Footer, Hero, Statistics } from './sections';
import Navigation from './components/navigation/Navigation';

const App = () => {
  // observer for nav tab position
  const headerRef = useRef(null);

  // fake loading spinner
  const [isLoading, setLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3500));
  };

  useEffect(() => {
    fakeRequest().then(() => {
      const spinner = document.querySelector('.spinner');

      if (spinner) {
        spinner.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  return (
    <div className="container-main">
      <Navigation headerRef={headerRef} />
      <Hero ref={headerRef} />
      <About />
      <Features />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
