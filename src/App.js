import React ,{useState}from 'react';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import Footer from './components/footer';


const employeeData = [
  {
      name: "Matt Huginbother",
      title: "Accountant",
      department: "Finance",
      start_date: "07-12-2012"
  },
  {
      name: "Jane Roe",
      title: "Front End Developer",
      department: "Development",
      start_date: "05-31-2009"
  },
  {
      name: "John Sage",
      title: "Data Analyst",
      department: "Data",
      start_date: "10-23-2005"
  }
]


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
