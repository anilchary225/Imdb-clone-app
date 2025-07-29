import React from 'react'

function Pagination(props) {
  return (
    <div className='flex items-center justify-center gap-6 bg-gray-200 px-6 py-3 mt-10 rounded-lg shadow-md'>
      <div>
        <i
          onClick={props.handlePrev}
          className="fa-solid fa-arrow-left-long cursor-pointer text-xl text-gray-700 hover:text-black transition-colors duration-150"
        ></i>
      </div>
      <div className='font-bold text-xl text-gray-800'>{props.pageNo}</div>
      <div>
        <i
          onClick={props.handleNext}
          className="fa-solid fa-arrow-right-long cursor-pointer text-xl text-gray-700 hover:text-black transition-colors duration-150"
        ></i>
      </div>
    </div>
  )
}

export default Pagination
