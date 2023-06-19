import PersonCard from './components/PersonCard';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName = {"Jane"}
      lastName = {"Smith"}
      age = {35}
      hairColor= {"Red"}
      />

<PersonCard
      firstName = {"Randel"}
      lastName = {"Violey"}
      age = {55}
      hairColor = {"White"}
      />

<PersonCard
      firstName = {"Hanry"}
      lastName = {"Loneal"}
      age = {32}
      hairColor = {"Black"}
      />

<PersonCard
      firstName = {"Jordan"}
      lastName = {"Bowl"}
      age = {48}
      hairColor = {"Blonde"}
      />
    </div>
  );
}

export default App;
