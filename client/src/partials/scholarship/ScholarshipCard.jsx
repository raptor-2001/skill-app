import React from 'react'
import { Link } from 'react-router-dom'

function ScholarshipCard({id,title, overview, detail}){
  
  if(id == undefined)
    return(
      <div></div>
    )
  return (
    <Link
      to={`/scholarship-info/${title}`}
    >
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{overview}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">View</span>
        </div>
      </div>
    </Link>
  )
}

export default ScholarshipCard
