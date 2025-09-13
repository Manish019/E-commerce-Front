import React from 'react'
import { Link } from 'react-router-dom'

const BannnerBox = (props) => {
  return (
<>
<div className="box-img overflow-hidden rounded-lg group">
  <Link to="/">
    <img
      src={props.Addimg}
      alt="trip"
      className="w-full h-auto transition-all ease-in-out group-hover:scale-103 group-hover:rotate-5"
    />
  </Link>
</div>


</>

)
}


export default BannnerBox