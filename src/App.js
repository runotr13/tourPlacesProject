import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import Card from "./components/cards/Card";
import {data} from '../src/data';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Card veri={data}/>
    </div>
  );
}


export default App;
