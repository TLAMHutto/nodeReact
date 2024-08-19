
import React from 'react';

const ResistorNode = {
  id: 'resistor',
  position: { x: 100, y: 100 }, // Set an initial position
  data: { 
    label: 'Resistor',
    ohms: '10'
   },
  type: 'default', // You can use 'default' or a custom type based on your needs
  sourcePosition: 'right', // Position of the output port
  targetPosition: 'left', // Position of the input port
  style: {
    width: 100,
    height: 50,
    border: '1px solid #ddd',
    borderRadius: 5,
    padding: 10,
    background: '#fff',
  },
};

export default ResistorNode;
