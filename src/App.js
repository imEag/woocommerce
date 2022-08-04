import logo from './logo.svg';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';

import { Hero } from './components/Hero_section';
import { Features } from './components/Features_section';
import { Section } from './components/Section';
import { Testimonials } from './components/Testimonials_section';
import { Cta } from './components/Cta_section';
import { People } from './components/People_section';
import { Footer } from './components/Footer_section';

const theme = {
  font: {
    primary: "'Roboto', sans-serif",
    secundary: "'Plus Jakarta Sans', sans-serif"
  },
  color: {
    dark_blue: "#272D4E",
    ligth_blue: "#299EF3",
    blue: "#299EF3",
    gray: "#94A2B3",
    purple: "#7854F7",
    dark_purple: "#5F37EF",
    green: "#70C217",
  },
  font_size: {
    tiny: "1.2rem",
    small: "1.8rem",
    medium: "2rem",
    medium_bigger: "2.67rem",
    big: "3.6rem",
    bigger: "5.5rem",
    extra: "8.5rem"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero></Hero>
      <Features></Features>
      <Section></Section>
      <Testimonials></Testimonials>
      <Cta></Cta>
      <People></People>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
