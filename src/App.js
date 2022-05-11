import './App.css';
import Card from './Components/Card/Card';
import {useEffect, useState} from 'react'
import data from './data.json'
function App() {
  const lang =['Frontend', 'Senior', 'HTML', 'CSS' , 'JavaScript']
 
  const [fetchedData, setFetchedData] = useState();

//  useEffect(() => {
//   fetch('./Data/data.json')
//   .then(response => response.json())
//   .then(data =>  (setFetchedData(data)))
//   .catch(error => {
//     console.log(error)
//   })
//  }, [])
 console.log(fetchedData)
  return (
    <div className="App">
      <header className='header-back'></header>
  {/* <Card companyName="Faceit" New="NEW" featured="FEATURED" role="Senior Frontend Developer" postedAt="1d ago" contract="Full Time" location="USA only" languages={lang} /> */}

  {
    data.map(info => {
      const mergedArray = info.languages.concat(info.tools, info.role, info.level)
      return(
      <Card companyName={info.company} New={info.new} featured={info.featured} role={info.position} postedAt={info.postedAt} location={info.location} contract={info.contract} languages={mergedArray} src={info.logo} />)
})
  }

    </div>
  );
}

export default App;
