import React from 'react'

const Grid = ({ title, children }) => (
  <div className="max-w-2xl mx-auto px-10 mt-10">
    <h3 className="text-xs border-b border-gray-400 inline-block">{title}</h3>

    <div className="mt-4">{children}</div>
  </div>
)

export default Grid
