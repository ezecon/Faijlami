// src/components/Main.jsx
import React from 'react';
import Draggable from 'react-draggable';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
];

const Main = () => {
  return (
    <div className="flex justify-center items-center relative w-screen h-screen bg-gray-100 overflow-hidden">
      <p className='playwrite-cu-caption'>Aab Mai Keya Karoon</p>
      {images.map((src, index) => (
        <Draggable key={index}>
          <div className="absolute cursor-move ">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-72 h-72 object-cover border border-gray-400 shadow-md rounded"
            />
          </div>
          
        </Draggable>
      ))}
    </div>
  );
};

export default Main;   
