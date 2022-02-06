import React from 'react';

import { Header } from "./Components/Header/";
import { SectionHome } from "./Components/SectionHome/";
import { SectionPortfolio } from "./Components/SectionPortfolio";
import { SectionSkills } from "./Components/SectionSkills";
import { Footer } from './Components/Footer';

function App() {
  return (
      <>
          <Header/>
          <SectionHome/>
          <SectionPortfolio/>
          <SectionSkills/>
          <Footer/>
      </>
  );
}

export default App;
