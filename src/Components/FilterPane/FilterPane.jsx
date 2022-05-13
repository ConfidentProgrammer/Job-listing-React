import React from 'react'
import './FilterPane.css'
import cross from '../../Images/icon-remove.svg'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import {del, getFilteredItems} from '../../Redux/Actions/getFilteredItems'
import App from '../../App'
function FilterPane({re_render}) {
    const filteredItems = useSelector(state => state.filteredItems)
    const dispatch = useDispatch()
    const [n, setN] = useState(false)
    return (
        <div className='filter-pane-container'
        style={filteredItems.length===0 ? {display:'none'} : {}}
        >
           
      {
          filteredItems.map(item => {
                  return (
                    <p className="filter-tag-item tag-item">
                    {item}
                    <img id={filteredItems.indexOf(item)} className='img-cross' src={cross} alt="cross image" onClick={() => {
                        const id = filteredItems.indexOf(item)
                        dispatch(del(id))
                        setN(!n)
                    }} />
                    </p> 
                  )
          })
      }
            
        </div>
    )
}

export default FilterPane