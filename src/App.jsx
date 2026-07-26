import { ThemeProvider } from './theme/ThemeContext.jsx';
import BackgroundCanvas from './components/BackgroundCanvas.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Timeline from './components/Timeline.jsx';
import Skills from './components/Skills.jsx';
import Publications from './components/Publications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <ThemeProvider>
      <BackgroundCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Timeline />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
