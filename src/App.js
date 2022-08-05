import './App.css';

import styled from 'styled-components';

import { Hero } from './components/Hero_section';
import { Testimonials } from './components/Testimonials_section';
import { People } from './components/People_section';
import { Footer } from './components/Footer_section';

const StyledApp = styled.div`
  
`;

function App() {
  return (
    <StyledApp>
      <Hero></Hero>
      <Testimonials id="testimonials"></Testimonials>
      <People></People>
      <Footer></Footer>
    </StyledApp>
  );
}

export default App;
