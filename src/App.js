import React from 'react';
import Header from './components/Header';  
import Content from './components/Content';  
import Footer from './components/Footer';  

function App() {
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
    textAlign: 'center', 
  };

  return (
    <div style={appContainerStyle}>
    
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />  
    </div>
  );
}


export default App;

