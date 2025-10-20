import React from 'react'

export default function Button({addClassses, label, onClick}) {
  return (
    <button className={`cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold 
    py-3 px-8 rounded-full shadow-lg transition duration-300 
    ease-in-out transform hover:scale-105 focus:outline-none 
    focus:ring-4 focus:ring-blue-300 ${addClassses}`}
    onClick={onClick}>
      {label}
    </button>
  )
}
