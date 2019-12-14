import React from "react";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import LocationsList from "./components/LocationsList.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
