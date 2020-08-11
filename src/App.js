import React ,{useState}from 'react';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import Footer from './components/footer';
import employeeData from './employeeData';





function App() {

  const[search, setSearch]=useState("");

  return (
    <div>
      <div className="wrapper">
      <Header></Header>
      <Table employeeData={employeeData} search={search}>
      </Table>
      <form>
        Search for Employees by name:
      <input value={search} onChange={(evt)=> setSearch(evt.target.value)} placeholder="name"></input>
      </form>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
