import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Works from './components/Works';
import Footer from './components/Footer';

import {React, useEffect, useState} from "react";
import axios from "axios";

function App() { 
  const readtoken = "fd7190c3e8b57e17d6b1663927ee8e0d4ff68e43";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${readtoken}`).then(res => {
        setData(res.data.data.fields.my_portfolio);
      }).catch(err => {
        console.log(err);
      })
    }
    getData();
  }, []);
  return (
    <div>
       <Navbar />
       <Home content={data[0]}/>
       <About content={data[1]}/>
      <Skills content={data[2]}/>
      <Education content={data[3]}/>
      <Works content={data[4]}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
