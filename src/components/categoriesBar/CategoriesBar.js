import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import "./_categoriesBar.scss"


const keywords = [
  'All', 'React js', 'Angular js', 'React Native', 'use of API', 'Redux', 'Music', 'Algorithm Art',
  'Guitar', 'Bengali Songs', 'Coding', 'Cricket', 'Football', 'Real Madrid', 'Gatsby', 'Poor Cpder', 'Shwetabh'
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState('All')

  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActiveElement(value)

    if (value === 'All') {
      dispatch(getPopularVideos())
    }
    else {
      dispatch(getVideosByCategory(value))
    }
  }

  return <div className='categoriesBar'>
    {
      keywords.map((value, index) => (
        <span
          onClick={() => handleClick(value)}
          key={index} className={activeElement === value ? "active " : ""} >
          {value}</span>
      ))}
  </div>
}

export default CategoriesBar
