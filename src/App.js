import Navbar from './components/Navbar';
import './App.css';
import './Style.scss'
import Chat from './components/Chat';
import React from 'react';
function App() {
 

  return (
    <div className="App text-white h-screen">
      {/* <Navbar/> */}
      <Chat/>
    </div>
  );
}

export default App;
