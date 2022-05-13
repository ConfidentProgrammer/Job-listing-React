import React from 'react'
import './Card.css'
import {useSelector, useDispatch} from 'react-redux'
import {getFilteredItems} from '../../Redux/Actions/getFilteredItems'
function Card({companyName, New, featured, role, postedAt, contract, location, languages, src }) {

//getting the filtered Items from redux
const filteredItem = useSelector(state => state.filteredItems)

//using dispatch
const dispatch = useDispatch();
const handleFilterClicks = (e) => {
 dispatch(getFilteredItems(e.target.innerHTML))
}
  return (
    <div className='card-container'>
        <span className="side"></span>
<div className="photo-desc-container">
        <div className="photo">
    <img src={src} alt="" className="companyImg" />
        </div>
     
     <div className="otherThanPhoto">
     <div className="company-new-featured-container">
            <p className="companyName">{companyName}</p>
            {New ?<p className="New">NEW</p> :'' }
            { featured ?<p className="featured">FEATURED</p> : ''}
        </div>

        <p className="job-title">{role}</p>

        <div className="job-char-container">
            <p className="day">{postedAt}</p>
            <p className="job-type">{contract}</p>
            <p className="job-location">{location}</p>
        </div>
 <hr className='hr' />

     </div>
     </div>
     <div className="tags-container">
            {
            languages.map(lang => (
                <p key={lang} className="tag-item" onClick={handleFilterClicks}>{lang}</p>
            ))
            }
        </div>
    </div>
  )
}

export default Card