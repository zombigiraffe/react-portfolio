import React from 'react'

const Pieces = (props) => {
  return (
    <div className='portfolio-cards'>
        <a href={props.link}><img src={props.img} alt=""/></a>
        <p>{props.p}</p>
        <p><a className="code-link" href={props.code}>Source Code</a></p>
    </div>
  )
}

export default Pieces