import React from 'react'

function Pagination(props) {
  return (
    <div className='bg-gray-400 p-4 mt-10 flex justify-center'>
        <div  className='pr-8'><i onClick={props.handlePrev} className="fa-solid fa-arrow-left-long cursor-pointer"></i></div>
        <div className='font-bold'>{props.pageNo}</div>
        <div  className='pl-8'><i onClick={props.handleNext} className="fa-solid fa-arrow-right-long cursor-pointer"></i></div>
    </div>
  )
}

export default Pagination
