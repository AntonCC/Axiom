import React from 'react'
import './banner.styles.scss'
import RoundedButton from '../../components/rounded-button/rounded-button.component'

const Banner = (props) => {
  const { title, img, body, btn } = props
  console.log(title)
  return (
    <div className="banner">
      <div className="container">
        <div className="side-a">
          <img src={img} alt="headphones"/>
        </div>
        <div className="side-b">
          <h2>{title}</h2>
          <h4>{body}</h4>
          {btn ? <RoundedButton btnPath={btn.path} btnText={btn.text} /> : null}
        </div>
      </div>
    </div>
  )
}
export default Banner