import './App.css';
import Card from './Components/Card/Card';
import {useEffect, useState} from 'react'
import data from './data.json'
import FilterPane from './Components/FilterPane/FilterPane';
import {useSelector} from 'react-redux'

function App() {
 
  const filteredItems = useSelector(state => state.filteredItems)
  const [filteredData, setFilteredData] = useState(data);
 //setting filtered data 
 useEffect(() => {
    let result = []
    let mergedArray = []
    data.map(info => {
      mergedArray = info.languages.concat(info.tools, info.role, info.level)
      const containsAll = filteredItems.every(elem => mergedArray.includes(elem))
     
      if(containsAll) {
        result.push(info)
      }

 })
 if(result.length!==0)
    setFilteredData(result)
 
 }, [filteredItems])

  return (
    <div className="App">
      <header className='header-back'></header>
   { filteredItems.length!==0 ? <FilterPane /> : ''}
  {
    filteredData.map(info => {
      const mergedArray = info.languages.concat(info.tools, info.role, info.level)
      return(
      <Card key={info.id} companyName={info.company} New={info.new} featured={info.featured} role={info.position} postedAt={info.postedAt} location={info.location} contract={info.contract} languages={mergedArray} src={info.logo} />)
})
  }

    </div>
  );
}

export default App;
