import React from 'react'
import './title.styles.scss'

const Title = (props) => {
  return (
    <div className="title">
      <div className="container">
        <h2>{ props.title }</h2>
      </div>
    </div>
  )
}
export default Title