import {useEffect, useState} from 'react';
import NetflixSlider from './components/NetflixSlider';


const App = () => {
  const [myData, setMyData] = useState([]);

 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '841d3d62e4msh4d331cc7eefed46p1ed864jsn450ba9ceb17c',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const fetchData = async ()=>{
   try {
    const res = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options);
    const data = await res.json();
    console.log(res);
    console.log(data);
    setMyData(data.titles);
   } catch (error) {
    console.log(error);
   }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return(
    <>
    {
      myData.map((curElem) => {
        //here mainData is prop which is passed to NetflixSlider component
        return <NetflixSlider key={curElem.summary.id} mainData={curElem}/>
      })
    }
    </>
    )
  
}

export default App;