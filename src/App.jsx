import React from 'react'


const App = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '841d3d62e4msh4d331cc7eefed46p1ed864jsn450ba9ceb17c',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const fetchData = async()=>{
   try {
    const res = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options);
    const data = res.json();
   } catch (error) {
    console.log(error);
   }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
    <h1>Hello</h1>
    </>
  )
}

export default App