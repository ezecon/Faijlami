// src/components/Main.jsx
import React from 'react';
import Draggable from 'react-draggable';

const images = [
  'https://via.placeholder.com/150?text=Image+1',
  'https://via.placeholder.com/150?text=Image+2',
  'https://via.placeholder.com/150?text=Image+3',
  'https://via.placeholder.com/150?text=Image+4',
  'https://via.placeholder.com/150?text=Image+5',
  'https://via.placeholder.com/150?text=Image+6',
  'https://via.placeholder.com/150?text=Image+7',
  'https://via.placeholder.com/150?text=Image+8',
];

const Main = () => {
  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
      {images.map((src, index) => (
        <Draggable key={index}>
          <div className="absolute cursor-move">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-36 h-36 object-cover border border-gray-400 shadow-md rounded"
            />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Main;
