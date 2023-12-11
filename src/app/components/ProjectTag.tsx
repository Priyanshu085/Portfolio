import React from 'react'
interface Tab{
  onClick: (selectTab: string) => void;
  tag: string;
  name: string;
  isSelected: boolean,
}

const ProjectTag = ({onClick, tag, isSelected, name}: Tab) => {
  const activeButton = isSelected 
  ? "bg-red-700 border-2 border-white font-bold text-black" 
  : "text-gray-500 border-2 ";

  return (
    <button 
      className= 
      {`${activeButton} rounded-xl border-2 px-5 py-3 text-xl cursor-pointer  
      hover:bg-red-700 hover:text-black transform hover:scale-105 transition duration-300 ease-in-out
      `} 
      onClick={() => onClick(tag)}>
      {name}
    </button>          
  )
}

export default ProjectTag