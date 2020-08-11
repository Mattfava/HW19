import React from 'react';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import Footer from './components/footer';
import Main from './components/main';


function App() {
  return (
    <div>
      <div className="wrapper">
      <Header></Header>
      <Table>
        <Main/>
      </Table>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
