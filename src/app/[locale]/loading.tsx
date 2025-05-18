import React from 'react'
import "./loading.css"
const Loading = () => {
  return (
    <div className={"loading"}>
            <div className='push-pop loader'>
                <div></div>
                <div></div>
            </div>
            {/* <div className='push-out loader'>
                <div></div>
                <div></div>
            </div> */}
    </div>
  )
}

export default Loading