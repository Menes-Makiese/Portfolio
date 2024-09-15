import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="">
        <div className="relative z-50 bg-zinc-950">
          <StarsCanvas />
          <Navbar />
          <Hero />
         
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0 bg-zinc-950">
          <Contact />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App
