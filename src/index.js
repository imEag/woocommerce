import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { EditTestimonial } from './components/Edit_testimonial.jsx';
import { CreateTestimonial } from './components/Create_testimonial';
import { Manage } from './components/manage';

// Styled components
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

/* Apollo */
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortygenerator.site/woocommerce',
  cache: new InMemoryCache(),
});

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  html {
    box-sizing: border-box;
  }
    
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, div, ul, li {
        margin: 0;
  }

  body {
    overflow-x: hidden;
  }

`;


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/edit/:id" element={<EditTestimonial />} />
        <Route path="/create" element={<CreateTestimonial />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
