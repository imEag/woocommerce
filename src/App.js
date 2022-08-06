import './App.css';

import { Hero } from './components/Hero_section';
import { Testimonials } from './components/Testimonials_section';
import { People } from './components/People_section';
import { Footer } from './components/Footer_section';

function App() {
  return (
    <>
      <Hero></Hero>
      <Testimonials></Testimonials>
      <People></People>
      <Footer></Footer>
    </>
  );
}

export default App;
