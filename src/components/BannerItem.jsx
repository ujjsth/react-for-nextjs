import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerItem({ title, content}) {
  return (
    <div className='item'>
        <h1>{title}</h1>
        <p>{content}</p>
        <Link to="#">Read More</Link>
    </div>
  )
}
