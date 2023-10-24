import Navbar from './components/Navbar';
import './App.css';
import './Style.scss'
import Chat from './components/Chat';
import React from 'react';
function App() {
  const displayAlert = () => {
    setTimeout(() => {
      alert('I apologize for any inconvenience, but you are unable to chat with ChatGPT because the developer does not have a subscription to use the OpenAI API.');
    }, 2000); // 2000 milliseconds = 2 seconds
  };
  React.useEffect(() => {
    displayAlert();
  }, []);

  return (
    <div className="App text-white h-screen">
      <Navbar/>
      <Chat/>
    </div>
  );
}

export default App;
